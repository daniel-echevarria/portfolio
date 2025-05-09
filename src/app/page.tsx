import Image from "next/image";
import React from "react";
import projects from "../data/projects.json";
import Card from "./ui/Card";
import SocialMediaIcons from "./ui/SocialMediaIcons";

export default function Home() {
  const miniBio = `I'm Daniel, a full-stack engineer based in Berlin. I really enjoy the process of taking an idea, breaking it apart, and materialising it, piece by piece. Let's do it together!`;

  return (
    <div className="animate-fade-in-up opacity-0 ">
      <h1
        className={`w-full font-semibold text-3xl sm:text-5xl lg:text-7xl mt-8 lg:my-56 `}
      >
        Full Stack Engineer <br />
        Programming Artist.
      </h1>

      <main className="w-full lg:max-w-7xl mt-8 sm:mt-20">
        <div className="lg:grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-16 lg:gap-32">
            {projects.map(
              (project, index) =>
                index % 2 === 0 && (
                  <Card
                    key={index}
                    image={project.image}
                    title={project.title}
                    page={project.clientLink}
                    subtitle={project.subtitle}
                  />
                )
            )}
          </div>

          <div className="flex flex-col gap-16 lg:gap-32 mt-10 lg:mt-72">
            {projects.map(
              (project, index) =>
                index % 2 === 1 && (
                  <Card
                    key={index}
                    image={project.image}
                    page={project.clientLink}
                    title={project.title}
                    subtitle={project.subtitle}
                  />
                )
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mt-16 lg:mt-64 pb-8 sm:pb-16 border-b border-gray-900">
          <div className="grid lg:grid-rows-[1fr_1px_1fr]">
            <div></div>
            <div className="bg-gray-900 mr-10"></div>
            <div className="lg:py-10 mr-10">
              <p className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                A dedicated tech enthusiast eager to help bring your next idea
                to life.
              </p>
              <p className="hidden sm:block text-l lg:text-xl mt-10">
                {miniBio}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:pl-10 py-10">
            <Image
              src="/me.jpg"
              alt="Picture of Daniel Echevarria looking professional"
              width={2428}
              height={3238}
              priority
            />
            <SocialMediaIcons desktopIconSize={28} mobileIconSize={38} />
          </div>
        </div>
      </main>
    </div>
  );
}
