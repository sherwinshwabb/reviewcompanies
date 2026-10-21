import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { contentPaths } from "@/lib/site-paths";
import { resolvePageMeta } from "@/lib/page-meta";
import { reviewedOnLabel, siteName } from "@/lib/seo";

/** Social preview image for every content page, served at /og/<content path>. */
export const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return contentPaths.map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const meta = resolvePageMeta("/" + slug.join("/")) ??
    resolvePageMeta("/")!;
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const title = meta.title.replace(/ \| .*$/, "");
  const fontSize = title.length > 58 ? 50 : title.length > 42 ? 58 : 68;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#faf8f5",
        color: "#292725",
        display: "flex",
        flexDirection: "column",
        padding: "64px 84px",
        justifyContent: "space-between",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain markup */}
      <img
        src={`data:image/png;base64,${logo.toString("base64")}`}
        alt={siteName}
        width={544}
        height={60}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#a64d46",
          }}
        >
          {meta.eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#716d68",
        }}
      >
        <span>Updated {reviewedOnLabel}</span>
        <span>reviewtopcompanies.com</span>
      </div>
    </div>,
    {
      ...size,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800" },
    },
  );
}
