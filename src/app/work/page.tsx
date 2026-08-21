import { JsonLd } from "@/components";
import { Projects } from "@/components/work/Projects";
import { person, work } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import { Column, Heading, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return generatePageMetadata(work);
}

export default function WorkPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: work.title,
          description: work.description,
          url: `${person.url}${work.path}`,
          author: {
            "@type": "Person",
            name: person.name,
            url: person.url,
          },
        }}
      />
      <Column maxWidth="s" gap="12" paddingX="l">
        <Text variant="label-strong-s" onBackground="brand-weak">
          Projects and programmes
        </Text>
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          {work.title}
        </Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
          {work.introduction}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
