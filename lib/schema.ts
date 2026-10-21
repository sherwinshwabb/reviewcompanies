/** schema.org JSON-LD builders. Every value here is derived from published content; no ratings or counts are invented. */
import type { Category, Provider } from "./catalog";
import type { Guide } from "./guides";
import { siteSettings, siteUrl } from "./site-config";
import {
  categorySeo,
  guideSeo,
  publishedOn,
  reviewedOn,
  siteName,
} from "./seo";

type Json = Record<string, unknown>;

const context = "https://schema.org";

export const organizationId = () => siteUrl("/#organization");
export const websiteId = () => siteUrl("/#website");

export function organizationSchema(): Json {
  return {
    "@context": context,
    "@type": "Organization",
    "@id": organizationId(),
    name: siteName,
    url: siteSettings.origin,
    logo: {
      "@type": "ImageObject",
      url: siteUrl("/brand/logo.png"),
    },
    description:
      "Company reviews and practical comparisons across gold, mortgages, banking, credit, investing, debt relief, and legal services.",
  };
}

export function websiteSchema(): Json {
  return {
    "@context": context,
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteName,
    url: siteSettings.origin,
    publisher: { "@id": organizationId() },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteUrl("/search?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };
}

const editorialAuthor = () => ({
  "@type": "Organization",
  name: `${siteName} Editorial Team`,
  url: siteUrl("/about#editorial-team"),
});

export function faqSchema(items: { question: string; answer: string }[]): Json {
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function categoryPageSchema(c: Category, list: Provider[]): Json {
  const seo = categorySeo[c.id];
  return {
    "@context": context,
    "@type": "CollectionPage",
    "@id": siteUrl(c.path),
    url: siteUrl(c.path),
    name: seo.h1,
    headline: seo.h1,
    description: seo.metaDescription,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId() },
    publisher: { "@id": organizationId() },
    author: editorialAuthor(),
    datePublished: publishedOn,
    dateModified: reviewedOn,
    mainEntity: {
      "@type": "ItemList",
      name: `${seo.h1}: companies compared`,
      numberOfItems: list.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: list.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: siteUrl(`/reviews/${p.id}`),
      })),
    },
  };
}

export function reviewArticleSchema(p: Provider, c: Category): Json {
  const seo = categorySeo[c.id];
  const path = `/reviews/${p.id}`;
  return {
    "@context": context,
    "@type": "Article",
    "@id": siteUrl(path),
    mainEntityOfPage: siteUrl(path),
    headline: `${p.name} Review`,
    description: p.summary,
    inLanguage: "en-US",
    articleSection: seo.plural,
    author: editorialAuthor(),
    publisher: { "@id": organizationId() },
    datePublished: publishedOn,
    dateModified: reviewedOn,
    about: {
      "@type": "Organization",
      name: p.name,
      url: p.domain,
    },
  };
}

export function guideArticleSchema(g: Guide, c: Category): Json {
  const path = `/guides/${g.slug}`;
  const seo = guideSeo[g.slug];
  return {
    "@context": context,
    "@type": "Article",
    "@id": siteUrl(path),
    mainEntityOfPage: siteUrl(path),
    headline: seo?.metaTitle || g.title,
    description: seo?.metaDescription || g.description,
    inLanguage: "en-US",
    articleSection: categorySeo[c.id].plural,
    wordCount: g.sections.reduce(
      (n, s) => n + s.body.split(/\s+/).length,
      0,
    ),
    author: editorialAuthor(),
    publisher: { "@id": organizationId() },
    datePublished: publishedOn,
    dateModified: reviewedOn,
    citation: g.sources.map((s) => s.url),
  };
}
