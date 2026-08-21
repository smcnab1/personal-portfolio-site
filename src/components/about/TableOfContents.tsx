import { Column, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: Array<{
    id: string;
    title: string;
    display: boolean;
  }>;
}

export default function TableOfContents({ structure }: TableOfContentsProps) {
  return (
    <Column
      as="nav"
      aria-label="About page sections"
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="12"
      m={{ hide: true }}
    >
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <SmartLink key={section.id} href={`#${section.id}`} className={styles.hover} unstyled>
            <Row gap="8" vertical="center">
              <Line maxWidth="16" />
              <Text>{section.title}</Text>
            </Row>
          </SmartLink>
        ))}
    </Column>
  );
}
