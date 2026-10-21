import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt =
  "Review Top Companies — Big decisions. A clearer starting point.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#faf8f5",
        color: "#292725",
        display: "flex",
        flexDirection: "column",
        padding: "70px 90px",
        justifyContent: "space-between",
      }}
    >
      <img
        src={`data:image/png;base64,${logo.toString("base64")}`}
        alt="Review Top Companies"
        width={680}
        height={75}
      />
      <div
        style={{
          display: "flex",
          fontSize: 79,
          lineHeight: 1.05,
          letterSpacing: -3,
          maxWidth: 900,
        }}
      >
        Big decisions. A clearer starting point.
      </div>
      <div style={{ display: "flex", fontSize: 23, color: "#a64d46" }}>
        A little clarity. A more confident choice.
      </div>
    </div>,
    size,
  );
}
