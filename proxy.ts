import { NextRequest, NextResponse } from "next/server";
import { contentPaths } from "./lib/site-paths";
import { aliases } from "./lib/routes";
import companyBrands from "./lib/company-brands.json";

const knownPaths = new Set([
  "/",
  "/search",
  "/compare",
  "/robots.txt",
  "/sitemap.xml",
  "/icon.svg",
  "/favicon.ico",
  "/opengraph-image",
  ...contentPaths,
  ...Object.keys(aliases),
  ...Object.values(companyBrands).map((brand) => brand.logo),
  ...[
    "mark.svg",
    "logo.svg",
    "logo-horizontal.svg",
    "logo-monochrome.svg",
    "logo.png",
    "bookmark.png",
    "favicon-16.png",
    "favicon-32.png",
    "apple-touch-icon.png",
  ].map((file) => `/brand/${file}`),
  ...["hero", "gold", "credit-cards", "mortgages", "debt-relief"].map(
    (file) => `/images/${file}.webp`,
  ),
]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (knownPaths.has(pathname)) return NextResponse.next();
  if (pathname.startsWith("/og/") && knownPaths.has(pathname.slice(3)))
    return NextResponse.next();
  // Decide the status before the partially prerendered app shell starts streaming.
  return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
}

export const config = { matcher: ["/((?!_next/).*)"] };
