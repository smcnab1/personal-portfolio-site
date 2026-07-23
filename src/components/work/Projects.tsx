import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  compact?: boolean;
}

export function Projects({ range, exclude, compact = false }: ProjectsProps) {
  let allProjects = getPosts("work");

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    const orderDifference =
      (a.metadata.order ?? Number.MAX_SAFE_INTEGER) - (b.metadata.order ?? Number.MAX_SAFE_INTEGER);

    if (orderDifference !== 0) return orderDifference;

    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap={compact ? "l" : "xl"} marginBottom="40" paddingX={compact ? "0" : "l"}>
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          linkLabel={post.metadata.linkLabel}
          tag={post.metadata.tag}
          status={post.metadata.status}
          compact={compact}
        />
      ))}
    </Column>
  );
}
