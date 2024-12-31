import TechnologyTile from "./TechnologyTile";
import technologies from "@/data/technologies";

type ProjectPageProps = {
  live: string;
  title: string;
  text: React.ReactNode;
  tools: string[];
  subtitle?: string;
  secondaryColor?: string;
};

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  text,
  live,
  tools,
  secondaryColor,
}) => {
  const technologiesTiles = tools.map((tech) => {
    const technology = technologies[tech];
    console.log(technology);
    return (
      <TechnologyTile
        technology={technology}
        size={16}
        color={secondaryColor}
      />
    );
  });

  return (
    <>
      <section className="px-8">
        <h2 className="text-2xl font-bold " color={secondaryColor}>
          {title}
        </h2>
        <div className="">{text}</div>
        <div className="flex gap-3 mt-8">{technologiesTiles}</div>
        <p className="mt-8 text-center">
          <a
            href={live}
            className="w-48 inline-block hover:cursor-pointer px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Try It Out
          </a>
        </p>
      </section>
    </>
  );
};

export default ProjectPage;
