import { categories, providers } from "./catalog";
import { guides } from "./guides";
import { policies } from "./policies";
import { publicationPages } from "./publication";

/** One inventory for prerendering and rejecting unknown content before streaming. */
export const contentPaths = [
  ...new Set([
    ...categories.map((c) => c.path),
    ...providers.map((p) => `/reviews/${p.id}`),
    ...guides.map((g) => `/guides/${g.slug}`),
    ...categories.map((c) => `/methodology/${c.id}`),
    ...Object.keys(policies).map((p) => `/${p}`),
    ...Object.keys(publicationPages).map((p) => `/${p}`),
    "/categories",
    "/companies",
    "/guides",
    "/methodology",
  ]),
];
