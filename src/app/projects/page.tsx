import type { Metadata } from "next";

import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import ProjectComponent from "../components/Projects/ProjectsComponent";
import { Project } from "../../../types";
import projectsData from "../../../public/projects.json";
interface ProjectPageProps {
  projects: Project[];
}

export const metadata: Metadata = {
  title: "Projects | William Lowrimore | Frontend Developer",
  description:
    "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
  keywords:
    "Software, Developer, Frontend, React, Javascript, Web Development, Nashville, TN, Next.JS, Engineer, Agile, Collaboration, Tailwind, Django, Python, HTML, CSS, Bootstrap, API, REST, SOAP, GraphQL, Postgres, PostgreSQL",
  openGraph: {
    title: "William Lowrimore | Frontend Developer",
    description:
      "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
    type: "website",
    url: "http://www.williamlowrimore.com", // Change to your actual URL
    images: [
      {
        url: "https://res.cloudinary.com/dxvvq6h1x/image/upload/v1712924384/will_avatar_ctz0rg.webp",
      },
    ],
  },
};

const Projects: React.FC<ProjectPageProps> = ({ projects }) => {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-t from-[#304454]/80 to-[#B89F88] flex flex-col items-center p-4 md:p-16 mx-auto mb-6">
      <div className="fixed z-10 left-3 top-2 text-zinc-800/90 rounded-full">
        <p className="md:hidden text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
        </p>
      </div>
      <div className="mt-12 md:px-6 lg:px-0 xl:px-16 2xl:container 2xl:px-56">
        <div className="">
          <h1 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold my-2 uppercase">
            Project Showcase
          </h1>
          <p className="font-semibold text-slate-950/70 text-lg md:text-xl">
            Below you will find a few projects that I have selected to showcase
            my skill set. You can find all of my projects, various coding
            excersises, and repositories on my{" "}
            <Link
              href="https://github.com/wlowrimore"
              target="_blank"
              rel="noreferrer"
              className="text-red-700/80 font-semibold underline hover:text-indigo-600/70 transition duration-300"
            >
              Github&nbsp;page.
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-12 md:grid grid-cols-2 md:w-[40rem] lg:w-full 2xl:w-[70rem] md:gap-10 gap-4 2xl:container 2xl:mt-20 2xl:gap-14">
        {projectsData &&
          projectsData.map((project: Project) => (
            <ProjectComponent key={project.id} project={project} />
          ))}
      </div>
      <div className="w-screen fixed bottom-0 flex items-center justify-center mt-auto h-[3rem] hover:h-[4rem] transition-all duration-300">
        <Link
          href="/contact"
          className="w-full h-full flex items-center justify-between px-20 bg-[#304454] text-white text-lg font-semibold rounded-t-3xl"
        >
          Contact Me
          <div className="animate-slide-right-back">
            <HiChevronRight className="text-4xl" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Projects;
