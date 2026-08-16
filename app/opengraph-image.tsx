import { ImageResponse } from "next/og";
import { profile } from "../data/profile";

/**
 * The link preview a recruiter sees when this URL is pasted into LinkedIn,
 * Slack or a DM. Generated at build time so it always matches data/profile.ts.
 */
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101010",
          padding: "72px 80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              color: "#8f8f95",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {profile.location}
          </div>

          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>

          <div style={{ fontSize: 44, color: "#b9b9bd", letterSpacing: -1 }}>
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 30,
              color: "#b9b9bd",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {profile.headline}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #2b2b2b",
              paddingTop: 28,
              fontSize: 26,
              color: "#8f8f95",
            }}
          >
            <div style={{ display: "flex", gap: 28 }}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
            <div style={{ display: "flex", color: "#f4f4f5" }}>
              alinavidi.dev
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
