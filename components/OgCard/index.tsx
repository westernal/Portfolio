import { ImageResponse } from "next/og";
import { profile } from "../../data/profile";

/**
 * The link preview a recruiter sees when a URL from this site is pasted into
 * LinkedIn, Slack or a DM.
 *
 * Not a browser component: next/og renders this through Satori at build time, so
 * only inline styles work, and any element with more than one child needs an
 * explicit `display: flex`. Generated from data/profile.ts so the card can never
 * disagree with the page it previews.
 *
 * Both routes draw the same card — a pasted /resume link should read as the same
 * person as a pasted / link. Only the eyebrow and the supporting line differ.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgCardProps = {
  /** Small uppercase line above the name. */
  eyebrow: string;
  /** The sentence that does the work, above the footer rule. */
  body: string;
};

export function renderOgCard({ eyebrow, body }: OgCardProps) {
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
            {eyebrow}
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
            {body}
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
    ogSize,
  );
}
