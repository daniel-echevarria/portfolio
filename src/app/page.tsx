import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../data/projects.json";
import Card from "@/components/Card";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const miniBio = `I'm Daniel, an independent full-stack web developer based in
    Berlin. I'm passionate about the creative
    process of taking an idea, breaking it apart, and
    materializing it, piece by piece. Let's do it together!`;

  return (
    <>
      <nav className="z-10 w-full justify-between flex text-grey-900 text-xl font-bold p-8 sm:p-20">
        <Link className={`hover:underline`} href="/">
          Daniel Echevarria
        </Link>
        <Link className={`hover:underline`} href={"/about"}>
          About
        </Link>
      </nav>
      <div
        className={`grid grid-rows-[100px_1fr_20px] lg:grid-rows-[400px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ]`}
      >
        <h1
          className={`w-full font-semibold text-3xl sm:text-5xl lg:text-7xl `}
        >
          Full Stack Web Developer. <br />
          Programming Artist.
        </h1>

        <main className="w-full lg:max-w-7xl">
          <div className="lg:grid grid-cols-2 gap-32">
            <div className="flex flex-col gap-16 lg:gap-32">
              {projects.map(
                (project, index) =>
                  index % 2 === 0 && (
                    <Card
                      key={index}
                      image={project.image}
                      title={project.title}
                      live={project["live-link"]}
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
                      live={project["live-link"]}
                      title={project.title}
                      subtitle={project.subtitle}
                    />
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid grid-cols-2 mt-16 lg:mt-64 pb-16 border-b border-gray-900">
            <div className="grid grid-rows[1px_1px_1fr] lg:grid-rows-[1fr_1px_1fr]">
              <div></div>
              <div className="bg-gray-900 mr-10"></div>
              <div className="lg:py-10 mr-10">
                <p className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <p className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  A dedicated tech enthusiast eager to help bring your next idea
                  to life.
                </p>
                <p className="hidden sm:block text-l lg:text-xl mt-10">
                  {miniBio}
                  {miniBio}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end lg:pl-10 py-10 ">
              <Image
                src="/me.jpg"
                alt="picture of daniel echevarria looking professional"
                alt="picture of daniel echevarria looking professional"
                width={2428}
                height={3238}
                priority
              />
              <div className="hidden lg:flex gap-3 mt-5 ">
                <a href="https://www.linkedin.com/in/daniel-e-772683335">
                  <FaLinkedin size={26} />
                </a>
                <a href="https://github.com/daniel-echevarria">
                  <FaGithub size={26} />
                </a>
                <a href="mailto:dan.echevarri@gmail.com">
                  <FaEnvelope size={26} />
                </a>
              </div>

              <div className="flex gap-2 mt-5 lg:hidden justify-center gap-10">
                <a href="https://www.linkedin.com/in/daniel-e-772683335">
                  <FaLinkedin size={32} />
                </a>
                <a href="https://github.com/daniel-echevarria">
                  <FaGithub size={32} />
                </a>
                <a href="mailto:dan.echevarri@gmail.com">
                  <FaEnvelope size={32} />
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="text-sm text-center p-2">
            <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
