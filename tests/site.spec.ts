import { test, expect } from "@playwright/test";
import { categories, providers } from "../lib/catalog";
import { guides } from "../lib/guides";
import { policies } from "../lib/policies";
import { calculateLoan } from "../lib/loan";
import companyBrands from "../lib/company-brands.json";

test("the category inventory is exactly the ten requested labels", () => {
  expect(categories.map((c) => c.title)).toEqual([
    "Best Gold Companies",
    "Best Mortgage Companies",
    "Best Personal Injury Law Firms",
    "Best Student Loan Refinance",
    "Best Credit Cards",
    "Best banks",
    "Best Lemon Law Lawyers",
    "Best Debt Relief Companies",
    "Best Credit Repair Companies",
    "Best Investment Companies",
  ]);
  for (const c of categories) {
    expect(c.criteria.reduce((sum, [, weight]) => sum + weight, 0)).toBe(100);
    expect(
      providers.filter((p) => p.category === c.id).length,
    ).toBeGreaterThanOrEqual(3);
    expect(guides.some((g) => g.category === c.id)).toBeTruthy();
  }
  expect(new Set(providers.map((p) => p.id)).size).toBe(providers.length);
  expect(providers.filter((p) => p.category === "gold")[0].id).toBe(
    "citadel-gold",
  );
});
test("repayment math handles normal, zero, tiny, and invalid rates", () => {
  const result = calculateLoan(30000, 6.5, 10)!;
  expect(result.monthly).toBeCloseTo(340.64, 2);
  expect(result.total).toBeCloseTo(result.monthly * 120, 8);
  expect(calculateLoan(12000, 0, 10)).toEqual({
    monthly: 100,
    total: 12000,
    interest: 0,
    months: 120,
  });
  expect(calculateLoan(12000, 0.000000001, 10)!.monthly).toBeCloseTo(100, 6);
  for (const values of [
    [NaN, 5, 10],
    [10000, Infinity, 10],
    [-1, 5, 10],
    [0, 5, 10],
    [10000, -1, 10],
    [10000, 101, 10],
    [10000, 5, 0],
    [10000, 5, 1.5],
    [10000, 5, 51],
  ])
    expect(calculateLoan(...(values as [number, number, number]))).toBeNull();
});
test("every category, profile, guide, method, and supporting page renders", async ({
  request,
}) => {
  const paths = [
    "/",
    ...categories.map((c) => c.path),
    ...providers.map((p) => `/reviews/${p.id}`),
    ...guides.map((g) => `/guides/${g.slug}`),
    ...categories.map((c) => `/methodology/${c.id}`),
    ...Object.keys(policies).map((p) => `/${p}`),
    "/categories",
    "/advertising-disclosure",
    "/companies",
    "/guides",
    "/methodology",
    "/compare",
    "/search?q=gold",
  ];
  const internalLinks = new Set<string>();
  for (let start = 0; start < paths.length; start += 8) {
    await Promise.all(
      paths.slice(start, start + 8).map(async (path) => {
        const response = await request.get(path);
        expect(response.status(), path).toBe(200);
        const html = await response.text();
        expect(html, path).toContain('id="main-content"');
        expect(html, path).not.toContain("Create Next App");
        expect(html.match(/<h1(?:\s|>)/g)?.length, path).toBe(1);
        expect(html, path).toMatch(/name="robots" content="noindex, nofollow"/);
        for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
          const href = m[1];
          if (!href.startsWith("/_next/") && !href.startsWith("/brand/"))
            internalLinks.add(href);
        }
      }),
    );
  }
  for (const path of internalLinks) {
    expect((await request.get(path)).status(), `Internal link ${path}`).toBe(
      200,
    );
  }
});
test("preview indexing controls, branding assets, canonical metadata, and error handling", async ({
  request,
}) => {
  expect(await (await request.get("/robots.txt")).text()).toContain("Allow: /");
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain(
    "<url>",
  );
  for (const asset of [
    "/brand/logo.svg",
    "/brand/ratetopcompanies-logo.png",
    "/brand/ratetopcompanies-mark.png",
    "/brand/mark.svg",
    "/brand/logo-monochrome.svg",
    "/brand/logo-horizontal.svg",
    "/opengraph-image",
  ])
    expect((await request.get(asset)).status(), asset).toBe(200);
  const gold = await (await request.get("/gold/best-gold-companies")).text();
  expect(gold).toContain(
    'rel="canonical" href="https://ratetopcompanies.com/gold/best-gold-companies"',
  );
  expect(gold).toContain("Sponsored #1 placement");
  expect(gold).toContain("application/ld+json");
  const missing = await request.get("/this-page-does-not-exist");
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain("clearer path");
  const redirect = await request.get("/best-gold-companies", {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/gold/best-gold-companies");
});

test("migrated source data matches the recorded original checksums", async () => {
  const { createHash } = await import("node:crypto");
  const { readFile } = await import("node:fs/promises");
  const audit = JSON.parse(await readFile("docs/migration-audit.json", "utf8"));
  for (const file of audit.files) {
    const digest = createHash("sha256")
      .update(await readFile(file.path))
      .digest("hex");
    expect(digest, file.path).toBe(file.sha256);
  }
});

test("every category renders providers in the original ranking order", async ({
  request,
}) => {
  for (const category of categories) {
    const html = await (await request.get(category.path)).text();
    const original = providers
      .filter((p) => p.category === category.id)
      .map((p) => p.id);
    const rendered = [
      ...html.matchAll(/<article class="provider-card[^\"]*" id="([^\"]+)"/g),
    ].map((m) => m[1]);
    expect(rendered, category.title).toEqual(original);
    expect(html).not.toContain("#1 TOP PICK");
  }
});

test("all generated photographs and original company artwork are available", async ({
  request,
}) => {
  for (const name of [
    "hero",
    "gold",
    "credit-cards",
    "mortgages",
    "debt-relief",
  ]) {
    const response = await request.get(`/images/${name}.webp`);
    expect(response.status(), name).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/webp");
    expect((await response.body()).length).toBeGreaterThan(20_000);
  }
  for (const provider of providers) {
    const brand = companyBrands[provider.id as keyof typeof companyBrands];
    const response = await request.get(brand.logo);
    expect(response.status(), provider.name).toBe(200);
    expect(response.headers()["content-type"], provider.name).toContain(
      "image/",
    );
  }
  const missingImage = await request.get("/images/missing-image.webp");
  expect(missingImage.status()).toBe(404);
});

test("publishing settings keep previews private and require reviewed pages", async () => {
  const { resolveSiteSettings } = await import("../lib/site-config");
  expect(resolveSiteSettings({}).indexingEnabled).toBe(false);
  const settings = resolveSiteSettings({
    SITE_URL: "https://new-publication.example",
    SITE_INDEXING_ENABLED: "true",
    SITE_APPROVED_PATHS: "/, /gold/best-gold-companies, /reviews/citadel-gold",
    SITE_CONTACT_EMAIL: "editors@new-publication.example",
  });
  expect(settings.origin).toBe("https://new-publication.example");
  expect(settings.approvedPaths).toEqual([
    "/",
    "/gold/best-gold-companies",
    "/reviews/citadel-gold",
  ]);
  expect(settings.indexingEnabled).toBe(true);
  expect(
    resolveSiteSettings({
      SITE_URL: settings.origin,
      SITE_INDEXING_ENABLED: "true",
      VERCEL_ENV: "preview",
    }).indexingEnabled,
  ).toBe(false);
  for (const invalid of [
    { SITE_INDEXING_ENABLED: "true" },
    {
      SITE_URL: "https://new-publication.example",
      SITE_INDEXING_ENABLED: "true",
    },
    {
      SITE_URL: "http://localhost:3000",
      SITE_INDEXING_ENABLED: "true",
      SITE_APPROVED_PATHS: "/",
    },
    { SITE_URL: "https://new-publication.example/path" },
    { SITE_APPROVED_PATHS: "/search" },
    { SITE_APPROVED_PATHS: "/not-a-real-page" },
    { SITE_CONTACT_EMAIL: "hello@example.com?bcc=another@example.com" },
  ])
    expect(() => resolveSiteSettings(invalid)).toThrow();
});

test("the confirmed paid first placement is disclosed near the relevant content", async ({
  request,
}) => {
  for (const path of [
    "/",
    "/gold/best-gold-companies",
    "/reviews/citadel-gold",
    "/methodology/gold",
    "/advertising-disclosure",
  ]) {
    const html = await (await request.get(path)).text();
    expect(html, path).toContain(
      "Citadel Gold’s #1 position is a paid placement.",
    );
    expect(html, path).not.toContain("Our top pick");
  }
});

test("every page has unique, complete metadata and valid structured data", async ({
  request,
}) => {
  const { contentPaths } = await import("../lib/site-paths");
  const paths = ["/", ...contentPaths];
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  for (let start = 0; start < paths.length; start += 8) {
    await Promise.all(
      paths.slice(start, start + 8).map(async (path) => {
        const html = await (await request.get(path)).text();
        const decode = (s: string) =>
          s.replace(/&amp;/g, "&").replace(/&#x27;/g, "’").replace(/&quot;/g, '"');
        const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "");
        const pageTitle = title.replace(/ \| Rate Top Companies$/, "");
        expect(pageTitle.length, `${path} title "${title}"`).toBeGreaterThan(
          10,
        );
        expect(pageTitle.length, `${path} title "${title}"`).toBeLessThanOrEqual(
          72,
        );
        expect(titles.get(title), `duplicate title on ${path}`).toBeUndefined();
        titles.set(title, path);
        const description = decode(
          html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "",
        );
        expect(description.length, `${path} description`).toBeGreaterThan(50);
        expect(description.length, `${path} description`).toBeLessThanOrEqual(
          170,
        );
        expect(
          descriptions.get(description),
          `duplicate description on ${path}`,
        ).toBeUndefined();
        descriptions.set(description, path);
        expect(html, path).toContain(
          `rel="canonical" href="https://ratetopcompanies.com${path === "/" ? "" : path}"`,
        );
        for (const tag of [
          'property="og:title"',
          'property="og:description"',
          'property="og:url"',
          'property="og:image"',
          'name="twitter:card" content="summary_large_image"',
        ])
          expect(html, `${path} ${tag}`).toContain(tag);
        const scripts = [
          ...html.matchAll(
            /<script type="application\/ld\+json">([^<]+)<\/script>/g,
          ),
        ].map((m) => JSON.parse(m[1]) as { "@type": string });
        expect(scripts.length, `${path} JSON-LD`).toBeGreaterThanOrEqual(2);
        for (const s of scripts) expect(s["@type"], path).toBeTruthy();
        const types = scripts.map((s) => s["@type"]);
        if (categories.some((c) => c.path === path)) {
          expect(types, path).toContain("CollectionPage");
          expect(types, path).toContain("FAQPage");
          expect(types, path).toContain("BreadcrumbList");
        }
        if (path.startsWith("/reviews/") || path.startsWith("/guides/"))
          expect(types, path).toContain("Article");
      }),
    );
  }
});

test("comparison pages carry rich copy, labels, dates, and disclosed link relations", async ({
  request,
}) => {
  for (const category of categories) {
    const html = await (await request.get(category.path)).text();
    expect(html, category.path).toContain("Best for");
    expect(html, category.path).toContain("Frequently asked questions about");
    expect(html, category.path).toContain("Last reviewed");
    expect(html, category.path).toContain('dateTime="2026-10-21"');
    const list = providers.filter((p) => p.category === category.id);
    const itemList = JSON.parse(
      html.match(
        /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"CollectionPage"[^<]+)<\/script>/,
      )![1],
    );
    expect(itemList.mainEntity.numberOfItems).toBe(list.length);
    expect(itemList.mainEntity.itemListElement[0].name).toBe(list[0].name);
    for (const p of list) {
      const expectedRel =
        p.id === "citadel-gold"
          ? 'rel="noopener noreferrer sponsored"'
          : 'rel="noopener noreferrer nofollow"';
      expect(html, `${category.path} ${p.name}`).toContain(
        `href="${p.domain}" target="_blank" ${expectedRel}`,
      );
    }
  }
  const gold = await (await request.get("/gold/best-gold-companies")).text();
  expect(gold).toContain("<title>Best Gold IRA Companies of 2026");
  expect(gold).not.toContain("<title>Best Gold Companies |");
});

test("social preview images, robots directives, and launch approval shortcuts", async ({
  request,
}) => {
  const image = await request.get("/og/gold/best-gold-companies");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/og/not-a-page")).status()).toBe(404);
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /search");
  expect(robots).toContain("Disallow: /compare");
  for (const path of ["/search", "/compare", "/404"])
    expect(await (await request.get(path)).text(), path).toMatch(
      /name="robots" content="noindex, nofollow"/,
    );
  const { resolveSiteSettings } = await import("../lib/site-config");
  const { contentPaths } = await import("../lib/site-paths");
  const launch = resolveSiteSettings({
    SITE_URL: "https://new-publication.example",
    SITE_INDEXING_ENABLED: "true",
    SITE_APPROVED_PATHS: "all",
  });
  expect(launch.approvedPaths).toEqual(["/", ...contentPaths]);
});
