import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/calculator/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/checklist/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/cleaning/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/posts/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts = getAllPosts().map((p) => ({
    url: `${base}/posts/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
