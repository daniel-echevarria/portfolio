import ProjectPage from "@/app/ui/ProjectPage";
import React from "react";
import projects from "../../../data/projects.json";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";

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
        <div className="flex gap-3 mt-8">
          <span className="flex items-center gap-2 text-sm border border-gray-900 p-2 rounded-3xl">
            <SiRubyonrails size={24} /> Ruby on Rails
          </span>
          <span className="flex items-center gap-2 text-sm border border-gray-900 p-2 rounded-3xl">
            <FaReact size={24} /> React
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      {slick && (
        <ProjectPage
          title={slick.title}
          subtitle={slick.subtitle}
          text={<Text />}
          live={slick["live-link"]}
        >
          <Image
            className="rounded-md border-2 border-gray-900"
            src={slick.image.src}
            alt={slick.image.alt}
            width={slick.image.width}
            height={slick.image.height}
          ></Image>
        </ProjectPage>
      )}
    </>
  );
}
