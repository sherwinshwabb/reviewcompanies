import { categories, providerById } from "./catalog";
import { guideBySlug } from "./guides";
import { policies } from "./policies";
import { publicationPages } from "./publication";
import {
  categorySeo,
  guideSeo,
  homeSeo,
  methodologySeo,
  providerSeo,
  staticSeo,
} from "./seo";

export type PageKind =
  | "home"
  | "category"
  | "review"
  | "guide"
  | "methodology"
  | "directory"
  | "policy";

export type PageMeta = {
  path: string;
  kind: PageKind;
  title: string;
  description: string;
  /** Short label shown above the title on social preview images. */
  eyebrow: string;
};

const policyPages: Record<string, { eyebrow: string }> = {
  ...policies,
  ...publicationPages,
};

/** One resolver shared by generateMetadata, the social image route, and the sitemap. */
export function resolvePageMeta(path: string): PageMeta | null {
  if (path === "/")
    return {
      path,
      kind: "home",
      title: homeSeo.metaTitle,
      description: homeSeo.metaDescription,
      eyebrow: "Company reviews and practical comparisons",
    };
  const category = categories.find((c) => c.path === path);
  if (category) {
    const seo = categorySeo[category.id];
    return {
      path,
      kind: "category",
      title: seo.metaTitle,
      description: seo.metaDescription,
      eyebrow: seo.eyebrow,
    };
  }
  const parts = path.split("/");
  if (parts[1] === "reviews" && parts.length === 3) {
    const p = providerById(parts[2]);
    if (!p) return null;
    const seo = providerSeo(p);
    return {
      path,
      kind: "review",
      title: seo.metaTitle,
      description: seo.metaDescription,
      eyebrow: `Company review · ${seo.plural}`,
    };
  }
  if (parts[1] === "guides" && parts.length === 3) {
    const g = guideBySlug(parts[2]);
    if (!g) return null;
    const seo = guideSeo[g.slug];
    const c = categories.find((x) => x.id === g.category)!;
    return {
      path,
      kind: "guide",
      title: seo?.metaTitle || g.title,
      description: seo?.metaDescription || g.description,
      eyebrow: `${categorySeo[c.id].plural} · practical guide`,
    };
  }
  if (parts[1] === "methodology") {
    const c = categories.find((x) => x.id === parts[2]);
    if (parts.length === 3 && !c) return null;
    const seo = methodologySeo(c);
    return {
      path,
      kind: "methodology",
      title: seo.metaTitle,
      description: seo.metaDescription,
      eyebrow: "How we review",
    };
  }
  const fixed = staticSeo[path];
  if (fixed) {
    const isDirectory = ["/categories", "/companies", "/guides"].includes(path);
    return {
      path,
      kind: isDirectory ? "directory" : "policy",
      title: fixed.metaTitle,
      description: fixed.metaDescription,
      eyebrow: isDirectory
        ? "Review Top Companies"
        : (policyPages[parts[1]]?.eyebrow ?? "Review Top Companies"),
    };
  }
  return null;
}
