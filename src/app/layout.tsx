import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import { Footer, Header, JsonLd, Providers } from "@/components";
import { dataStyle, effects, fonts, home, person, social, style } from "@/resources";
import { generatePageMetadata } from "@/utils/metadata";
import {
  Background,
  Column,
  Flex,
  type Opacity,
  RevealFx,
  type SpacingToken,
} from "@once-ui-system/core";
import classNames from "classnames";

export async function generateMetadata() {
  const metadata = generatePageMetadata({
    title: home.title,
    description: home.description,
    path: home.path,
    image: home.image,
  });

  return {
    ...metadata,
    title: {
      default: home.title,
      template: `%s — ${person.name}`,
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/images/favicon.ico",
      shortcut: "/images/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang={person.locale}
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: The script is generated only from trusted local theme configuration.
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};

                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });

                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === defaultTheme) {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };

                  root.setAttribute('data-theme', resolveTheme(localStorage.getItem('data-theme')));

                  Object.keys(config).forEach((key) => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) root.setAttribute('data-' + key, value);
                  });
                } catch {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              url: person.url,
              image: `${person.url}${person.avatar}`,
              email: `mailto:${person.email}`,
              jobTitle: person.role,
              homeLocation: {
                "@type": "Place",
                name: person.location,
              },
              sameAs: social
                .filter((item) => item.link.startsWith("https://"))
                .map((item) => item.link),
            }}
          />
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as Opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as Opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as Opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex
            as="main"
            id="main-content"
            tabIndex={-1}
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
