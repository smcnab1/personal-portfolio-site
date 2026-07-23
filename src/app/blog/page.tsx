import { JsonLd } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { blog, person } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import { Column, Heading, SmartLink, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return generatePageMetadata(blog);
}

export default function WritingPage() {
  return (
    <Column maxWidth="m" fillWidth paddingTop="24" gap="xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: blog.title,
          description: blog.description,
          url: `${person.url}${blog.path}`,
          author: {
            "@type": "Person",
            name: person.name,
            url: person.url,
          },
        }}
      />
      <Column maxWidth="s" gap="12" paddingX="l">
        <Text variant="label-strong-s" onBackground="brand-weak">
          Publications, presentations and notes
        </Text>
        <Heading as="h1" variant="display-strong-l">
          {blog.title}
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak">
          I write and speak about healthcare simulation, generative AI and what inclusive education
          looks like in practice.
        </Text>
        <SmartLink href="/api/rss" prefixIcon="book">
          Subscribe via RSS
        </SmartLink>
      </Column>
      <Posts columns="2" thumbnail direction="column" />
    </Column>
  );
}
