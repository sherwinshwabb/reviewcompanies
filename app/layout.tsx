import type { Metadata } from "next";
import { siteSettings, siteUrl, pageRobots } from "@/lib/site-config";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Header, Footer } from "@/components/navigation";
import { ComparisonProvider } from "@/components/comparison-context";
import "./globals.css";
import "./editorial.css";
import { StructuredData } from "@/components/structured-data";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.origin),
  title: {
    default: "Review Top Companies | A clearer starting point",
    template: "%s | Review Top Companies",
  },
  description:
    "Explore company reviews and practical comparisons across gold, mortgages, banking, credit, investing, and legal services. Find your next step with clarity.",
  robots: pageRobots("/"),
  openGraph: {
    siteName: "Review Top Companies",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      {
        url: "/brand/favicon-16.png?v=bookmark",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/brand/favicon-32.png?v=bookmark",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/mark.svg?v=bookmark",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico?v=bookmark",
    apple: {
      url: "/brand/apple-touch-icon.png?v=bookmark",
      sizes: "180x180",
      type: "image/png",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${serif.variable}`}
    >
      <body>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Review Top Companies",
            url: siteSettings.origin,
            logo: siteUrl("/brand/logo.png"),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ComparisonProvider>
          <Header />
          {children}
          <Footer />
        </ComparisonProvider>
      </body>
    </html>
  );
}
