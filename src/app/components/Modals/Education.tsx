type EducationProps = {
  handleOpenEducation: () => void;
};

const Education: React.FC<EducationProps> = ({ handleOpenEducation }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative h-screen flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl md:text-4xl md:mt-[-38rem] md:pb-6 lg:pt-80 text-indigo-800 font-semibold">
          Education
        </h1>
        <p
          onClick={handleOpenEducation}
          className="text-2xl md:text-3xl font-bold text-red-500 absolute top-2 md:top-10 right-2 md:right-5"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold md:text-xl">
            React Advanced Concepts,{" "}
            <span className="text-sm md:text-lg font-normal">
              Zero to Mastery Academy
            </span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            December 2022 - April 2023
          </p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold md:text-xl">
            React Development,{" "}
            <span className="text-sm md:text-lg font-normal">Udemy</span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            January 2022 - February 2022
          </p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold md:text-xl">
            Web Development,{" "}
            <span className="text-sm md:text-lg font-normal">
              Vanderbilt University BC, Nashville, TN
            </span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            November 2021 - May 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
