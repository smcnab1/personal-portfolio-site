import { CustomMDX, JsonLd, ScrollToHash } from "@/components";
import { Projects } from "@/components/work/Projects";
import { person, work } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import { getPosts } from "@/utils/utils";
import { Column, Heading, Line, Media, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getPosts("work").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug;
  const post = getPosts("work").find((item) => item.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.metadata.title,
    description: post.metadata.summary,
    path: `${work.path}/${post.slug}`,
    image:
      post.metadata.image ||
      post.metadata.images[0] ||
      `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug;
  const post = getPosts("work").find((item) => item.slug === slug);
  if (!post) notFound();

  const url = `${person.url}${work.path}/${post.slug}`;
  const image = post.metadata.image || post.metadata.images[0] || person.avatar;

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: post.metadata.title,
            description: post.metadata.summary,
            url,
            image: `${person.url}${image}`,
            datePublished: post.metadata.publishedAt,
            author: {
              "@type": "Person",
              name: person.name,
              url: person.url,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: work.label,
                item: `${person.url}${work.path}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: post.metadata.title,
                item: url,
              },
            ],
          },
        ]}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center" paddingTop="24">
        <SmartLink href={work.path}>
          <Text variant="label-strong-m">{work.label}</Text>
        </SmartLink>
        <Row gap="8" wrap horizontal="center">
          {post.metadata.tag && <Tag>{post.metadata.tag}</Tag>}
          {post.metadata.status && <Tag>{post.metadata.status}</Tag>}
        </Row>
        <Heading as="h1" variant="display-strong-m" align="center" wrap="balance">
          {post.metadata.title}
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" align="center" wrap="balance">
          {post.metadata.summary}
        </Text>
      </Column>
      {post.metadata.images[0] && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="l"
          border="neutral-alpha-weak"
          alt={`${post.metadata.title} project image`}
          src={post.metadata.images[0]}
          sizes="(max-width: 960px) 100vw, 960px"
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="s">
        <CustomMDX source={post.content} />
      </Column>
      {post.metadata.link && (
        <SmartLink href={post.metadata.link} suffixIcon="arrowUpRightFromSquare">
          {post.metadata.linkLabel || "View project"}
        </SmartLink>
      )}
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related work
        </Heading>
        <Projects exclude={[post.slug]} range={[1, 2]} compact />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
