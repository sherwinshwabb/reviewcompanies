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
  return (
    <main id="main-content">
      <Breadcrumb items={[{ label: "Categories" }]} />
      <section className="page-intro container">
        <span className="eyebrow">THE NEXT STEP STARTS HERE</span>
        <h1>
          What are you
          <br />
          <em>looking for?</em>
        </h1>
        <p>
          Ten categories. Practical comparisons. A clearer view of the companies
          behind life’s important decisions.
        </p>
      </section>
      <section className="container section section-top-small">
        <CategoryGrid />
      </section>
      <section className="method-section">
        <div className="container">
          <SectionHeading title="A little perspective goes a long way." />
          <MethodSteps />
        </div>
      </section>
    </main>
  );
}
export function CategoryPage({ category: c }: { category: Category }) {
  const list = providersFor(c.id);
  const related = guides.filter((g) => g.category === c.id);
  return (
    <main id="main-content">
      <Breadcrumb
        items={[
          { label: "Categories", href: "/categories" },
          { label: c.short },
        ]}
      />
      <section className="comparison-intro">
        <div className="container">
          <div className="category-title-icon">
            <Icon name={c.icon} size={31} />
          </div>
          <span className="eyebrow">THE REVIEW TOP COMPANIES COMPARISON</span>
          <h1>{c.title}</h1>
          <p className="intro-description">{c.intro}</p>
          <EditorialByline
            kind="Comparison guide"
            methodology={`/methodology/${c.id}`}
          />
          {c.id === "gold" && <PaidPlacementDisclosure />}
          <p className="disclosure-line">
            <Link href="/advertising-disclosure">Advertising disclosure</Link> ·{" "}
            <Link href={`/methodology/${c.id}`}>Our methodology</Link>
          </p>
        </div>
      </section>
      <section className="container quick-picks" aria-label="Quick picks">
        {list.slice(0, 3).map((p, i) => (
          <Link className="quick-pick" href={`#${p.id}`} key={p.id}>
            <span className="eyebrow">
              {i === 0
                ? c.id === "gold"
                  ? "SPONSORED #1 PLACEMENT"
                  : "FIRST IN OUR COMPARISON"
                : `AT A GLANCE · 0${i + 1}`}
            </span>
            <h2>{p.name}</h2>
            <p>{p.fit}</p>
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
        <a href="#methodology">How we chose</a>
        <a href="#questions">FAQs</a>
      </nav>
      <div className="container comparison-layout">
        <div className="comparison-main">
          <CategoryComparison category={c} providers={list} />
          <section className="category-table-wrap" id="compare-table">
            <h2>The details, side by side.</h2>
            <p>
              Compare service types and important considerations. Check current
              terms directly with each provider.
            </p>
            <div
              className="category-table-scroll"
              role="region"
              aria-label={`${c.short} comparison table`}
              tabIndex={0}
            >
              <table className="category-table">
                <caption className="sr-only">
                  {c.title}: company details in original ranking order
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">
                      {["personal-injury", "lemon-law"].includes(c.id)
                        ? "Coverage"
                        : "Service type"}
                    </th>
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
          <section className="reading-section" id="choosing">
            <span className="eyebrow">THE DETAILS THAT MATTER</span>
            <h2>How to choose {c.short.toLowerCase()}</h2>
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
            <h2>What goes into a comparison?</h2>
            <p>
              Our category framework focuses on the information that helps
              readers evaluate a company. The weights below define the research
              priorities; numerical company scores are withheld until the
              supporting evidence is complete.
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
            <h2>Your questions, answered.</h2>
            <FAQ
              items={[
                {
                  question: `How should I use this ${c.short.toLowerCase()} comparison?`,
                  answer:
                    "Start with the service you need, read the advantages and limitations, and add up to three companies to a side-by-side comparison. Verify current costs and eligibility directly before making a decision.",
                },
                {
                  question:
                    "Why aren’t live rates and quotes shown for every company?",
                  answer:
                    "Rates, fees, minimums, and availability can depend on your circumstances and change over time. Where a current comparable offer has not been established, we direct you to the provider instead of displaying an assumed price.",
                },
                { question: c.questions[0], answer: c.advice[0].body },
                {
                  question:
                    "Can I compare companies without sharing my contact details?",
                  answer:
                    "Yes. Reviews, guides, filters, and comparisons are available without an account, email address, or telephone number. Provider links take you to the company’s own website.",
                },
              ]}
            />
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
                  <a href={p.domain} target="_blank" rel="noopener noreferrer">
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
              title="A little more perspective."
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
  const alternatives = providersFor(c.id)
    .filter((x) => x.id !== p.id)
    .slice(0, 3);
  return (
    <main id="main-content">
      <Breadcrumb
        items={[{ label: c.short, href: c.path }, { label: p.name }]}
      />
      <section className="review-hero container">
        <div>
          <span className="eyebrow">COMPANY REVIEW</span>
          <h1>{p.name}</h1>
          <p>
            {p.fit}. The service, the considerations, and the questions worth
            asking.
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
            <h2>A closer look at {p.name}.</h2>
            <p className="lead-paragraph">{p.summary}</p>
            <dl className="fact-grid">
              <div>
                <dt>Category</dt>
                <dd>
                  <Link href={c.path}>{c.short}</Link>
                </dd>
              </div>
              <div>
                <dt>Service type</dt>
                <dd>{p.type}</dd>
              </div>
              <div>
                <dt>{c.id === "gold" ? "Minimum investment" : "Pricing"}</dt>
                <dd>{p.minimum || "Confirm current terms directly"}</dd>
              </div>
              <div>
                <dt>Official website</dt>
                <dd>
                  <a href={p.domain} target="_blank" rel="noopener noreferrer">
                    {new URL(p.domain).hostname.replace("www.", "")}{" "}
                    <Icon name="external" size={12} />
                  </a>
                </dd>
              </div>
            </dl>
          </section>
          <section>
            <h2>The strengths and tradeoffs</h2>
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
            <h2>Costs, terms, and eligibility</h2>
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
            <h2>Who should take a closer look?</h2>
            <p>
              {p.name} belongs on your research list if you are exploring{" "}
              {p.type.toLowerCase()}. Start with the fit described above, then
              compare the complete service and written terms against
              alternatives in the same category.
            </p>
            <h3>When another option may fit better</h3>
            <p>{c.advice[1].body}</p>
            <p>
              {p.limitation} If these conditions do not suit your needs, review
              the alternatives below before moving forward.
            </p>
          </section>
          <section>
            <h2>Questions for {p.name}</h2>
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
            <h2>Our review framework</h2>
            <p>
              We separate company descriptions from comparative evidence. A
              complete assessment requires verified identity, current terms,
              relevant costs, and a consistent category-specific research
              process. Company scores are not assigned where that evidence is
              incomplete.
            </p>
            <Link className="inline-link" href={`/methodology/${c.id}`}>
              See the {c.short.toLowerCase()} methodology{" "}
              <Icon name="arrow" size={16} />
            </Link>
          </section>
          <section className="sources-section">
            <h3>Source information</h3>
            <a href={p.domain} target="_blank" rel="noopener noreferrer">
              {p.name}: official product and service information{" "}
              <Icon name="external" size={13} />
            </a>
            <p>
              Research reference: the Review Top Companies launch guide dated{" "}
              {sourceDate}. Current account-specific terms should be confirmed
              with the provider.
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
              rel="noopener noreferrer"
              className="button"
            >
              Visit {p.name}
              <Icon name="external" size={15} />
            </a>
            <CompareButton id={p.id} />
            <Link href={c.path}>Back to {c.title.toLowerCase()}</Link>
          </div>
        </aside>
      </div>
      <section className="related-section">
        <div className="container">
          <SectionHeading
            eyebrow="KEEP YOUR OPTIONS OPEN"
            title="Other companies to explore."
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
                <p>{a.fit}</p>
                <span className="inline-link">
                  Read review <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export function GuidePage({ guide: g }: { guide: Guide }) {
  const c = categoryById(g.category);
  return (
    <main id="main-content">
      <Breadcrumb
        items={[
          { label: "Guides & insights", href: "/guides" },
          { label: c.short, href: c.path },
        ]}
      />
      <div className="article-heading container">
        <span className="eyebrow">{c.short} · THE PRACTICAL GUIDE</span>
        <h1>{g.title}</h1>
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
            <h2>Ready to see your options?</h2>
            <p>Bring what you’ve learned to a side-by-side comparison.</p>
            <Link className="button" href={c.path}>
              Explore {c.title}
              <Icon name="arrow" size={16} />
            </Link>
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
  return (
    <main id="main-content">
      <Breadcrumb
        items={[
          {
            label: "How we review",
            href: category ? "/methodology" : undefined,
          },
          ...(category ? [{ label: category.short }] : []),
        ]}
      />
      <section className="page-intro container">
        <span className="eyebrow">THE THINKING BEHIND THE COMPARISON</span>
        <h1>
          {category ? (
            <>
              How we compare
              <br />
              <em>{category.short.toLowerCase()}.</em>
            </>
          ) : (
            <>
              Clarity comes
              <br />
              <em>from the details.</em>
            </>
          )}
        </h1>
        <p>
          A useful comparison explains the costs, the differences, and the
          tradeoffs. Here’s the framework behind our company research.
        </p>
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
              <h2>What matters in this category</h2>
              <p>{category.intro}</p>
              <div className="method-table">
                <table>
                  <caption>
                    Proposed research weighting for{" "}
                    {category.short.toLowerCase()}
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
            Back to {category.title}
            <Icon name="arrow" size={17} />
          </Link>
        )}
      </article>
    </main>
  );
}
