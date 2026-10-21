import type { Metadata } from "next";
import { EditorialTeam } from "@/components/editorial";
import { pageRobots, siteSettings } from "@/lib/site-config";
import { notFound } from "next/navigation";
import { contentPaths } from "@/lib/site-paths";
import Link from "next/link";
import {
  categories,
  providers,
  providerById,
  categoryById,
} from "@/lib/catalog";
import { guides, guideBySlug } from "@/lib/guides";
import { policies as sourcePolicies } from "@/lib/policies";
import { publicationPages } from "@/lib/publication";
const policies = {
  ...sourcePolicies,
  ...publicationPages,
} as typeof sourcePolicies;
import {
  CategoryDirectory,
  CategoryPage,
  ReviewPage,
  GuidePage,
  MethodologyPage,
} from "@/components/pages";
import { CompanyDirectory, GuideDirectory } from "@/components/discovery";
import { Breadcrumb } from "@/components/ui";
import { PrivacyPreferences, MessageDraft } from "@/components/preferences";
export function generateStaticParams() {
  return contentPaths.map((path) => ({ slug: path.slice(1).split("/") }));
}
function pageInfo(path: string) {
  const c = categories.find((c) => c.path === path);
  if (c) return { title: c.title, description: c.intro };
  const parts = path.split("/");
  if (parts[1] === "reviews") {
    const p = providerById(parts[2]);
    if (p) return { title: `${p.name} Review`, description: p.summary };
  }
  if (parts[1] === "guides" && parts[2]) {
    const g = guideBySlug(parts[2]);
    if (g) return { title: g.title, description: g.description };
  }
  if (parts[1] === "methodology") {
    const cat = categories.find((c) => c.id === parts[2]);
    return {
      title: cat ? `${cat.short} Methodology` : "How We Review",
      description: "The research framework behind Review Top Companies.",
    };
  }
  const policy = policies[parts[1]];
  if (policy) return { title: policy.title, description: policy.intro };
  return {
    title:
      path === "/categories"
        ? "All Categories"
        : path === "/companies"
          ? "Company Reviews"
          : "Guides & Insights",
    description:
      "Explore practical company comparisons and guides from Review Top Companies.",
  };
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  return {
    ...pageInfo(path),
    alternates: { canonical: path },
    robots: pageRobots(path),
  };
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const category = categories.find((c) => c.path === path);
  if (category) return <CategoryPage category={category} />;
  if (path === "/categories") return <CategoryDirectory />;
  if (path === "/methodology") return <MethodologyPage />;
  if (
    slug[0] === "methodology" &&
    slug.length === 2 &&
    categories.some((c) => c.id === slug[1])
  )
    return <MethodologyPage category={categoryById(slug[1])} />;
  if (slug[0] === "reviews" && slug.length === 2) {
    const p = providerById(slug[1]);
    if (p) return <ReviewPage provider={p} />;
    notFound();
  }
  if (slug[0] === "guides" && slug.length === 2) {
    const g = guideBySlug(slug[1]);
    if (g) return <GuidePage guide={g} />;
    notFound();
  }
  if (path === "/companies" || path === "/guides") {
    const isCompanies = path === "/companies";
    return (
      <main id="main-content">
        <Breadcrumb
          items={[
            { label: isCompanies ? "Company reviews" : "Guides & insights" },
          ]}
        />
        <section className="page-intro container">
          <span className="eyebrow">
            {isCompanies
              ? "GET TO KNOW YOUR OPTIONS"
              : "A LITTLE MORE PERSPECTIVE"}
          </span>
          <h1>
            {isCompanies ? (
              <>
                The companies.
                <br />
                <em>The complete picture.</em>
              </>
            ) : (
              <>
                Good questions.
                <br />
                <em>Clearer answers.</em>
              </>
            )}
          </h1>
          <p>
            {isCompanies
              ? "Explore company and product profiles across our ten categories. Build a shortlist around what matters to you."
              : "Practical guides to the details behind your biggest financial and legal decisions."}
          </p>
        </section>
        <section className="container section section-top-small">
          {isCompanies ? <CompanyDirectory /> : <GuideDirectory />}
        </section>
      </main>
    );
  }
  if (slug.length === 1 && policies[slug[0]]) {
    const p = policies[slug[0]];
    return (
      <main id="main-content">
        <Breadcrumb items={[{ label: p.eyebrow.toLowerCase() }]} />
        <section className="page-intro container">
          <span className="eyebrow">{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </section>
        <article className="reading-column standalone-article policy-article">
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          {slug[0] === "about" && <EditorialTeam />}
          {slug[0] === "editorial-policy" && (
            <section>
              <h2>Our shared editorial byline</h2>
              <p>
                Comparison guides, company profiles, and practical articles use
                the Review Top Companies Editorial Team byline. The research
                reference identifies the source material behind a page;
                substantive revisions should be reflected in the page’s dates
                and supporting sources.
              </p>
            </section>
          )}
          {slug[0] === "privacy-choices" && <PrivacyPreferences />}
          {["contact", "corrections", "advertise"].includes(slug[0]) && (
            <MessageDraft
              correction={slug[0] === "corrections"}
              recipient={siteSettings.contactEmail}
            />
          )}
          <div className="policy-links">
            <Link href="/about">About us</Link>
            <Link href="/methodology">How we review</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </article>
      </main>
    );
  }
  notFound();
}
