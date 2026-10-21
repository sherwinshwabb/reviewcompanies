import Link from "next/link";
import { siteUrl } from "@/lib/site-config";
import Image from "next/image";
import companyBrands from "@/lib/company-brands.json";
import { StructuredData } from "./structured-data";
import { Category, Provider, categories, categoryById } from "@/lib/catalog";
import { Guide } from "@/lib/guides";
import { Icon } from "./icons";
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumb container" aria-label="Breadcrumb">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ label: "Home", href: "/" }, ...items].map(
            (item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              ...(item.href ? { item: siteUrl(item.href) } : {}),
            }),
          ),
        }}
      />
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span className="breadcrumb-separator">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function CategoryCard({ category: c }: { category: Category }) {
  return (
    <Link
      className={`category-card ${c.id === "gold" ? "category-gold" : ""}`}
      href={c.path}
    >
      <span className="category-icon">
        <Icon name={c.icon} size={28} />
      </span>
      <h3>{categoryDisplayName(c.id, c.short)}</h3>
      <p>{c.description}</p>
    </Link>
  );
}
export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((c) => (
        <CategoryCard key={c.id} category={c} />
      ))}
    </div>
  );
}
export function ProviderLogo({
  provider: p,
  large = false,
}: {
  provider: Provider;
  large?: boolean;
}) {
  return (
    <ProviderBrand
      provider={p}
      className={`provider-logo ${large ? "large" : ""}`}
    />
  );
}
export function ProviderLeadImage({ provider }: { provider: Provider }) {
  return <ProviderBrand provider={provider} className="provider-lead-image" />;
}
function ProviderBrand({
  provider,
  className,
}: {
  provider: Provider;
  className: string;
}) {
  const brand = companyBrands[provider.id as keyof typeof companyBrands];
  return (
    <span
      className={`${className} company-brand ${brand.inset ? "company-brand-inset" : ""}`}
      style={{ backgroundColor: brand.background }}
    >
      <span className="company-brand-art">
        <Image
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={brand.width}
          height={brand.height}
          sizes={
            className === "provider-lead-image"
              ? "(max-width: 600px) 80vw, 360px"
              : "140px"
          }
        />
      </span>
    </span>
  );
}
const photoForArt: Record<string, string> = {
  gold: "gold",
  book: "gold",
  home: "mortgages",
  card: "credit-cards",
  bank: "mortgages",
  chart: "gold",
  scales: "credit-cards",
  car: "mortgages",
  graduate: "debt-relief",
  shield: "debt-relief",
  sunrise: "debt-relief",
};
export function GuideArt({ type }: { type: string }) {
  return (
    <div className="guide-photo">
      <Image
        src={`/images/${photoForArt[type] || "debt-relief"}.webp`}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 33vw"
      />
    </div>
  );
}
export function categoryDisplayName(id: string, fallback: string) {
  return (
    (
      {
        gold: "Gold companies",
        mortgages: "Mortgage lenders",
        "personal-injury": "Personal injury lawyers",
        "student-loans": "Student loan refinance",
        "credit-cards": "Credit cards",
        banking: "Banks",
        "lemon-law": "Lemon law lawyers",
        "debt-relief": "Debt relief",
        "credit-repair": "Credit repair",
        investing: "Investment companies",
      } as Record<string, string>
    )[id] || fallback
  );
}
export function GuideCard({ guide: g }: { guide: Guide }) {
  return (
    <Link href={`/guides/${g.slug}`} className="guide-card">
      <GuideArt type={g.art} />
      <div className="guide-card-content">
        <div className="guide-meta">
          <span>{categoryById(g.category).short}</span>
          <span>{g.minutes} min read</span>
        </div>
        <h3>{g.title}</h3>
        <p>{g.description}</p>
        <span className="inline-link">
          Read the guide <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkText,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link className="inline-link" href={href}>
          {linkText || "Explore more"}
          <Icon name="arrow" size={18} />
        </Link>
      )}
    </div>
  );
}
export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={i}>
          <summary>
            {item.question}
            <span>+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function MethodSteps() {
  return (
    <div className="method-steps">
      {[
        {
          n: "01",
          icon: "search",
          title: "Look at the details",
          body: "Start with costs, services, eligibility, and the terms that matter to your decision.",
        },
        {
          n: "02",
          icon: "compare",
          title: "See the whole picture",
          body: "Compare the strengths and limitations of each company, side by side.",
        },
        {
          n: "03",
          icon: "check",
          title: "Choose on your terms",
          body: "Read the full review and visit the provider when you’re ready for the next step.",
        },
      ].map((s) => (
        <div key={s.n}>
          <div className="step-top">
            <Icon name={s.icon} size={26} />
            <span>{s.n}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
