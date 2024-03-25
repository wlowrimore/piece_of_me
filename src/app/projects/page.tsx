import Link from "next/link";
import ProjectComponent from "../components/ProjectsComponent";
import { Project } from "../../../types";
import projectsData from "../../../public/projects.json";
interface ProjectPageProps {
  projects: Project[];
}

const Projects: React.FC<ProjectPageProps> = ({ projects }) => {
  console.log("PROJECTS FROM PAGE: ", projects);
  return (
    <main className="w-screen min-h-screen bg-cyan-900/70 flex flex-col items-center p-4 mx-auto container">
      <div className="">
        <h1 className="text-2xl font-semibold my-2 uppercase">
          Project Showcase
        </h1>
        <p>
          Below you will find a few projects that I have selected to showcase my
          skill set. You can find all of my projects, various coding excersises,
          and repositories on my{" "}
          <Link
            href="https://github.com/wlowrimore"
            target="_blank"
            rel="noreferrer"
            className="text-red-800 font-semibold underline"
          >
            Github page.
          </Link>
        </p>
      </div>
      {projectsData &&
        projectsData.map((project: Project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
    </main>
  );
};

export default Projects;
