"use client";
import { useState } from "react";
import { goldPaidPlacement } from "@/lib/commercial";
import Link from "next/link";
import { Category, Provider } from "@/lib/catalog";
import { categorySeoFor, lowerFirst, outboundRel } from "@/lib/seo";
import { ProviderLogo } from "./ui";
import { Icon } from "./icons";
import { CompareButton, useComparison } from "./comparison-context";

export function CategoryComparison({
  category,
  providers,
}: {
  category: Category;
  providers: Provider[];
}) {
  const [filter, setFilter] = useState("All companies");
  const [sort, setSort] = useState("featured");
  const { message } = useComparison();
  const legal = ["personal-injury", "lemon-law"].includes(category.id);
  const seo = categorySeoFor(category);
  const visible = providers
    .filter((p) => filter === "All companies" || p.type === filter)
    .toSorted((a, b) => (sort === "name" ? a.name.localeCompare(b.name) : 0));
  return (
    <div id="companies">
      <div className="comparison-controls">
        <div
          className="filter-tabs"
          aria-label={legal ? "Filter by location" : "Filter company type"}
        >
          {category.filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {legal && f === "All companies" ? "All locations" : f}
            </button>
          ))}
        </div>
        <label className="sort-label">
          Sort by{" "}
          <select
            aria-label="Sort companies"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Original ranking</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>
      <div className="results-caption" aria-live="polite">
        <span>
          {visible.length}{" "}
          {category.id === "credit-cards" ? "cards" : "companies"} to explore
        </span>
        <span>Select up to 3 to compare</span>
      </div>
      {message && (
        <p className="inline-notice" role="status">
          {message}
        </p>
      )}
      <div className="provider-list">
        {visible.map((p) => {
          const rank = providers.findIndex((item) => item.id === p.id) + 1;
          return (
            <article
              className={`provider-card ${p.id === "citadel-gold" ? "top-pick-card" : ""} ${rank <= 3 ? `rank-${rank}` : ""}`}
              key={p.id}
              id={p.id}
            >
              <div className="provider-card-main">
                <div className="provider-identity">
                  <span className="provider-rank">
                    {rank <= 3 ? (
                      <>
                        <b className={`rank-medal rank-medal-${rank}`}>
                          {rank}
                        </b>
                        <span className="rank-ordinal">Ranked #{rank}</span>
                      </>
                    ) : (
                      <>
                        {String(rank).padStart(2, "0")} / {category.short}
                      </>
                    )}
                  </span>
                  <ProviderLogo provider={p} large />
                  <h2>
                    <Link href={`/reviews/${p.id}`}>{p.name}</Link>
                  </h2>
                  <span className="provider-type">{p.type}</span>
                  <CompareButton id={p.id} />
                </div>
                <div className="provider-description">
                  {p.id === "citadel-gold" ? (
                    <Link
                      href="/advertising-disclosure"
                      className="top-pick-label"
                    >
                      {goldPaidPlacement.label}
                    </Link>
                  ) : (
                    <span className="eyebrow">A CLOSER LOOK</span>
                  )}
                  <h3 className="provider-verdict">
                    Best for {lowerFirst(seo.bestFor[p.id] || p.fit)}
                  </h3>
                  <dl className="provider-facts">
                    <div>
                      <dt>{legal ? "Coverage" : "Service"}</dt>
                      <dd>{p.type}</dd>
                    </div>
                    <div>
                      <dt>
                        {category.id === "gold" ? "Minimum" : "Costs & terms"}
                      </dt>
                      <dd>{p.minimum || "Confirm with provider"}</dd>
                    </div>
                    <div>
                      <dt>Explore</dt>
                      <dd>{p.strengths[0]}</dd>
                    </div>
                  </dl>
                </div>
                <div className="provider-actions">
                  <a
                    className="button"
                    href={p.domain}
                    target="_blank"
                    rel={outboundRel(p.id)}
                  >
                    Visit{" "}
                    {p.name === "Augusta Precious Metals" ? "Augusta" : p.name}{" "}
                    <Icon name="external" size={13} />
                  </a>
                  <Link className="inline-link" href={`/reviews/${p.id}`}>
                    Read full review <Icon name="arrow" size={15} />
                  </Link>
                </div>
              </div>
              <div className="provider-details">
                <p className="provider-reason">
                  <strong>
                    {p.id === goldPaidPlacement.providerId
                      ? "About this company. "
                      : "Why we picked it. "}
                  </strong>
                  {p.summary}
                </p>
                <div className="provider-pros-cons">
                  <div>
                    <h3>What we like</h3>
                    <ul>
                      {p.strengths.map((s) => (
                        <li key={s}>
                          <Icon name="check" size={13} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>What to consider</h3>
                    <p>{p.limitation}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>No companies match this filter.</h3>
          <button className="button" onClick={() => setFilter("All companies")}>
            Show all companies
          </button>
        </div>
      )}
    </div>
  );
}
