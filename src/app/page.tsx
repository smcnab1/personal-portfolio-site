import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import { contact, home } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import {
  Badge,
  Button,
  Card,
  Column,
  Grid,
  Heading,
  Line,
  RevealFx,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return generatePageMetadata(home);
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="20">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
            >
              {home.eyebrow}
            </Badge>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading as="h1" wrap="balance" align="center" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
            <Text
              wrap="balance"
              align="center"
              onBackground="neutral-weak"
              variant="heading-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.3} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              {home.actions.map((action) => (
                <Button
                  key={action.href}
                  href={action.href}
                  variant={action.primary ? "primary" : "secondary"}
                  size="m"
                  arrowIcon
                >
                  {action.label}
                </Button>
              ))}
            </Row>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center" paddingTop="20">
            <Row gap="20" wrap horizontal="center">
              {home.secondaryLinks.map((link) => (
                <SmartLink key={link.label} href={link.href} prefixIcon={link.icon}>
                  <Text variant="label-default-s">{link.label}</Text>
                </SmartLink>
              ))}
            </Row>
          </RevealFx>
          <RevealFx delay={0.5} horizontal="center" paddingTop="24">
            <Row gap="8" wrap horizontal="center">
              {home.credibility.map((item) => (
                <Badge key={item} background="neutral-alpha-weak" textVariant="label-default-s">
                  {item}
                </Badge>
              ))}
            </Row>
          </RevealFx>
        </Column>
      </Column>

      <Column fillWidth gap="l" paddingTop="40">
        <Row fillWidth horizontal="between" vertical="end" gap="16" wrap>
          <Column gap="8">
            <Text variant="label-strong-s" onBackground="brand-weak">
              Selected work
            </Text>
            <Heading as="h2" variant="display-strong-s">
              Work grounded in real practice
            </Heading>
          </Column>
          <SmartLink href="/work" suffixIcon="arrowRight">
            View all work
          </SmartLink>
        </Row>
        <Projects range={[1, 3]} compact />
      </Column>

      <Column fillWidth gap="l">
        <Line />
        <Column gap="8">
          <Text variant="label-strong-s" onBackground="brand-weak">
            Current focus
          </Text>
          <Heading as="h2" variant="display-strong-s">
            The threads running through my work
          </Heading>
        </Column>
        <Grid columns="3" m={{ columns: "1" }} gap="16" fillWidth>
          {home.focusAreas.map((area) => (
            <Card key={area.title} padding="l" radius="l" border="neutral-alpha-weak">
              <Column gap="12">
                <Heading as="h3" variant="heading-strong-l">
                  {area.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {area.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Grid>
      </Column>

      <Column fillWidth gap="l">
        <Row fillWidth horizontal="between" vertical="end" gap="16" wrap>
          <Column gap="8">
            <Text variant="label-strong-s" onBackground="brand-weak">
              Selected writing
            </Text>
            <Heading as="h2" variant="display-strong-s">
              Ideas in public
            </Heading>
          </Column>
          <SmartLink href="/blog" suffixIcon="arrowRight">
            View all writing
          </SmartLink>
        </Row>
        <Posts range={[1, 3]} columns="3" direction="column" />
      </Column>

      <Card fillWidth padding="xl" radius="xl" border="brand-alpha-medium">
        <Row fillWidth horizontal="between" vertical="center" gap="24" s={{ direction: "column" }}>
          <Column gap="8" maxWidth={36}>
            <Heading as="h2" variant="display-strong-xs">
              Have a thoughtful problem to solve?
            </Heading>
            <Text onBackground="neutral-weak">{contact.availability}</Text>
          </Column>
          <Button href={contact.path} variant="primary" size="m" arrowIcon>
            Get in touch
          </Button>
        </Row>
      </Card>
    </Column>
  );
}
