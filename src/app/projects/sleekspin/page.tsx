import React from "react";
import projects from "../../../data/projects.json";
import ProjectPage from "@/app/ui/ProjectPage";

export default function Page() {
  const sleekspin = projects.find((pro) => pro.id === "sleekspin");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          SleekSpin is a streamlined web app that lets users generate printable
          record labels using data from Discogs. Just paste a Discogs release
          number or search for a record, and SleekSpin auto-fills the label with
          accurate, structured release info.
        </p>
        <p className="mt-5">
          Built with Next.js, TypeScript, and Tailwind CSS, it features state
          management with Zustand and a clean UI focused on speed and usability.
          This MVP is already useful for vinyl shops, collectors, or DJs who
          need clear, professional-looking labels.
        </p>
      </div>
    );
  };

  return (
    <>{sleekspin && <ProjectPage project={sleekspin} text={<Text />} />}</>
  );
}
