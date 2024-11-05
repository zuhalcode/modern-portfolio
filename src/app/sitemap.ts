import { animationData } from "@/data/animation-data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const animationEntries: MetadataRoute.Sitemap = animationData.map(
    ({ label }) => ({
      url: `${baseUrl}/animations/${label}`,
      lastModified: new Date(),
      priority: 0.8,
    }),
  );

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    ...animationEntries,
  ];
}
