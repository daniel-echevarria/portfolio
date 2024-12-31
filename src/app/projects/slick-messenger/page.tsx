import ProjectPage from "@/app/ui/ProjectPage";
import React from "react";
import projects from "../../../data/projects.json";
import Image from "next/image";

export default function Page() {
  const slick = projects.find((pro) => pro.id === "slick");

  const Text = () => {
    return (
      <div>
        <p className="mt-5">
          Slick Messenger is a full-stack messaging app built with Ruby on Rails
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
          and Netlify (frontend), Slick Messenger highlights scalability and
          cross-platform compatibility.
        </p>
      </div>
    );
  };

  return (
    <>
      <Image
        className="rounded-md border-2 border-gray-900 w-full"
        src={slick.image.src}
        alt={slick.image.alt}
        width={slick.image.width}
        height={slick.image.height}
      />
      <ProjectPage
        title={slick.title}
        subtitle={slick.subtitle}
        text={<Text />}
        live={slick.liveLink}
        tools={slick.technologies}
        secondaryColor="orange"
      />
    </>
  );
}
