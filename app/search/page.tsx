import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/ui";
import { SearchResults } from "@/components/discovery";
export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: false },
};
export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <main id="main-content">
      <Breadcrumb items={[{ label: "Search" }]} />
      <section className="page-intro container">
        <span className="eyebrow">FIND YOUR NEXT STEP</span>
        <h1>
          A little clarity
          <br />
          <em>is a search away.</em>
        </h1>
      </section>
      <section className="container search-content">
        <Suspense
          fallback={
            <div className="search-loading" role="status">
              Finding your starting point…
            </div>
          }
        >
          <QueryResults searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
}

async function QueryResults({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <SearchResults
      key={typeof q === "string" ? q : ""}
      initialQuery={typeof q === "string" ? q : ""}
    />
  );
}
