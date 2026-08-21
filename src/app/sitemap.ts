import { baseURL, navigation } from "@/resources";
import { getPosts } from "@/utils/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const writing = getPosts("blog").map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const projects = getPosts("work").map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = navigation.map((item) => ({
    url: `${baseURL}${item.path === "/" ? "" : item.path}`,
    changeFrequency: item.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.path === "/" ? 1 : 0.8,
  }));

  return [...routes, ...writing, ...projects];
}
