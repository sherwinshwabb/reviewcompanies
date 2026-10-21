# Review Top Companies — editorial edition

A complete Next.js App Router comparison publication, rebuilt around warm ivory, brick red, editorial serif headlines, Inter body text, and generated lifestyle photography.

## Run locally

```sh
npm install
npm run dev -- --port 3001
```

Open http://localhost:3001. For production: `npm run build`, then `npm start`.

## Content and functionality

- Ten categories and 45 company/product profiles, with the original provider order, descriptions, terms, strengths, limitations, and outbound destinations.
- All original guides, category methodologies, policy pages, route aliases, and official company logos.
- Working site search, company and guide directories, category-specific filters, alphabetical sorting, saved comparisons of up to three providers, and a loan calculator.
- Quick picks, numbered recommendation cards, explanations, side-by-side category tables, questions, sources, and a separate advertising disclosure.
- Responsive navigation and layouts, horizontal table scrolling, keyboard focus states, skip navigation, semantic headings, reduced-motion support, optimized images and self-hosted fonts.

## Data integrity

The `lib/catalog.ts`, `lib/guides.ts`, `lib/policies.ts`, `lib/company-brands.json`, `lib/routes.ts`, `lib/loan.ts`, and `lib/browser-store.ts` files were copied byte-for-byte from `../reviewtopcompanies`. All 41 original company logos were also preserved. The source project was not modified.

`docs/migration-audit.json` records SHA-256 checksums. Tests verify those checksums, every category's rendered ranking order, routes and internal links, metadata, image availability, and loan calculation edge cases. Update the recorded checksums intentionally if the underlying content is revised later.

## Photography

Five original photographs were generated with the built-in image generation tool and saved as optimized WebP files in `public/images/`: `hero.webp`, `gold.webp`, `credit-cards.webp`, `mortgages.webp`, and `debt-relief.webp`. The complete prompt set is recorded in `docs/image-generation.json`. The images are illustrative; they do not portray named editors or customers.

## Verification

```sh
npm run build
npm test
npm run typecheck
```

The request tests start an isolated production server on port 3100 and stop it when finished. Build before running the tests. Browser QA covers desktop and 390px mobile layouts, search, menu navigation, gold filters, and adding/removing companies in the saved comparison.

## Publishing configuration

The source repo's business inputs are still unfinished there as well. Its company asset-source evidence is preserved in `docs/company-brand-sources.json`, and its full operating plan is retained in `docs/original-project-reference.md`. The original catalog, rankings, policies, dates, and provider claims remain unchanged.

Copy `.env.example` to `.env.local` for local use, or configure the same variables with the hosting provider before building:

- `SITE_URL`: the new site's final origin, such as `https://example.com`. All canonical URLs, organization data, breadcrumbs, and sitemap URLs derive from it.
- `SITE_INDEXING_ENABLED`: remains `false` until launch. An enabled build requires an explicit HTTPS origin and reviewed paths. Vercel preview builds remain non-indexable even if production variables are copied.
- `SITE_APPROVED_PATHS`: comma- or whitespace-separated canonical paths approved for publication. Only these paths receive indexing permission and appear in the sitemap. Unknown paths, search, and comparison controls cannot be approved accidentally.
- `SITE_CONTACT_EMAIL`: a real monitored public mailbox. When supplied, contact and correction forms offer a direct email link and an “Open email app” action containing the drafted message. This opens the visitor's mail application; it does not claim to send email from the server.

These settings are read at build time; rebuild after changing them. With no final domain supplied, preview metadata retains the original domain. Page-level `noindex, nofollow` remains active by default. Robots allows crawling so crawlers can see those directives; this is not access protection. Protect a private hosted preview through the host's deployment protection.

## Remaining launch inputs

1. Confirm the final domain and hosting project, then configure HTTPS and the canonical origin.
2. Supply the operating business name and public contact address; finish the existing ownership, privacy, terms, and commercial disclosure pages for the actual operation.
3. Publication-level attribution uses “Review Top Companies Editorial Team,” linked to the editorial approach and standards. Individual editor/reviewer names and photos are optional; add them only when real contributor details are supplied.
4. Review the inherited provider claims and rankings with evidence before approving their paths for indexing. Research dates are not automatically advanced by a deployment.
5. Citadel Gold’s paid #1 placement is confirmed and labeled near the homepage feature, comparison, company profile, and methodology, with fuller advertising disclosure. Confirm any additional provider/referral arrangements before adding them.
6. Test the real contact mailbox. A server-delivered contact form requires a selected delivery provider and credentials; the current implementation accurately offers mail-app/draft actions.
7. If analytics are wanted, choose the service and event definitions before connecting it. The existing preference UI correctly states that no analytics provider is connected.

The technical checks cover production builds, source-data checksums, every content route and internal link, ranking order, image availability, calculator arithmetic, missing pages, and publishing configuration. Desktop and 390px mobile browser checks have also covered the major interactions. A final smoke test on the real HTTPS domain is still required after deployment.

Official launch references checked October 21, 2026: [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist), [Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), and [Google authorship guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Supplied logo

The bookmark logo supplied by the user is used in the header, footer, social preview, organization metadata, and favicon. `public/brand/logo.png` removes only the transparent outer padding; `public/brand/bookmark.png` extracts the original bookmark for the compact icon. No logo was regenerated. Existing SVG asset URLs embed the same supplied artwork for compatibility.

## Confirmed paid placement

Citadel Gold remains first in the gold comparison, with the label “Sponsored #1 placement.” The notice “Citadel Gold’s #1 position is a paid placement.” appears beside the relevant content. The advertising disclosure explains that payment determines this position. The original company records and list order remain unchanged; the previous “Our top pick” presentation has been replaced to reflect the confirmed commercial arrangement.

Disclosure presentation follows the FTC’s contextual [clear-and-conspicuous guidance](https://www.ftc.gov/business-guidance/blog/2014/09/full-disclosure) and [endorsement guidance](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking). The selected font size is a design choice, not a legal minimum or compliance certification.

The current publisher-information page supersedes the source preview's unconfirmed named-owner text; the actual publisher entity and contact details remain to be supplied. The archived source files are retained unchanged.
