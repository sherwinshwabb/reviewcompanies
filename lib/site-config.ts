import type { Metadata } from "next";
import { contentPaths } from "./site-paths";

type Environment = Record<string, string | undefined>;
const publishablePaths = new Set(["/", ...contentPaths]);

export function resolveSiteSettings(env: Environment) {
  const configuredUrl = env.SITE_URL?.trim();
  const url = new URL(configuredUrl || "https://reviewtopcompanies.com");
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be the site's origin, for example https://example.com.",
    );
  }
  const requestedIndexing =
    env.SITE_INDEXING_ENABLED === "true" && env.VERCEL_ENV !== "preview";
  const requestedPaths = (env.SITE_APPROVED_PATHS || "")
    .split(/[\s,]+/)
    .filter(Boolean);
  // "all" approves every content path at once for a reviewed public launch.
  const approvedPaths =
    requestedPaths.length === 1 && requestedPaths[0] === "all"
      ? [...publishablePaths]
      : [...new Set(requestedPaths)];
  for (const path of approvedPaths) {
    if (!publishablePaths.has(path))
      throw new Error(
        `SITE_APPROVED_PATHS contains an unknown content path: ${path}`,
      );
  }
  if (
    requestedIndexing &&
    (!configuredUrl ||
      url.protocol !== "https:" ||
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) ||
      !approvedPaths.length)
  ) {
    throw new Error(
      "Public indexing requires an explicit HTTPS SITE_URL and at least one reviewed path in SITE_APPROVED_PATHS.",
    );
  }
  const contactEmail = env.SITE_CONTACT_EMAIL?.trim() || "";
  if (
    contactEmail &&
    !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(contactEmail)
  ) {
    throw new Error("SITE_CONTACT_EMAIL must be a public email address.");
  }
  return {
    origin: url.origin,
    indexingEnabled: requestedIndexing,
    approvedPaths,
    contactEmail,
  };
}

export const siteSettings = resolveSiteSettings(process.env);
export const siteUrl = (path = "/") =>
  new URL(path, siteSettings.origin).toString();
export function pageRobots(path: string): Metadata["robots"] {
  return {
    index:
      siteSettings.indexingEnabled && siteSettings.approvedPaths.includes(path),
    follow: siteSettings.indexingEnabled,
  };
}
