import { Button, Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading as="h1" marginBottom="l" variant="display-default-xs">
        Page not found
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l">
        The page you&apos;re looking for does not exist or has moved.
      </Text>
      <Button href="/" prefixIcon="home" variant="secondary">
        Return home
      </Button>
    </Column>
  );
}
