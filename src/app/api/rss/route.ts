import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import { NextResponse } from "next/server";

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export async function GET() {
  const posts = getPosts("blog").sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const items = posts
    .map((post) => {
      const postUrl = `${baseURL}/blog/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.metadata.summary)}</description>
      ${post.metadata.tag ? `<category>${escapeXml(post.metadata.tag)}</category>` : ""}
      <author>${escapeXml(`${person.email} (${person.name})`)}</author>
    </item>`;
    })
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(blog.title)}</title>
    <link>${baseURL}${blog.path}</link>
    <description>${escapeXml(blog.description)}</description>
    <language>${person.locale}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/api/rss" rel="self" type="application/rss+xml" />
    <managingEditor>${escapeXml(`${person.email} (${person.name})`)}</managingEditor>
    <image>
      <url>${baseURL}${person.avatar}</url>
      <title>${escapeXml(blog.title)}</title>
      <link>${baseURL}${blog.path}</link>
    </image>${items}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
