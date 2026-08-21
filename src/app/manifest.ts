import { person } from "@/resources";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} portfolio`,
    short_name: person.name,
    description: person.role,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f1720",
    lang: person.locale,
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
