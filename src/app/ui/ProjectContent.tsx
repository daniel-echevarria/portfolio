import { FaGithub } from "react-icons/fa";
import TechnologyTile from "./TechnologyTile";
import technologies from "@/data/technologies";

type ProjectContentProps = {
  title: string;
  github: string;
  text: React.ReactNode;
  tools: (keyof typeof technologies)[];
  subtitle?: string;
  secondaryColor?: string;
};

const ProjectContent: React.FC<ProjectContentProps> = ({
  title,
  text,
  github,
  tools,
  secondaryColor,
}) => {
  const technologiesTiles = tools.map((tech) => {
    const technology = technologies[tech];
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
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold " color={secondaryColor}>
            {title}
          </h2>
          <a href={github}>
            <FaGithub size={24} />
          </a>
        </div>
        <div className="">{text}</div>
        <div className="flex gap-3 mt-8">{technologiesTiles}</div>
      </section>
    </>
  );
};

export default ProjectContent;
