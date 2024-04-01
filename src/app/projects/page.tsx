import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import ProjectComponent from "../components/ProjectsComponent";
import { Project } from "../../../types";
import projectsData from "../../../public/projects.json";
interface ProjectPageProps {
  projects: Project[];
}

const Projects: React.FC<ProjectPageProps> = ({ projects }) => {
  return (
    <main className="w-screen min-h-screen bg-cyan-100/70 flex flex-col items-center p-4 mx-auto container mb-6">
      <div className="fixed z-10 left-3 top-2 text-zinc-800/90 rounded-full">
        <p className="text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-semibold my-2 uppercase">
          Project Showcase
        </h1>
        <p className="font-semibold text-slate-950/70 text-lg mb-6">
          Below you will find a few projects that I have selected to showcase my
          skill set. You can find all of my projects, various coding excersises,
          and repositories on my{" "}
          <Link
            href="https://github.com/wlowrimore"
            target="_blank"
            rel="noreferrer"
            className="text-red-900/80 font-semibold underline"
          >
            Github&nbsp;page.
          </Link>
        </p>
      </div>
      {projectsData &&
        projectsData.map((project: Project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      <div className="w-screen fixed bottom-0 flex items-center justify-center mt-auto h-[3rem]">
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
