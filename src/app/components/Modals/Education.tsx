type EducationProps = {
  handleOpenEducation: () => void;
};

const Education: React.FC<EducationProps> = ({ handleOpenEducation }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl text-indigo-800 font-semibold">Education</h1>
        <p
          onClick={handleOpenEducation}
          className="text-2xl font-bold text-red-500 absolute top-2 right-2"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">
            React Advanced Concepts,{" "}
            <span className="text-sm font-normal">Zero to Mastery Academy</span>
          </h2>
          <p className="text-sm font-light italic">
            December 2022 - April 2023
          </p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">
            React Development,{" "}
            <span className="text-sm font-normal">Udemy</span>
          </h2>
          <p className="text-sm font-light italic">
            January 2022 - February 2022
          </p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">
            Web Development,{" "}
            <span className="text-sm font-normal">
              Vanderbilt University BC, Nashville, TN
            </span>
          </h2>
          <p className="text-sm font-light italic">November 2021 - May 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
