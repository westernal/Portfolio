import {
  ogContentType,
  ogSize,
  renderOgCard,
} from "../../components/OgCard/index";
import { profile } from "../../data/profile";

/**
 * /resume gets its own card rather than inheriting the home one: this is the URL
 * that actually gets pasted into a DM, and the preview should say what the link
 * opens instead of repeating the site's headline.
 */
export const alt = `Résumé — ${profile.name}, ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function ResumeOpengraphImage() {
  return renderOgCard({
    eyebrow: "Résumé",
    body: profile.subheadline,
  });
}
