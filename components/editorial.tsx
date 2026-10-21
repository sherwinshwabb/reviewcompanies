import Link from "next/link";
import { sourceDate } from "@/lib/catalog";
import { reviewedOn, reviewedOnLabel } from "@/lib/seo";
import { Icon } from "./icons";

export function EditorialByline({
  kind,
  minutes,
  methodology,
}: {
  kind: string;
  minutes?: number;
  methodology?: string;
}) {
  return (
    <div className="byline editorial-byline">
      <span className="author-monogram" aria-hidden="true">
        RTC
      </span>
      <div>
        <Link href="/about#editorial-team">
          Rate Top Companies Editorial Team
        </Link>
        <span>
          {kind}
          {minutes ? ` · ${minutes} min read` : ""} · Updated{" "}
          <time dateTime={reviewedOn}>{reviewedOnLabel}</time> · Research
          reference: <time dateTime="2026-10-01">{sourceDate}</time>
        </span>
      </div>
      <Link href={methodology || "/editorial-policy"} className="method-link">
        <Icon name="book" size={16} />
        Editorial process
      </Link>
    </div>
  );
}

export function EditorialTeam() {
  return (
    <section id="editorial-team" className="editorial-team-section">
      <span className="eyebrow">OUR EDITORIAL APPROACH</span>
      <h2>The Rate Top Companies Editorial Team</h2>
      <p>
        Our guides and comparisons are published under a shared editorial
        byline. The focus is practical: the services a company offers, the costs
        to understand, and the tradeoffs that can shape your decision.
      </p>
      <p>
        Company information, source references, and important considerations
        appear together, with a category-specific methodology explaining the
        comparison framework.
      </p>
      <div className="policy-links">
        <Link href="/editorial-policy">Editorial standards</Link>
        <Link href="/methodology">How we compare</Link>
        <Link href="/corrections">Suggest a correction</Link>
      </div>
    </section>
  );
}
