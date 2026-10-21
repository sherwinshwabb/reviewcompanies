import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui";
import { ComparePage } from "@/components/compare-page";
export const metadata: Metadata = {
  title: "Compare Companies",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main-content">
      <Breadcrumb items={[{ label: "Compare companies" }]} />
      <section className="page-intro container">
        <span className="eyebrow">YOUR SHORTLIST, SIDE BY SIDE</span>
        <h1>
          See how they
          <br />
          <em>compare.</em>
        </h1>
        <p>
          Look at the same details for each company. Find the differences that
          matter to you.
        </p>
      </section>
      <section className="container section section-top-small">
        <ComparePage />
      </section>
    </main>
  );
}
