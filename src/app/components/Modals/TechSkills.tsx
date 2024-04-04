type TechSkillsProps = {
  handleOpenTechSkills: () => void;
};

const TechSkills: React.FC<TechSkillsProps> = ({ handleOpenTechSkills }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl text-indigo-800 font-semibold">
          Technical Skills
        </h1>
        <p
          onClick={handleOpenTechSkills}
          className="text-2xl font-bold text-red-500 absolute top-2 right-2"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <p className="text-start font-semibold">Languages:</p>
          <div className="w-full grid grid-cols-2 text-sm">
            <p>HTML</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
          </div>
        </div>

        <div className="text-black w-full px-4 pt-5">
          <p className="text-start font-semibold">Frameworks | Libraries: </p>
          <div className="w-full grid grid-cols-2 text-sm">
            <p>React</p>
            <p>Next.JS</p>
            <p>Tailwind</p>
            <p>Bootstrap</p>
            <p>jQuery</p>
            <p>Redux</p>
            <p>Django</p>
          </div>
        </div>

        <div className="text-black w-full px-4 pt-5">
          <p className="text-start font-semibold">Tools | Applications: </p>
          <div className="w-full grid grid-cols-2 text-sm">
            <p>Git</p>
            <p>VSCode</p>
            <p>NPM</p>
            <p>DevTools</p>
          </div>
        </div>

        <div className="text-black w-full px-4 pt-5">
          <p className="text-start font-semibold">Functional: </p>
          <div className="w-full grid grid-cols-2 text-sm">
            <p>SDLC</p>
            <p>Mobile First</p>
            <p>Agile</p>
            <p>SEO</p>
          </div>
        </div>

        <div className="text-black w-full px-4 pt-5">
          <p className="text-start font-semibold">Professional: </p>
          <div className="w-full grid grid-cols-1 text-sm">
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
