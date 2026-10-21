import type { MetadataRoute } from "next";
import { siteSettings, siteUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to read page-level noindex directives on preview/unapproved pages.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteSettings.indexingEnabled
      ? { sitemap: siteUrl("/sitemap.xml") }
      : {}),
  };
}
