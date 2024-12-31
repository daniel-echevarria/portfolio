import Image from "next/image";

type ProjectPageProps = {
  live?: string;
  title?: string;
  subtitle?: string;
  text: React.ReactNode;
  technologies: string[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  subtitle,
  text,
  live,
}) => {
  return (
    <>
      <section className="px-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="">{text}</div>
        <p className="mt-8 text-center">
          <a
            href={live}
            className="inline-block px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Live
          </a>
        </p>
      </section>
    </>
  );
};

export default ProjectPage;
