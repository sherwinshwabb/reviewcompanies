import Link from "next/link";
import { EditorialByline, PaidPlacementDisclosure } from "./editorial";
import {
  Category,
  Provider,
  categoryById,
  providersFor,
  sourceDate,
} from "@/lib/catalog";
import { Guide, guides } from "@/lib/guides";
import {
  capitalize,
  categoryLabel,
  categorySeoFor,
  guideTitle,
  lowerFirst,
  methodologySeo,
  outboundRel,
  providerSeo,
  reviewedOn,
  reviewedOnLabel,
  staticSeo,
} from "@/lib/seo";
import {
  categoryPageSchema,
  faqSchema,
  guideArticleSchema,
  reviewArticleSchema,
} from "@/lib/schema";
import { StructuredData } from "./structured-data";
import {
  Breadcrumb,
  SectionHeading,
  CategoryGrid,
  ProviderLogo,
  ProviderLeadImage,
  GuideCard,
  FAQ,
  MethodSteps,
} from "./ui";
import { Icon } from "./icons";
import { CategoryComparison } from "./category-comparison";
import { CompareButton } from "./comparison-context";
import { LoanCalculator } from "./calculator";
export function CategoryDirectory() {
  const seo = staticSeo["/categories"];
  return (
    <main id="main-content">
      <Breadcrumb items={[{ label: "Categories" }]} />
      <section className="page-intro container">
        <span className="eyebrow">THE NEXT STEP STARTS HERE</span>
        <h1>{seo.h1}</h1>
        <p>{seo.intro}</p>
      </section>
      <section className="container section section-top-small">
        <CategoryGrid />
      </section>
      <section className="method-section">
        <div className="container">
          <SectionHeading title="How every comparison works" />
          <MethodSteps />
        </div>
      </section>
    </main>
  );
}
export function CategoryPage({ category: c }: { category: Category }) {
  const list = providersFor(c.id);
  const related = guides.filter((g) => g.category === c.id);
  const seo = categorySeoFor(c);
  const legal = ["personal-injury", "lemon-law"].includes(c.id);
  return (
    <main id="main-content">
      <StructuredData data={categoryPageSchema(c, list)} />
      <StructuredData data={faqSchema(seo.faqs)} />
      <Breadcrumb
        items={[
          { label: "Categories", href: "/categories" },
          { label: categoryLabel(c) },
        ]}
      />
      <section className="comparison-intro">
        <div className="container">
          <div className="category-title-icon">
            <Icon name={c.icon} size={31} />
          </div>
          <span className="eyebrow">{seo.eyebrow}</span>
          <h1>{seo.h1}</h1>
          <p className="intro-description">{seo.intro}</p>
          <EditorialByline
            kind="Comparison guide"
            methodology={`/methodology/${c.id}`}
          />
          {c.id === "gold" && <PaidPlacementDisclosure />}
          <p className="disclosure-line">
            <Link href="/advertising-disclosure">Advertising disclosure</Link> ·{" "}
            <Link href={`/methodology/${c.id}`}>Our methodology</Link>
          </p>
          <dl className="page-stats" aria-label="About this comparison">
            <div>
              <dt>Companies compared</dt>
              <dd>{list.length}</dd>
            </div>
            <div>
              <dt>Research criteria</dt>
              <dd>{c.criteria.length}</dd>
            </div>
            <div>
              <dt>Supporting guides</dt>
              <dd>{related.length}</dd>
            </div>
            <div>
              <dt>Last reviewed</dt>
              <dd>
                <time dateTime={reviewedOn}>{reviewedOnLabel}</time>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="container quick-picks" aria-label="Quick picks">
        {list.slice(0, 3).map((p, i) => (
          <Link className="quick-pick" href={`#${p.id}`} key={p.id}>
            <span className="eyebrow">
              {i === 0 && c.id === "gold"
                ? "SPONSORED #1 PLACEMENT"
                : `BEST FOR · 0${i + 1}`}
            </span>
            <h2>{p.name}</h2>
            <p>{seo.bestFor[p.id] || p.fit}</p>
            <span className="inline-link">
              Take a closer look <Icon name="arrow" size={15} />
            </span>
          </Link>
        ))}
      </section>
      <nav
        className="container comparison-jump"
        aria-label="Comparison sections"
      >
        <span>A clearer view of your options</span>
        <a href="#companies">Our picks</a>
        <a href="#compare-table">Compare</a>
        <a href="#overview">What to know</a>
        <a href="#methodology">How we chose</a>
        <a href="#questions">FAQs</a>
      </nav>
      <div className="container comparison-layout">
        <div className="comparison-main">
          <CategoryComparison category={c} providers={list} />
          <section className="category-table-wrap" id="compare-table">
            <h2>{seo.tableHeading}</h2>
            <p>{seo.tableIntro}</p>
            <div
              className="category-table-scroll"
              role="region"
              aria-label={`${capitalize(seo.plural)} comparison table`}
              tabIndex={0}
            >
              <table className="category-table">
                <caption className="sr-only">
                  {seo.h1}: company details in original ranking order
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">{legal ? "Coverage" : "Service type"}</th>
                    <th scope="col">Best for</th>
                    <th scope="col">Good to know</th>
                    <th scope="col">
                      {c.id === "gold" ? "Minimum" : "Next step"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <Link href={`/reviews/${p.id}`}>{p.name}</Link>
                      </td>
                      <td>{p.type}</td>
                      <td>{seo.bestFor[p.id] || p.fit}</td>
                      <td>{p.limitation}</td>
                      <td>
                        {p.minimum || (
                          <Link href={`/reviews/${p.id}`}>See full review</Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="reading-section" id="overview">
            <span className="eyebrow">WHAT TO KNOW BEFORE YOU CHOOSE</span>
            <h2>{capitalize(seo.plural)} explained</h2>
            {seo.overview.map((s) => (
              <div className="overview-item" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </section>
          <section className="reading-section" id="choosing">
            <span className="eyebrow">THE DETAILS THAT MATTER</span>
            <h2>How to choose a {seo.noun}</h2>
            {c.advice.map((a, i) => (
              <div className="advice-item" key={a.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </div>
            ))}
          </section>
          {c.id === "student-loans" && <LoanCalculator />}
          <section className="reading-section" id="methodology">
            <span className="eyebrow">A CLOSER LOOK AT OUR APPROACH</span>
            <h2>How we compare {seo.plural}</h2>
            <p>
              Our category framework focuses on the information that helps
              readers evaluate a {seo.noun}. The weights below define the
              research priorities; numerical company scores are withheld until
              the supporting evidence is complete.
            </p>
            <div className="criteria-bars">
              {c.criteria.map(([label, weight]) => (
                <div key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{weight}%</strong>
                  </div>
                  <span className="criteria-track">
                    <span style={{ width: `${weight * 2.5}%` }} />
                  </span>
                </div>
              ))}
            </div>
            <Link className="inline-link" href={`/methodology/${c.id}`}>
              Read the complete methodology <Icon name="arrow" size={18} />
            </Link>
          </section>
          <section className="reading-section" id="questions">
            <h2>Frequently asked questions about {seo.plural}</h2>
            <FAQ items={seo.faqs} />
          </section>
          <section className="sources-section" id="sources">
            <h3>Sources & further reading</h3>
            <p>
              Provider websites are starting points for product and service
              information. A company’s own description does not independently
              establish quality or suitability.
            </p>
            <ul>
              {list.map((p) => (
                <li key={p.id}>
                  <a href={p.domain} target="_blank" rel={outboundRel(p.id)}>
                    {p.name} — official website{" "}
                    <Icon name="external" size={12} />
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/corrections">
              See something that needs correcting?
            </Link>
          </section>
        </div>
        <aside className="comparison-sidebar">
          <div className="sidebar-sticky">
            <span className="eyebrow">ON THIS PAGE</span>
            <nav aria-label="On this page">
              <a href="#companies">
                The companies <Icon name="arrow" size={14} />
              </a>
              <a href="#compare-table">Comparison table</a>
              <a href="#overview">What to know</a>
              <a href="#choosing">How to choose</a>
              <a href="#methodology">Our methodology</a>
              <a href="#questions">Common questions</a>
              <a href="#sources">Sources</a>
            </nav>
            <div className="sidebar-note">
              <Icon name="book" size={25} />
              <h3>Before you decide</h3>
              <p>Three questions worth asking:</p>
              <ol>
                {c.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
            </div>
            <Link href="/compare" className="sidebar-compare">
              <Icon name="compare" size={20} />
              <span>
                See your shortlist
                <br />
                <strong>Open comparison →</strong>
              </span>
            </Link>
          </div>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-section">
          <div className="container">
            <SectionHeading
              eyebrow="KEEP EXPLORING"
              title={`${capitalize(seo.plural)}: guides and insights`}
              href="/guides"
              linkText="All guides"
            />
            <div className="guide-grid">
              {related.slice(0, 3).map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export function ReviewPage({ provider: p }: { provider: Provider }) {
  const c = categoryById(p.category);
  const seo = providerSeo(p);
  const alternatives = providersFor(c.id)
    .filter((x) => x.id !== p.id)
    .slice(0, 3);
  const related = guides.filter((g) => g.category === c.id).slice(0, 3);
  return (
    <main id="main-content">
      <StructuredData data={reviewArticleSchema(p, c)} />
      <Breadcrumb
        items={[{ label: categoryLabel(c), href: c.path }, { label: p.name }]}
      />
      <section className="review-hero container">
        <div>
          <span className="eyebrow">
            COMPANY REVIEW · {seo.plural.toUpperCase()}
          </span>
          <h1>{seo.h1}</h1>
          <p>
            Best for {lowerFirst(seo.bestFor)}. The service, the
            considerations, and the questions worth asking before you choose a{" "}
            {seo.noun}.
          </p>
          <EditorialByline
            kind="Company profile"
            methodology={`/methodology/${c.id}`}
          />
          {p.id === "citadel-gold" && <PaidPlacementDisclosure />}
        </div>
        <ProviderLeadImage provider={p} />
      </section>
      <div className="container review-layout">
        <article className="review-article">
          <section>
            <span className="eyebrow">AT A GLANCE</span>
            <h2>{p.name} at a glance</h2>
            <p className="lead-paragraph">{p.summary}</p>
            <dl className="fact-grid">
              <div>
                <dt>Category</dt>
                <dd>
                  <Link href={c.path}>{categoryLabel(c)}</Link>
                </dd>
              </div>
              <div>
                <dt>Service type</dt>
                <dd>{p.type}</dd>
              </div>
              <div>
                <dt>Best for</dt>
                <dd>{seo.bestFor}</dd>
              </div>
              <div>
                <dt>{c.id === "gold" ? "Minimum investment" : "Pricing"}</dt>
                <dd>{p.minimum || "Confirm current terms directly"}</dd>
              </div>
              <div>
                <dt>Official website</dt>
                <dd>
                  <a href={p.domain} target="_blank" rel={outboundRel(p.id)}>
                    {new URL(p.domain).hostname.replace("www.", "")}{" "}
                    <Icon name="external" size={12} />
                  </a>
                </dd>
              </div>
              <div>
                <dt>Last reviewed</dt>
                <dd>
                  <time dateTime={reviewedOn}>{reviewedOnLabel}</time>
                </dd>
              </div>
            </dl>
          </section>
          <section>
            <h2>{p.name} pros and cons</h2>
            <div className="pros-cons">
              <div>
                <h3>
                  <Icon name="check" size={19} /> What to explore
                </h3>
                <ul>
                  {p.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>What to keep in mind</h3>
                <p>{p.limitation}</p>
              </div>
            </div>
          </section>
          <section>
            <h2>{p.name} costs, terms, and eligibility</h2>
            <p>{c.advice[0].body}</p>
            <p>
              Before choosing {p.name}, request current written terms for the
              specific product or service you need. Confirm all one-time and
              recurring charges, eligibility requirements, geographical
              restrictions, and cancellation or exit conditions.
            </p>
            {p.minimum && (
              <p>
                The company’s gold IRA page states a $25,000 minimum. Confirm
                the requirement and full fee schedule for your proposed account;
                this is a company-published figure, not a personalized offer.
              </p>
            )}
          </section>
          <section>
            <h2>Who should consider {p.name}?</h2>
            <p>
              {p.name} belongs on your research list if you are exploring{" "}
              {lowerFirst(p.type)} and want {lowerFirst(seo.bestFor)}. Start
              with the fit described above, then compare the complete service
              and written terms against other {seo.plural} in the same category.
            </p>
            <h3>When another {seo.noun} may fit better</h3>
            <p>{c.advice[1].body}</p>
            <p>
              {p.limitation} If these conditions do not suit your needs, review
              the alternatives below before moving forward.
            </p>
          </section>
          <section>
            <h2>Questions to ask {p.name}</h2>
            <ol className="question-list">
              {c.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
              <li>
                Can you provide the full agreement and current terms in writing?
              </li>
            </ol>
          </section>
          <section>
            <h2>How we review {seo.plural}</h2>
            <p>
              We separate company descriptions from comparative evidence. A
              complete assessment requires verified identity, current terms,
              relevant costs, and a consistent category-specific research
              process. Company scores are not assigned where that evidence is
              incomplete.
            </p>
            <Link className="inline-link" href={`/methodology/${c.id}`}>
              See the {seo.plural} methodology <Icon name="arrow" size={16} />
            </Link>
          </section>
          <section className="sources-section">
            <h3>Source information</h3>
            <a href={p.domain} target="_blank" rel={outboundRel(p.id)}>
              {p.name}: official product and service information{" "}
              <Icon name="external" size={13} />
            </a>
            <p>
              Research reference: the Rate Top Companies launch guide dated{" "}
              {sourceDate}. Last reviewed {reviewedOnLabel}. Current
              account-specific terms should be confirmed with the provider.
            </p>
            <Link href="/corrections">Suggest a factual correction</Link>
          </section>
        </article>
        <aside className="review-sidebar">
          <div className="review-action-card">
            <ProviderLogo provider={p} />
            <h3>Explore {p.name}</h3>
            <p>
              Review the company’s current information and take your next step
              directly.
            </p>
            {p.id === "citadel-gold" && <PaidPlacementDisclosure />}
            <a
              href={p.domain}
              target="_blank"
              rel={outboundRel(p.id)}
              className="button"
            >
              Visit {p.name}
              <Icon name="external" size={15} />
            </a>
            <CompareButton id={p.id} />
            <Link href={c.path}>Back to {seo.plural} comparison</Link>
          </div>
        </aside>
      </div>
      <section className="related-section">
        <div className="container">
          <SectionHeading
            eyebrow="KEEP YOUR OPTIONS OPEN"
            title={`Other ${seo.plural} to compare`}
            href={c.path}
            linkText="Full comparison"
          />
          <div className="alternatives-grid">
            {alternatives.map((a) => (
              <Link
                className="alternative-card"
                href={`/reviews/${a.id}`}
                key={a.id}
              >
                <ProviderLeadImage provider={a} />
                <h3>{a.name}</h3>
                <p>{providerSeo(a).bestFor}</p>
                <span className="inline-link">
                  Read review <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="related-section related-section-guides">
          <div className="container">
            <SectionHeading
              eyebrow="READ BEFORE YOU DECIDE"
              title={`${capitalize(seo.plural)}: guides and insights`}
              href="/guides"
              linkText="All guides"
            />
            <div className="guide-grid">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export function GuidePage({ guide: g }: { guide: Guide }) {
  const c = categoryById(g.category);
  const seo = categorySeoFor(c);
  const companies = providersFor(c.id).slice(0, 3);
  return (
    <main id="main-content">
      <StructuredData data={guideArticleSchema(g, c)} />
      <Breadcrumb
        items={[
          { label: "Guides & insights", href: "/guides" },
          { label: categoryLabel(c), href: c.path },
          { label: g.title },
        ]}
      />
      <div className="article-heading container">
        <span className="eyebrow">
          {seo.plural.toUpperCase()} · THE PRACTICAL GUIDE
        </span>
        <h1>{guideTitle(g)}</h1>
        <p>{g.description}</p>
        <EditorialByline kind="Practical guide" minutes={g.minutes} />
      </div>
      <div className="container article-layout">
        <article className="reading-column">
          {g.sections.map((s, i) => (
            <section id={`section-${i}`} key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          {g.category === "student-loans" && <LoanCalculator />}
          <section className="article-next">
            <Icon name={c.icon} size={35} />
            <h2>Ready to compare {seo.plural}?</h2>
            <p>Bring what you’ve learned to a side-by-side comparison.</p>
            <Link className="button" href={c.path}>
              Compare {seo.plural}
              <Icon name="arrow" size={16} />
            </Link>
          </section>
          <section className="article-companies">
            <h2>Related company reviews</h2>
            <ul>
              {companies.map((p) => (
                <li key={p.id}>
                  <Link href={`/reviews/${p.id}`}>{p.name} review</Link>
                  <span>{providerSeo(p).bestFor}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="sources-section">
            <h3>Sources & further reading</h3>
            <ul>
              {g.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                    <Icon name="external" size={12} />
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Published {sourceDate}. Last reviewed {reviewedOnLabel}.
            </p>
            <Link href="/corrections">Report a correction</Link>
          </section>
        </article>
        <aside className="article-sidebar">
          <span className="eyebrow">IN THIS GUIDE</span>
          {g.sections.map((s, i) => (
            <a key={s.title} href={`#section-${i}`}>
              {s.title}
            </a>
          ))}
        </aside>
      </div>
    </main>
  );
}
export function MethodologyPage({ category }: { category?: Category }) {
  const seo = methodologySeo(category);
  return (
    <main id="main-content">
      <Breadcrumb
        items={[
          {
            label: "How we review",
            href: category ? "/methodology" : undefined,
          },
          ...(category ? [{ label: categoryLabel(category) }] : []),
        ]}
      />
      <section className="page-intro container">
        <span className="eyebrow">THE THINKING BEHIND THE COMPARISON</span>
        <h1>
          {category ? (
            <>
              How we compare
              <br />
              <em>{categorySeoFor(category).plural}.</em>
            </>
          ) : (
            <>
              How we review
              <br />
              <em>and compare companies.</em>
            </>
          )}
        </h1>
        <p>{seo.metaDescription}</p>
      </section>
      <div className="container">
        <MethodSteps />
      </div>
      <article className="reading-column standalone-article">
        {(!category || category.id === "gold") && (
          <section>
            <h2>Paid placement in our gold comparison</h2>
            <PaidPlacementDisclosure />
            <p>
              The commercial arrangement determines Citadel Gold’s first
              position. The criteria below explain the research framework for
              the company information presented throughout the comparison.
            </p>
          </section>
        )}
        {category ? (
          <>
            <section>
              <h2>What matters when comparing {categorySeoFor(category).plural}</h2>
              <p>{category.intro}</p>
              <div className="method-table">
                <table>
                  <caption>
                    Research weighting for {categorySeoFor(category).plural}
                  </caption>
                  <thead>
                    <tr>
                      <th>Research criterion</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.criteria.map(([label, w]) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        <td>{w}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2>Questions the research must answer</h2>
              <ul>
                {category.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <section>
            <h2>Start with the decision</h2>
            <p>
              A gold dealer, a bank, and a law firm should not be evaluated
              using the same checklist. Each comparison starts with the service,
              intended audience, and relevant geography. The research pool
              includes the companies identified in the launch guide, with
              service types kept distinct.
            </p>
          </section>
        )}
        <section>
          <h2>Gather comparable evidence</h2>
          <p>
            Research should identify the legal entity and official website,
            collect written pricing and terms, check relevant registrations, and
            record the date and source for each material fact. Comparisons
            should use the same scenario wherever pricing is personalized.
          </p>
          <p>
            A provider’s statement is labeled as company information. It does
            not, by itself, establish superior quality, customer experience, or
            an independent test result.
          </p>
        </section>
        <section>
          <h2>Explain strengths and limitations together</h2>
          <p>
            The comparison should help you understand who a service may suit,
            what it costs, and why another option may fit better. Missing
            information remains unverified rather than becoming an assumed
            advantage or disadvantage.
          </p>
        </section>
        <section>
          <h2>Publish scores only when the evidence is complete</h2>
          <p>
            The proposed model uses a 100-point rubric with category-specific
            weights. Each criterion receives a documented 0–5 assessment,
            multiplied by its weight and divided by five. No numerical company
            score is published without the required evidence and reviewer
            signoff.
          </p>
          <p>
            Identity, availability, core costs, and material terms are required.
            Critical contradictions must be resolved, and all required criteria
            must be complete. Customer ratings, editorial scores, and list
            positions are separate concepts.
          </p>
        </section>
        <section>
          <h2>Make it easy to correct the record</h2>
          <p>
            Sources should be revisited when a material fee, product,
            restriction, or company status changes. Readers and companies can
            prepare a factual correction through the same channel.
          </p>
          <Link className="inline-link" href="/corrections">
            Report a correction <Icon name="arrow" size={16} />
          </Link>
        </section>
        {category && (
          <Link className="button" href={category.path}>
            Back to {categoryLabel(category).toLowerCase()}
            <Icon name="arrow" size={17} />
          </Link>
        )}
      </article>
    </main>
  );
}
