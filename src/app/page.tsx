import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../data/projects.json";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <nav className="z-10 w-full justify-between flex text-grey-900 text-xl font-bold p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Link className="hover:underline" href="/">
          Daniel Echevarria
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
      </nav>
      <div className="grid grid-rows-[300px_1fr_20px] lg:grid-rows-[400px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="w-full font-semibold text-5xl md:text-6xl lg:text-7xl">
          Full Stack Web Developer. <br />
          Programming Artist.
        </h1>

        <main className="w-full">
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

            <div className="flex flex-col lg:mt-72 gap-16 lg:gap-32 ">
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

          <Image
            className="dark:invert"
            src="/me.jpg"
            alt="daniel echevarria"
            width={2428}
            height={3238}
            priority
          />
        </main>

        <footer>
          <div className="text-align: center; padding: 1rem; background-color: #f4f4f4;">
            <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
            <p>
              <a
                href="https://github.com/daniel-echevarria"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              '|
              <a
                href="https://www.linkedin.com/in/daniel-e-772683335"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              |<a href="mailto:dan.echevarri@gmail.com">Contact</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
