import Link from "next/link";
import React from "react";

const ProjectsComponent: React.FC = () => {
  return (
    <main className="w-screen min-h-screen bg-cyan-900/20 flex flex-col justify-center items-center p-4 mx-auto container">
      <h1 className="text-3xl font-semibold mb-4">Showcased Projects</h1>
      <div className="w-full flex flex-col px-2">
        <p>
          Below you will find a few projects that I have selected to showcase my
          skill set. You can find all of my projects, various coding exercises
          and repositories on my&nbsp;
          <Link
            href="https://www.github.com/wlowrimore"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sky-700 font-semibold underline"
          >
            GitHub page.
          </Link>
        </p>
      </div>
      {/* Projects Listed with links to repo and live site */}
    </main>
  );
};

export default ProjectsComponent;
