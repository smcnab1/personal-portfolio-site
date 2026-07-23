# Sam McNab portfolio

Sam McNab’s personal portfolio, built with Next.js, TypeScript, MDX and the Once UI component
system.

The site presents selected work across healthcare simulation, higher education, inclusive design
and practical software. Personal details, social links and navigation are maintained centrally;
project and writing detail pages are stored as structured MDX.

## Development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3000`.

## Content model

- `src/resources/content.tsx` — profile, navigation, social links and page-level content
- `src/resources/once-ui.config.ts` — visual system and public base URL
- `src/app/work/projects/*.mdx` — project and programme case studies
- `src/app/blog/posts/*.mdx` — publications, presentations and writing

Project and writing files require `title`, `publishedAt` and `summary` frontmatter. Optional
frontmatter supports media, type, current status and verified external links.

## Quality checks

```bash
npm run check
npm run build
```

`npm run check` verifies formatting, lint, TypeScript and portfolio content tests.

## Public features

- Responsive navigation and colour-mode control
- MDX project and writing detail routes
- Project media, tags and related-content navigation
- RSS, sitemap, robots and web app manifest routes
- Canonical, Open Graph, Person, Article and breadcrumb metadata
- Reduced-motion support, keyboard focus and a skip link

## Attribution

This site is based on the Once UI Magic Portfolio template. See `LICENSE` for the original licence
terms.
