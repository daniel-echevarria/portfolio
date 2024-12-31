import ProjectPage from "@/app/ui/ProjectPage";
import React from "react";
import projects from "../../../data/projects.json";
import Image from "next/image";

export default function Page() {
  const waldo = projects.find((pro) => pro.id === "waldo");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          waldo Messenger is a full-stack messaging app built with Ruby on Rails
          and React, drawing inspiration from{" "}
          <a href="https://slack.com" className="text-blue-500">
            Slack
          </a>
          . It allows users to send direct messages, manage profiles, and upload
          profile pictures through a secure and user-friendly interface.
        </p>
        <p className="mt-5">
          This project showcases my expertise in modern web development,
          featuring a RESTful API, token-based authentication with Devise-JWT,
          and file uploads using Active Storage. Deployed on Render (backend)
          and Netlify (frontend), waldo Messenger highlights scalability and
          cross-platform compatibility.
        </p>
      </div>
    );
  };

  return (
    <>
      <Image
        className="rounded-md border-2 border-gray-900 w-full"
        src={waldo.image.src}
        alt={waldo.image.alt}
        width={waldo.image.width}
        height={waldo.image.height}
      />
      <ProjectPage
        title={waldo.title}
        subtitle={waldo.subtitle}
        text={<Text />}
        live={waldo.liveLink}
        tools={waldo.technologies}
        secondaryColor="orange"
      />
    </>
  );
}
