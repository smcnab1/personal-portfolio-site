import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Row,
  Tag,
  Text,
} from "@once-ui-system/core";
import React from "react";
import { JsonLd } from "@/components";
import styles from "@/components/about/about.module.scss";
import TableOfContents from "@/components/about/TableOfContents";
import { about, person, social } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import { groupExperiencesByCompany } from "./groupExperiences";

export async function generateMetadata() {
  return generatePageMetadata(about);
}

type Experience = (typeof about.work.experiences)[number];

export default function About() {
  const groupedExperiences = groupExperiencesByCompany<Experience>(about.work.experiences);
  const structure = [
    {
      id: "introduction",
      title: about.intro.title,
      display: about.intro.display,
    },
    {
      id: "selected-roles",
      title: about.work.title,
      display: about.work.display,
    },
    {
      id: "education",
      title: about.studies.title,
      display: about.studies.display,
    },
    {
      id: "areas-of-practice",
      title: about.technical.title,
      display: about.technical.display,
    },
    {
      id: "professional-contributions",
      title: about.contributions.title,
      display: about.contributions.display,
    },
  ];
  return (
    <Column maxWidth="m">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: about.title,
          description: about.description,
          url: `${person.url}${about.path}`,
          mainEntity: {
            "@type": "Person",
            name: person.name,
            url: person.url,
            image: `${person.url}${person.avatar}`,
            jobTitle: person.role,
          },
        }}
      />
      {about.tableOfContent.display && <TableOfContents structure={structure} />}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={30}>
          <Column id="introduction" fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading as="h1" className={styles.textAlign} variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              aria-label={item.name}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id="selected-roles" variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {groupedExperiences.map(([company, roles]) => (
                  <Column key={company} fillWidth gap="m">
                    <Heading as="h3" variant="heading-strong-l">
                      {company}
                    </Heading>
                    <Column fillWidth gap="24">
                      {roles.map((experience) => {
                        const roleKey = `${experience.company}-${experience.role}-${experience.timeframe}`;

                        return (
                          <Column key={roleKey} className={styles.roleItem} fillWidth>
                            <Row
                              className={styles.roleHeader}
                              fillWidth
                              horizontal="between"
                              vertical="end"
                              gap="12"
                              wrap
                              marginBottom="m"
                            >
                              <Text variant="heading-strong-m" onBackground="brand-weak">
                                {experience.role}
                              </Text>
                              <Text variant="heading-default-xs" onBackground="neutral-weak">
                                {experience.timeframe}
                              </Text>
                            </Row>
                            <Column as="ul" gap="16">
                              {experience.achievements.map((achievement, index) => (
                                <Text
                                  as="li"
                                  variant="body-default-m"
                                  // biome-ignore lint/suspicious/noArrayIndexKey: Achievement order identifies static content without stable IDs.
                                  key={`${roleKey}-achievement-${index}`}
                                >
                                  {achievement}
                                </Text>
                              ))}
                            </Column>
                            {experience.images && experience.images.length > 0 && (
                              <Row fillWidth paddingTop="m" gap="12" wrap>
                                {experience.images.map((image) => (
                                  <Row
                                    key={`${roleKey}-${image.src}`}
                                    border="neutral-medium"
                                    radius="m"
                                    minWidth={image.width}
                                    height={image.height}
                                  >
                                    <Media
                                      enlarge
                                      radius="m"
                                      sizes={image.width.toString()}
                                      alt={image.alt}
                                      src={image.src}
                                    />
                                  </Row>
                                ))}
                              </Row>
                            )}
                          </Column>
                        );
                      })}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id="education" variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution) => (
                  <Column key={institution.name} fillWidth gap="4">
                    <Text variant="heading-strong-l">{institution.name}</Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading as="h2" id="areas-of-practice" variant="display-strong-s" marginBottom="40">
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill) => (
                  <Column key={skill.title} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag) => (
                          <Tag key={`${skill.title}-${tag.name}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.contributions.display && (
            <>
              <Heading
                as="h2"
                id="professional-contributions"
                variant="display-strong-s"
                marginTop="40"
                marginBottom="m"
              >
                {about.contributions.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.contributions.items.map((item) => (
                  <Column key={item.title} fillWidth gap="4">
                    <Text variant="heading-strong-l">{item.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
