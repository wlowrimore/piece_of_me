"use client";

import { useState, useEffect } from "react";
import { Project } from "../../../../types";
import { Fade } from "react-awesome-reveal";
import NavMobile from "../NavMobile/NavMobile";
import Image from "next/image";
import Link from "next/link";

import "./projects.css";

import GithubLogo from "/public/images/languages/github.webp";
import InternetLogo from "/public/images/languages/internet.webp";

interface ProjectComponentProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ project }) => {
  const [projectSample, setProjectSample] = useState<Project[]>([]);
  const [visibleOverlayId, setVisibleOverlayId] = useState<number | null>(null);

  const handleMouseEnter = (projectId: number): void => {
    setVisibleOverlayId(projectId);
  };

  const handleMouseLeave = (): void => {
    setVisibleOverlayId(null);
  };

  return (
    <>
      <div className="md:hidden fixed top-0 right-2 p-1">
        <NavMobile />
      </div>
      <Fade direction={"up"} triggerOnce>
        <main className="flex flex-col items-center">
          <div className="relative mb-12">
            <div
              className="absolute inset-0 px-4 bg-black/70 flex items-center justify-center rounded-lg transition-opacity duration-300"
              style={{
                opacity: project && visibleOverlayId === project.id ? 1 : 0,
              }}
              onMouseEnter={() => project && handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col items-center text-white gap-6">
                <p>{project && project.desc}</p>
                <div className="flex gap-6 justify-center">
                  <Link
                    href={
                      project && project.githubUrl ? project.githubUrl : "/"
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={GithubLogo}
                      alt="github-logo"
                      width={1000}
                      height={1000}
                      className="w-8 h-8 glow-on-hover rounded-full transition duration-300"
                    />
                  </Link>
                  <Link
                    href={project && project.liveUrl ? project.liveUrl : "/"}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={InternetLogo}
                      alt="internet-logo"
                      width={1000}
                      height={1000}
                      className="w-[2.1rem] h-[2.08rem] glow-on-hover rounded-full transition duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <Image
              src={project.imageUrl || ""}
              alt={project.title || ""}
              width={1000}
              height={1000}
              className="lg:w-[32rem] rounded-xl border-2 border-zinc-700 shadow-lg shadow-zinc-800"
            />
          </div>
        </main>
      </Fade>
    </>
  );
};

export default ProjectComponent;
