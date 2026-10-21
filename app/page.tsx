import type { Metadata } from "next";
import { Home } from "@/components/home";
import { homeSeo } from "@/lib/seo";
import { pageRobots } from "@/lib/site-config";
export const metadata: Metadata = {
  title: { absolute: homeSeo.metaTitle },
  description: homeSeo.metaDescription,
  alternates: { canonical: "/" },
  robots: pageRobots("/"),
  openGraph: {
    title: homeSeo.metaTitle,
    description: homeSeo.metaDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.metaTitle,
    description: homeSeo.metaDescription,
  },
};
export default Home;
