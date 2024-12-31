import React from "react";
import projects from "../../../data/projects.json";
import ProjectPage from "@/app/ui/ProjectPage";

export default function Page() {
  const chess = projects.find((pro) => pro.id === "chess");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          Dive into the timeless strategy of chess with the Terminal Chess Game,
          built entirely in Ruby. Featuring full chess mechanics, two-player
          mode, and a clean ASCII board display, this project brings the
          excitement of chess to your terminal. Save and load your games, enjoy
          intuitive move validation, and challenge your friends to a match.
        </p>
        <p className="mt-5">
          Showcasing advanced programming and a love for chess, this game
          highlights skills in logic design and object-oriented programming.
          Experience the art of chess, one terminal command at a time!
        </p>
      </div>
    );
  };

  return <>{chess && <ProjectPage project={chess} text={<Text />} />}</>;
}
