import Image from "next/image";
import ProjectContent from "./ProjectContent";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  liveLink: string;
  githubLink: string;
  clientLink: string;
  technologies: AllowedTechnologies[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type AllowedTechnologies =
  | "ruby"
  | "react"
  | "rails"
  | "javascript"
  | "postgresql"
  | "css";

type ProjectPageProps = {
  project: Project;
  text: React.ReactNode;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project, text }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Image
          className="rounded-lg border border-gray-900  w-full shadow-lg"
          src={project?.image.src}
          alt={project?.image.alt}
          width={project?.image.width}
          height={project?.image.height}
        />
        <p className="text-center">
          <a
            href={project?.liveLink}
            className="w-full inline-block hover:cursor-pointer px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Try It Out
          </a>
        </p>
      </div>
      <ProjectContent
        title={project?.title}
        subtitle={project?.subtitle}
        text={text}
        github={project?.githubLink}
        tools={project.technologies}
        secondaryColor="orange"
      />
    </>
  );
};

export default ProjectPage;
