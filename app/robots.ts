import type { MetadataRoute } from "next";
import { siteSettings, siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Content pages stay crawlable so page-level noindex directives are readable
  // on previews and unapproved pages. Utility routes are blocked outright.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/compare", "/404"],
    },
    host: siteSettings.origin,
    ...(siteSettings.indexingEnabled
      ? { sitemap: siteUrl("/sitemap.xml") }
      : {}),
  };
}
