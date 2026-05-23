import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDiscogs,
  SiReact,
  SiJavascript,
  SiCss3,
  SiRubyonrails,
  SiRuby,
  SiPostgresql,
} from "react-icons/si";

export type Technology = {
  name: string;
  icon: IconType;
};

const Technologies: Record<string, Technology> = {
  nextjs: { name: "Next.js", icon: SiNextdotjs },
  typescript: { name: "TypeScript", icon: SiTypescript },
  tailwindcss: { name: "Tailwind CSS", icon: SiTailwindcss },
  "discogs-api": { name: "Discogs API", icon: SiDiscogs },
  react: { name: "React", icon: SiReact },
  rails: { name: "Ruby on Rails", icon: SiRubyonrails },
  javascript: { name: "JavaScript", icon: SiJavascript },
  ruby: { name: "Ruby", icon: SiRuby },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql },
  css: { name: "CSS3", icon: SiCss3 },
};

export default Technologies;
