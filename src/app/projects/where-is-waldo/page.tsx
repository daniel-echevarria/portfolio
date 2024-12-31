import React from "react";
import projects from "../../../data/projects.json";
import ProjectPage from "@/app/ui/ProjectPage";

export default function Page() {
  const waldo = projects.find((pro) => pro.id === "waldo");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          {`
          An engaging and interactive web app inspired by the classic "Where's
          Waldo?" books. Users search for Waldo and other hidden characters in a
          vibrant image while racing against the clock. Built with React for a
          dynamic front-end and Ruby on Rails for a robust backend.
          `}
        </p>
        <p className="mt-5">
          This project highlights skills in creating interactive gameplay,
          real-time feedback, and a leaderboard to track top players. Test your
          observation skills and compete to be the fastest at finding Waldo!
        </p>
      </div>
    );
  };

  return <>{waldo && <ProjectPage project={waldo} text={<Text />} />}</>;
}
