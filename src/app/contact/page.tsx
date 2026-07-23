import { JsonLd } from "@/components";
import { contact, person, social } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import { Button, Card, Column, Grid, Heading, SmartLink, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  return generatePageMetadata(contact);
}

export default function ContactPage() {
  return (
    <Column maxWidth="s" fillWidth paddingTop="24" paddingBottom="xl" gap="xl">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: contact.title,
          description: contact.description,
          url: `${person.url}${contact.path}`,
          mainEntity: {
            "@type": "Person",
            name: person.name,
            email: `mailto:${person.email}`,
            url: person.url,
          },
        }}
      />
      <Column gap="16">
        <Text variant="label-strong-s" onBackground="brand-weak">
          Contact
        </Text>
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          Let&apos;s talk about useful work.
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
          {contact.introduction}
        </Text>
        <Button
          href={`mailto:${person.email}`}
          prefixIcon="email"
          variant="primary"
          size="m"
          style={{ width: "fit-content" }}
        >
          Email {person.email}
        </Button>
      </Column>

      <Card fillWidth padding="l" radius="l" border="brand-alpha-medium">
        <Text variant="body-default-m">{contact.availability}</Text>
      </Card>

      <Column gap="m">
        <Heading as="h2" variant="display-strong-xs">
          Elsewhere
        </Heading>
        <Grid columns="2" s={{ columns: "1" }} fillWidth gap="12">
          {social
            .filter((item) => item.name !== "Email")
            .map((item) => (
              <Card key={item.name} padding="l" radius="l" border="neutral-alpha-weak">
                <SmartLink
                  href={item.link}
                  prefixIcon={item.icon}
                  suffixIcon="arrowUpRightFromSquare"
                >
                  {item.name}
                </SmartLink>
              </Card>
            ))}
          <Card padding="l" radius="l" border="neutral-alpha-weak">
            <SmartLink href={person.url} prefixIcon="globe">
              {person.url.replace("https://", "")}
            </SmartLink>
          </Card>
        </Grid>
      </Column>

      <Text variant="body-default-s" onBackground="neutral-weak">
        Please do not send patient-identifiable information, passwords or other confidential
        material by email.
      </Text>
    </Column>
  );
}
