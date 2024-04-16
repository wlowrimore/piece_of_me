import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type EducationProps = {
  handleOpenEducation: () => void;
};

const Education: React.FC<EducationProps> = ({ handleOpenEducation }) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-scroll">
      <div className="relative h-screen flex flex-col items-center justify-center bg-zinc-200 mt-8 md:mt-16 2xl:mt-14 mx-4 2xl:px-[32%] px-4 xl:px-52 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl md:text-4xl md:pb-6 2xl:pb-0 text-indigo-800 font-semibold">
          Education
        </h1>
        <p
          onClick={handleOpenEducation}
          className="text-2xl md:text-3xl font-bold text-red-500 absolute top-2 md:top-10 right-2 md:right-5 2xl:top-6 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5 lg:pl-[22%] 2xl:mt-10">
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
        <div className="text-black w-full px-4 pt-5 lg:pl-[22%]">
          <h2 className="font-semibold md:text-xl">
            React Development,{" "}
            <span className="text-sm md:text-lg font-normal">Udemy</span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            January 2022 - February 2022
          </p>
        </div>
        <div className="text-black w-full px-4 pt-5 lg:pl-[22%]">
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
