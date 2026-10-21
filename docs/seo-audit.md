# SEO audit and overhaul — October 21, 2026

This document records the audit of the Review Top Companies site, the competitive research that shaped the rewrite, the keyword map for every service-type page, and the technical changes made. Everything on-page can be traced back to `lib/seo.ts`, `lib/page-meta.ts`, and `lib/schema.ts`.

## 1. What the audit found

| Area | Before | Risk |
| --- | --- | --- |
| Title tags | Category titles were the bare labels ("Best banks", "Best Gold Companies"). Review titles were "{Company} Review". Policy pages used poetic headlines ("A little clarity changes the decision."). Homepage title was a tagline. | No year, no modifier keywords, several near-duplicate titles, weak click-through. |
| Meta descriptions | Reused category intros and provider summaries verbatim; many under 100 characters; directory pages shared one generic description. | Duplicate and truncated snippets. |
| H1s | Homepage H1 was "Big decisions. A clearer starting point." Category H1s were the bare labels. Policy H1s were slogans. | Primary keyword absent from the H1 on the most important pages. |
| Body copy | Category pages had a 2-sentence intro, provider cards, three advice items, and four generic FAQs repeated on every category (same questions, same answers). | Thin, templated content across 10 commercial pages; no topical depth to compete with ConsumersAdvocate, ConsumerAffairs, NerdWallet, or Forbes Advisor pages. |
| Structured data | Organization and BreadcrumbList only. | No ItemList, FAQPage, Article, or WebSite/SearchAction. |
| Open Graph / Twitter | One static site-wide image; no per-page og:title, og:description, og:url, or twitter card. | Generic social previews on every page. |
| Dates | "Research reference: October 1, 2026" only. No visible reviewed/updated date. | Competitors show "Last updated" prominently; freshness signals absent. |
| Outbound links | All provider links were `rel="noopener noreferrer"`, including the paid #1 placement. | Paid links must carry `rel="sponsored"` under Google's link-scheme guidelines. |
| robots.txt | Allowed everything, including `/search?q=` and `/compare`. | Crawl waste on infinite internal-search URLs. |
| Sitemap | No `lastModified`, `changeFrequency`, or `priority`. | Weaker crawl prioritization. |
| Viewport / theme | Default only. | Minor. |
| 404 route | `/404` had no noindex metadata of its own. | Possible indexing of the error shell. |

## 2. Competitive research summary

Pages that rank for "best [category] companies" queries share a recognizable structure. Observed on ConsumersAdvocate (gold IRAs), ConsumerAffairs (gold IRA, debt settlement, credit repair), CNBC Select, Forbes Advisor, NerdWallet, Bankrate, LendEDU, and The College Investor:

- Title and H1 carry the year, often the month: "Best Gold IRA Companies of October 2026".
- A visible "Last updated" date and a methodology block ("How we analyzed", "X companies vetted, Y criteria").
- Ranked picks with "Best for …" labels and a comparison table with concrete facts.
- A long-form explainer section (what the product is, how fees work, alternatives, red flags).
- A People-Also-Ask style FAQ (6–8 questions) with direct answers.
- An advertiser disclosure near the top and a methodology link.
- Company review pages titled "{Company} Reviews: {Category} (2026)".

Consumer Advisors (consumeradvisors.org) is a health-supplement review site; it does not compete in these categories, so its structure (numeric scores out of 10, "{Product} Review – For …" titles) was noted but not copied.

## 3. Keyword map by service type

| Page | Primary keyword | Secondary / supporting terms | Title (≤ 60–65 chars) |
| --- | --- | --- | --- |
| `/gold/best-gold-companies` | best gold IRA companies | gold IRA fees, gold IRA minimum, precious metals IRA, gold dealers, bullion, rollover, custodian, depository, buyback | Best Gold IRA Companies of 2026: Compare Fees & Minimums |
| `/mortgages/best-mortgage-lenders` | best mortgage lenders | Loan Estimate, APR vs rate, points, rate lock, FHA/VA/conventional, NMLS, online lenders | Best Mortgage Lenders of 2026: Compare Rates, Fees & Programs |
| `/legal/personal-injury` | best personal injury law firms | personal injury lawyer, contingency fee, free consultation, statute of limitations, who handles my case | Best Personal Injury Law Firms of 2026: How to Choose |
| `/student-loans/best-refinance-lenders` | best student loan refinance lenders | refinance federal student loans, fixed vs variable, cosigner release, consolidation vs refinancing, soft credit check | Best Student Loan Refinance Lenders of 2026: Compare Rates |
| `/credit-cards/best-credit-cards` | best credit cards | cash back vs travel rewards, annual fee worth it, welcome bonus, purchase APR, credit score needed | Best Credit Cards of 2026: Compare Cash Back & Travel Rewards |
| `/banking/best-banks` | best banks | best online banks, high-yield savings, APY vs interest rate, FDIC insurance, checking fees, cash deposits | Best Banks of 2026: Compare Online Banks, Checking & Savings |
| `/legal/lemon-law` | best lemon law lawyers | lemon law attorney, what qualifies as a lemon, Song-Beverly, Magnuson-Moss, buyback, used cars | Best Lemon Law Lawyers of 2026: Find a Lemon Law Attorney |
| `/debt-relief/best-debt-relief-companies` | best debt relief companies | debt settlement vs debt management, nonprofit credit counseling, debt relief fees, 1099-C, bankruptcy alternative | Best Debt Relief Companies of 2026: Settlement vs. Counseling |
| `/credit-repair/best-credit-repair-companies` | best credit repair companies | Credit Repair Organizations Act, dispute credit report errors free, credit repair cost, how long does credit repair take | Best Credit Repair Companies of 2026: Costs, Rights & Limits |
| `/investing/best-investment-companies` | best investment companies | best online brokers, best robo-advisors, expense ratios, advisory fees, SIPC, FINRA BrokerCheck, Form CRS | Best Investment Companies of 2026: Brokers & Robo-Advisors |

Company reviews: `{Company} Review 2026: {category suffix}` with a description built from the "best for" label and the company summary. Guides: rewritten to the question or comparison people search for (e.g. "Debt Settlement vs. Debt Management Plan: Key Differences").

## 4. On-page changes (every content template)

**Homepage.** Keyword-bearing H1 ("Compare the best companies before you choose."), tagline moved to the subhead, popular-comparison links renamed to match target queries, section headings rewritten, WebSite + SearchAction and Organization JSON-LD.

**Category pages (10).** Per-category eyebrow, H1, intro, stats strip (companies compared, criteria, guides, last reviewed), "Best for" quick picks and table column, four-section long-form explainer, "How to choose a {noun}" heading, methodology heading, 6–7 unique FAQs with FAQPage schema, CollectionPage + ItemList schema, updated sidebar navigation, and related guides heading. The paid #1 placement disclosure and label are unchanged.

**Company reviews (45).** Title with year and category suffix, unique description, "Best for" line in the hero and fact grid, last-reviewed date, keyword-bearing H2s ("{Company} pros and cons", "{Company} costs, terms, and eligibility", "Who should consider {Company}?"), Article schema with `about` set to the company, related guides section, and link relations (`sponsored` for the paid placement, `nofollow` for other provider links).

**Guides (14).** Search-oriented titles and descriptions, H1 matches the title tag, breadcrumb includes the guide, Article schema with word count and citations, related company reviews section, and visible published/reviewed dates.

**Methodology (11).** "How We Compare {Category} | Methodology" titles and matching H1s.

**Directory and policy pages.** Descriptive titles, H1s, and descriptions for `/categories`, `/companies`, `/guides`, and all ten policy pages.

## 5. Technical changes

- `lib/page-meta.ts`: single resolver shared by `generateMetadata`, the social-image route, and the sitemap.
- `app/og/[...slug]/route.tsx`: per-page 1200×630 social preview image showing the eyebrow, title, and reviewed date; referenced by `og:image` and `twitter:image` on every content page.
- `app/robots.ts`: disallows `/search`, `/compare`, and `/404`; adds `Host`.
- `app/sitemap.ts`: `lastModified`, `changeFrequency`, and `priority` by page type. Still gated by `SITE_APPROVED_PATHS`; `SITE_APPROVED_PATHS=all` now approves every content path for launch.
- `app/layout.tsx`: `generateViewport` with theme color, `applicationName`, referrer policy, default Twitter card, Organization and WebSite JSON-LD.
- `app/page.tsx`: explicit homepage metadata with canonical `/`.
- `app/404/page.tsx`: `noindex, nofollow`.
- `proxy.ts`: allows `/og/<content path>` and 404s any other `/og/` URL.
- Title-cased category labels in navigation, search, and selects.
- Tests: metadata uniqueness and length, canonical/OG/Twitter presence, JSON-LD validity per page type, ItemList counts, link relations, social image route, robots directives, and the launch approval shortcut.

## 6. Launch checklist

1. Set `SITE_URL=https://reviewtopcompanies.com`, `SITE_INDEXING_ENABLED=true`, and `SITE_APPROVED_PATHS=all` (or an explicit list) in the production environment.
2. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
3. Validate three page types in Google's Rich Results Test: a category page (CollectionPage/ItemList, FAQPage, BreadcrumbList), a review (Article), and a guide (Article).
4. Validate social previews with the Facebook Sharing Debugger and X Card Validator using `/og/<path>` images.
5. Complete the publisher identity on `/ownership`, `/privacy`, and `/terms`; these pages currently state that details will be completed before launch.
6. When a fee, minimum, or ranking is re-verified, update `reviewedOn` in `lib/seo.ts` so the visible dates and `dateModified` stay honest.
