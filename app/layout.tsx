import type { Metadata, Viewport } from "next";
import { siteSettings, pageRobots } from "@/lib/site-config";
import { homeSeo, siteName } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
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
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
};
export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.origin),
  applicationName: siteName,
  title: {
    default: homeSeo.metaTitle,
    template: `%s | ${siteName}`,
  },
  description: homeSeo.metaDescription,
  robots: pageRobots("/"),
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false },
  openGraph: {
    siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
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
        <StructuredData data={organizationSchema()} />
        <StructuredData data={websiteSchema()} />
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
