import type { ComponentType, SVGProps } from "react";
import type { WorkPeriod } from "@/lib/dates";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  gender: string;
  about: string;
  summary: readonly string[];
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel1_1: string;
    tel1_2: string;
    tel2_1: string;
    tel2_2: string;
    social: readonly {
      name: string;
      url: string;
      icon: ComponentType<SVGProps<SVGSVGElement>>;
    }[];
  };
  work: readonly (WorkPeriod & {
    company: string;
    link: string;
    badges: readonly string[];
    title: string;
    logo?: string;
    description: string | readonly string[];
  })[];
  education: readonly {
    school: string;
    institute: string;
    link_sfu: string;
    link_ikit: string;
    degree: string | readonly string[];
    grade: readonly string[];
    start: string;
    end: string;
  }[];
  languages: readonly string[];
  skills: readonly string[];
  projects: readonly {
    title: string;
    description: string;
    techStack: readonly string[];
    logo?: string;
    link?: { label: string; href: string };
  }[];
}
