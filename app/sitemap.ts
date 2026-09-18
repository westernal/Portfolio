import type { MetadataRoute } from "next";
import { profile } from "../data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: profile.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.siteUrl}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
