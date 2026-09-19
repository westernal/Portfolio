import {
  ogContentType,
  ogSize,
  renderOgCard,
} from "../components/OgCard/index";
import { profile } from "../data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: profile.location,
    body: profile.headline,
  });
}
