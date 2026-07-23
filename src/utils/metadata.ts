import { baseURL, person } from "@/resources";
import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  image = person.avatar,
}: PageMetadataInput): Metadata {
  const metadata = Meta.generate({
    title,
    description,
    baseURL,
    path,
    image,
  }) as Metadata;

  return {
    ...metadata,
    alternates: {
      canonical: path === "/" ? baseURL : `${baseURL}${path}`,
    },
    openGraph: {
      ...metadata.openGraph,
      locale: "en_GB",
      siteName: person.name,
    },
  };
}
