import React from "react";
import projects from "../../../data/projects.json";
import ProjectPage from "@/app/ui/ProjectPage";

export default function Page() {
  const pokememorize = projects.find((pro) => pro.id === "pokememorize");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          Challenge your memory and strategy skills with Pokememorize, an
          exciting game where you must avoid clicking the same Pokémon card
          twice. Featuring dynamic Pokémon content powered by the Pokémon API,
          responsive design, and engaging visuals!
        </p>
        <p className="mt-5">
          This project combines fun gameplay with seamless functionality. Built
          with React and styled with CSS, it showcases creative problem-solving
          and interactive design. Test your memory, aim for a high score, and
          uncover the hidden level that only legends can conquer!
        </p>
      </div>
    );
  };

  return (
    <>
      {pokememorize && <ProjectPage project={pokememorize} text={<Text />} />}
    </>
  );
}
