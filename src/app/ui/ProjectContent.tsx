import { FaGithub } from "react-icons/fa";
import TechnologyTile from "./TechnologyTile";
import technologies from "@/data/technologies";
import colorClasses from "@/data/colorClasses";

type ProjectContentProps = {
  title: string;
  github: string;
  text: React.ReactNode;
  tools: string[];
  subtitle?: string;
  secondaryColor: string;
};

const ProjectContent: React.FC<ProjectContentProps> = ({
  title,
  text,
  github,
  tools,
  secondaryColor,
}) => {
  const { textColor } = colorClasses[secondaryColor];
  const technologiesTiles = tools.map((tech) => {
    const technology = technologies[tech as keyof typeof technologies];
    return (
      <TechnologyTile
        key={tech}
        technology={technology}
        size={16}
        color={secondaryColor}
      />
    );
  });

  return (
    <>
      <section className="px-8">
        <div className={`flex items-center gap-4 ${textColor}`}>
          <h2 className={`text-2xl font-bold `}>{title}</h2>
          <a href={github}>
            <FaGithub size={24} className="hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="">{text}</div>
        <div className="flex gap-3 mt-8">{technologiesTiles}</div>
      </section>
    </>
  );
};

export default ProjectContent;
