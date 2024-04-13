import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type TechSkillsProps = {
  handleOpenTechSkills: () => void;
};

const TechSkills: React.FC<TechSkillsProps> = ({ handleOpenTechSkills }) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-scroll">
      <div className="relative min-h-screen flex flex-col items-center md:justify-start md:pt-24 justify-center bg-zinc-200 mt-8 md:mt-16 mx-4 px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl md:text-4xl text-indigo-800 font-semibold">
          Technical Skills
        </h1>
        <p
          onClick={handleOpenTechSkills}
          className="text-2xl md:text-3xl font-bold text-red-500 fixed top-10 right-6 md:top-20 md:right-10 lg:top-20 lg:right-10 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="text-black w-full px-4 md:w-screen md:pl-52 lg:pl-[21rem] pt-5 md:pt-12 2xl:px-[40%] 2xl:ml-[7%] 2xl:pt-20">
          <p className="text-start md:text-xl font-semibold">Languages:</p>
          <div className="w-full grid grid-cols-2 md:gap-x-12 text-sm md:text-lg">
            <p>HTML</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
          </div>
        </div>
        <div className="text-black w-full px-4 md:w-screen md:pl-52 lg:pl-[21rem] pt-5 md:pt-10 2xl:px-[40%] 2xl:ml-[7%]">
          <p className="text-start md:text-xl font-semibold">
            Frameworks | Libraries:{" "}
          </p>
          <div className="w-full grid grid-cols-2 md:gap-x-12 text-sm md:text-lg">
            <p>React</p>
            <p>Next.JS</p>
            <p>Tailwind</p>
            <p>Bootstrap</p>
            <p>jQuery</p>
            <p>Redux</p>
            <p>Django</p>
          </div>
        </div>

        <div className="text-black w-full px-4 md:w-screen md:pl-52 lg:pl-[21rem] pt-5 md:pt-10 2xl:px-[40%] 2xl:ml-[7%] ">
          <p className="text-start md:text-xl font-semibold">
            Tools | Applications:{" "}
          </p>
          <div className="w-full grid grid-cols-2 md:gap-x-12 text-sm md:text-lg">
            <p>Git</p>
            <p>VSCode</p>
            <p>NPM</p>
            <p>DevTools</p>
          </div>
        </div>

        <div className="text-black w-full px-4 md:w-screen md:pl-52 lg:pl-[21rem] pt-5 md:pt-10 2xl:px-[40%] 2xl:ml-[7%] ">
          <p className="text-start md:text-xl font-semibold">Functional: </p>
          <div className="w-full grid grid-cols-2 md:gap-x-12 text-sm md:text-lg">
            <p>SDLC</p>
            <p>Mobile First</p>
            <p>Agile</p>
            <p>SEO</p>
          </div>
        </div>

        <div className="text-black w-full px-4 md:w-screen md:pl-52 lg:pl-[21rem] pt-5 md:pt-10 2xl:px-[40%] 2xl:ml-[7%] ">
          <p className="text-start md:text-xl font-semibold">Professional: </p>
          <div className="w-full grid grid-cols-1 text-sm md:text-lg">
            <p>Time Management</p>
            <p>Teamwork | Collaboration</p>
            <p>Adaptability</p>
            <p>Communication</p>
            <p>Problem Solving</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
