import type { IconName } from "@/resources/icons";
import type { ReactNode } from "react";
import type { zones } from "tzdata";

export type IANATimeZone = Extract<keyof typeof zones, string>;

export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  email: string;
  location: string;
  timeZone: IANATimeZone;
  languages?: string[];
  locale: string;
  url: string;
};

export type SocialLink = {
  name: string;
  icon: IconName;
  link: string;
  essential?: boolean;
};

export type Social = SocialLink[];

export type NavigationItem = {
  path: `/${string}` | "/";
  label: string;
  icon: IconName;
};

export interface BasePageConfig {
  path: `/${string}` | "/";
  label: string;
  title: string;
  description: string;
  image?: string;
}

export interface Home extends BasePageConfig {
  image: string;
  eyebrow: string;
  headline: ReactNode;
  subline: ReactNode;
  actions: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
  secondaryLinks: Array<{
    label: string;
    href: string;
    icon?: IconName;
  }>;
  focusAreas: Array<{
    title: string;
    description: string;
  }>;
  credibility: string[];
}

type ContentSection<T> = {
  display: boolean;
  title: string;
  items: T[];
};

export interface About extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  intro: {
    display: boolean;
    title: string;
    description: ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      achievements: ReactNode[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      description: ReactNode;
    }>;
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: ReactNode;
      tags?: Array<{
        name: string;
        icon?: IconName;
      }>;
    }>;
  };
  contributions: ContentSection<{
    title: string;
    description: ReactNode;
  }>;
}

export interface Blog extends BasePageConfig {}

export interface Work extends BasePageConfig {
  introduction: string;
}

export interface Contact extends BasePageConfig {
  introduction: string;
  availability: string;
}
