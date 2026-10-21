import Link from "next/link";
import { PaidPlacementDisclosure } from "./editorial";
import Image from "next/image";
import { Icon } from "./icons";
import { CategoryGrid, SectionHeading, GuideCard, MethodSteps } from "./ui";
import { guides } from "@/lib/guides";
import { homeSeo } from "@/lib/seo";

export function Home() {
  const latest = [
    "choose-credit-card",
    "compare-mortgage-estimates",
    "debt-settlement-vs-management",
  ].map((slug) => guides.find((g) => g.slug === slug)!);
  return (
    <main id="main-content" className="editorial-home">
      <section className="photo-hero" aria-labelledby="hero-heading">
        <Image
          className="hero-photograph"
          src="/images/hero.webp"
          alt="A person reviewing household finances at a sunlit kitchen table"
          fill
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container photo-hero-content">
          <h1 id="hero-heading">{homeSeo.h1}</h1>
          <p>
            {homeSeo.tagline} Compare gold IRA companies, mortgage lenders,
            banks, credit cards, debt relief, investing, and law firms.
          </p>
          <form className="editorial-search" action="/search" role="search">
            <Icon name="search" size={22} />
            <label htmlFor="home-search" className="sr-only">
              Search companies, categories, and guides
            </label>
            <input
              id="home-search"
              name="q"
              placeholder="What are you looking for?"
              type="search"
            />
            <button type="submit">
              Search <Icon name="arrow" size={17} />
            </button>
          </form>
        </div>
      </section>
      <div className="popular-bar">
        <div className="container popular-bar-inner">
          <span>Popular comparisons</span>
          <Link href="/gold/best-gold-companies">Best gold IRA companies</Link>
          <Link href="/mortgages/best-mortgage-lenders">
            Best mortgage lenders
          </Link>
          <Link href="/legal/personal-injury">Personal injury law firms</Link>
          <Link href="/credit-cards/best-credit-cards">Best credit cards</Link>
          <Link href="/debt-relief/best-debt-relief-companies">
            Debt relief companies
          </Link>
        </div>
      </div>
      <section className="home-categories container" id="categories">
        <SectionHeading
          title="Compare companies by category"
          href="/categories"
          linkText="Explore all categories"
        />
        <CategoryGrid />
      </section>
      <section className="gold-editorial" aria-labelledby="gold-heading">
        <div className="gold-photograph">
          <Image
            src="/images/gold.webp"
            alt="Gold bullion coins on sunlit limestone"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
        <div className="gold-editorial-copy">
          <span className="eyebrow">THE GOLD IRA GUIDE</span>
          <h2 id="gold-heading">
            A more confident way
            <br className="desktop-break" /> to compare gold IRA companies.
          </h2>
          <p>
            Compare gold IRA companies and bullion dealers on fees, minimums,
            storage, and buyback terms, and find a company that fits your goals.
          </p>
          <Link className="button" href="/gold/best-gold-companies">
            Compare gold IRA companies <Icon name="arrow" size={19} />
          </Link>
          <div className="featured-pick">
            Featured company:{" "}
            <Link href="/reviews/citadel-gold">
              Citadel Gold <Icon name="arrow" size={14} />
            </Link>
          </div>
          <PaidPlacementDisclosure />
        </div>
      </section>
      <section className="home-guides container">
        <SectionHeading
          title="Guides and insights"
          href="/guides"
          linkText="More articles"
        />
        <div className="guide-grid">
          {latest.map((g) => (
            <GuideCard guide={g} key={g.slug} />
          ))}
        </div>
      </section>
      <section className="method-section home-method">
        <div className="container">
          <div className="method-heading">
            <div>
              <span className="eyebrow">HOW WE CHOOSE</span>
              <h2>
                How we review
                <br />
                and compare companies.
              </h2>
            </div>
            <p>
              We look at the costs, the details, and the tradeoffs. So you can
              spend less time searching and more time choosing what works for
              you.
            </p>
            <Link className="inline-link" href="/methodology">
              Our methodology <Icon name="arrow" size={18} />
            </Link>
          </div>
          <MethodSteps />
        </div>
      </section>
      <section className="people-section container">
        <div className="people-photo">
          <Image
            src="/images/debt-relief.webp"
            alt="Notes, a pen, and a cup of coffee on a sunny table"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        </div>
        <div className="people-copy">
          <span className="eyebrow">OUR EDITORIAL APPROACH</span>
          <h2>
            Real questions.
            <br />
            Clearer choices.
          </h2>
          <p>
            Useful comparisons start with useful questions. Our guides bring
            company information, costs, and important considerations together,
            so you can take your next step with a clearer view.
          </p>
          <Link className="inline-link" href="/about#editorial-team">
            About our editorial approach <Icon name="arrow" size={18} />
          </Link>
          <div className="editorial-signature">
            Review Top Companies Editorial Team
          </div>
        </div>
      </section>
    </main>
  );
}
