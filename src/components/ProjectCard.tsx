"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  linkLabel?: string;
  tag?: string;
  status?: string;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  linkLabel = "View project",
  tag,
  status,
  compact = false,
}) => {
  return (
    <Column fillWidth gap="m">
      {images.length > 1 && !compact ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: `${title} project image`,
          }))}
        />
      ) : (
        images[0] && (
          <Media
            src={images[0]}
            alt={`${title} project image`}
            aspectRatio="16 / 9"
            objectFit="contain"
            radius="l"
            border="neutral-alpha-weak"
            priority={priority}
            sizes={compact ? "(max-width: 768px) 100vw, 640px" : "(max-width: 960px) 100vw, 960px"}
          />
        )
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom={compact ? "12" : "24"}
        gap={compact ? "m" : "l"}
      >
        <Column flex={5} gap="8">
          <Row gap="8" wrap>
            {tag && <Tag size="s">{tag}</Tag>}
            {status && <Tag size="s">{status}</Tag>}
          </Row>
          <Heading
            as={compact ? "h3" : "h2"}
            wrap="balance"
            variant={compact ? "heading-strong-l" : "heading-strong-xl"}
          >
            {title}
          </Heading>
        </Column>
        {(avatars.length > 0 || description.trim() || content.trim()) && (
          <Column flex={7} gap="16">
            {avatars.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">{linkLabel}</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
