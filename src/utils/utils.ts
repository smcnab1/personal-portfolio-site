import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type ContentMetadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  order?: number;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  status?: string;
  team: TeamMember[];
  link?: string;
  linkLabel?: string;
};

export type ContentPost = {
  metadata: ContentMetadata;
  slug: string;
  content: string;
};

function stringValue(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function numberValue(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function teamArray(value: unknown): TeamMember[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const candidate = item as Record<string, unknown>;
    const name = stringValue(candidate.name);
    if (!name) return [];

    return [
      {
        name,
        role: stringValue(candidate.role),
        avatar: stringValue(candidate.avatar),
        linkedIn: stringValue(candidate.linkedIn),
      },
    ];
  });
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): Omit<ContentPost, "slug"> {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(rawContent);
  const data = parsed.data as Record<string, unknown>;

  const metadata: ContentMetadata = {
    title: stringValue(data.title),
    subtitle: stringValue(data.subtitle) || undefined,
    publishedAt: stringValue(data.publishedAt),
    order: numberValue(data.order),
    summary: stringValue(data.summary),
    image: stringValue(data.image) || undefined,
    images: stringArray(data.images),
    tag: stringValue(data.tag) || undefined,
    status: stringValue(data.status) || undefined,
    team: teamArray(data.team),
    link: stringValue(data.link) || undefined,
    linkLabel: stringValue(data.linkLabel) || undefined,
  };

  if (!metadata.title || !metadata.publishedAt || !metadata.summary) {
    throw new Error(`Missing required frontmatter in ${filePath}`);
  }

  return { metadata, content: parsed.content };
}

function getMDXData(dir: string): ContentPost[] {
  return getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    return {
      metadata,
      slug: path.basename(file, path.extname(file)),
      content,
    };
  });
}

export function getPosts(collection: "blog" | "work"): ContentPost[] {
  const postsDir =
    collection === "blog"
      ? path.join(process.cwd(), "src", "app", "blog", "posts")
      : path.join(process.cwd(), "src", "app", "work", "projects");
  return getMDXData(postsDir);
}
