import { CustomMDX, JsonLd, ScrollToHash } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";
import { blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { generatePageMetadata } from "@/utils/metadata";
import { getPosts } from "@/utils/utils";
import {
  Avatar,
  Column,
  Heading,
  HeadingNav,
  Line,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getPosts("blog").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug;
  const post = getPosts("blog").find((item) => item.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.metadata.title,
    description: post.metadata.summary,
    path: `${blog.path}/${post.slug}`,
    image:
      post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
  });
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug;
  const post = getPosts("blog").find((item) => item.slug === slug);
  if (!post) notFound();

  const url = `${person.url}${blog.path}/${post.slug}`;
  const image = post.metadata.image
    ? `${person.url}${post.metadata.image}`
    : `${person.url}/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`;

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="24">
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.metadata.title,
                description: post.metadata.summary,
                url,
                image,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                inLanguage: person.locale,
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
                    name: blog.label,
                    item: `${person.url}${blog.path}`,
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
          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href={blog.path}>
              <Text variant="label-strong-m">{blog.label}</Text>
            </SmartLink>
            <Row gap="8" horizontal="center" wrap>
              {post.metadata.tag && <Tag>{post.metadata.tag}</Tag>}
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {formatDate(post.metadata.publishedAt)}
              </Text>
            </Row>
            <Heading as="h1" variant="display-strong-m" align="center" wrap="balance">
              {post.metadata.title}
            </Heading>
            {post.metadata.subtitle && (
              <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
                {post.metadata.subtitle}
              </Text>
            )}
          </Column>
          <Row marginBottom="16" horizontal="center" gap="12" vertical="center">
            <Avatar size="s" src={person.avatar} />
            <Text variant="label-default-m" onBackground="brand-weak">
              {person.name}
            </Text>
          </Row>
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={`${post.metadata.title} article image`}
              aspectRatio="16 / 9"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              border="neutral-alpha-weak"
              radius="l"
            />
          )}
          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>
          <ShareSection title={post.metadata.title} url={url} />
          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Heading as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="24">
              More writing
            </Heading>
            <Posts exclude={[post.slug]} range={[1, 2]} columns="2" direction="column" />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column
        maxWidth={12}
        paddingLeft="40"
        fitHeight
        position="sticky"
        top="80"
        gap="16"
        m={{ hide: true }}
      >
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
