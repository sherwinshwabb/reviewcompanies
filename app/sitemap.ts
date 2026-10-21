import type { MetadataRoute } from "next";
import { siteSettings, siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteSettings.indexingEnabled) return [];
  return siteSettings.approvedPaths.map((path) => ({ url: siteUrl(path) }));
}
