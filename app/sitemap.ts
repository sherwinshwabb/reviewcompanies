import type { MetadataRoute } from "next";
import { siteSettings, siteUrl } from "@/lib/site-config";
import { resolvePageMeta } from "@/lib/page-meta";
import { reviewedOn } from "@/lib/seo";

const priorityFor: Record<string, number> = {
  home: 1,
  category: 0.9,
  review: 0.7,
  guide: 0.7,
  directory: 0.6,
  methodology: 0.4,
  policy: 0.3,
};

const changeFrequencyFor: Record<
  string,
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  home: "weekly",
  category: "weekly",
  review: "monthly",
  guide: "monthly",
  directory: "weekly",
  methodology: "yearly",
  policy: "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteSettings.indexingEnabled) return [];
  return siteSettings.approvedPaths.flatMap((path) => {
    const meta = resolvePageMeta(path);
    if (!meta) return [];
    return [
      {
        url: siteUrl(path),
        lastModified: reviewedOn,
        changeFrequency: changeFrequencyFor[meta.kind],
        priority: priorityFor[meta.kind],
      },
    ];
  });
}
