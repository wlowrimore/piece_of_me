import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type ExperienceProps = {
  handleOpenExperience: () => void;
};

const Experience: React.FC<ExperienceProps> = ({ handleOpenExperience }) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-scroll">
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-200 mt-8 2xl:mt-14 md:mt-16 mx-4 px-4 xl:px-44 pt-16 pb-24 md:pt-80 border-2 border-zinc-800 rounded-lg 2xl:px-96">
        <h1 className="text-3xl md:text-4xl md:mt-[-12rem] md:pb-12 text-indigo-800 font-semibold">
          Experience
        </h1>
        <p
          onClick={handleOpenExperience}
          className="text-2xl md:text-3xl font-bold text-red-500 fixed top-10 md:top-[4.5rem] right-8 md:right-10 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5 2xl:pt-10">
          <h2 className="font-semibold md:text-xl">
            Web Developer,{" "}
            <span className="text-sm md:text-lg font-normal">
              Upwork, Nashville, TN
            </span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            November 2022 - Present
          </p>
        </div>

        <div className="text-black text-sm md:text-lg w-full pl-8 pr-4 pt-3">
          <ul className="list-disc space-y-2">
            <li>
              Restructured a client&apos;s website to be mobile responsive and
              implemented <strong>SEO</strong> best practices using{" "}
              <strong>HTML, CSS, JavaScript and jQuery</strong>. This resulting
              in a <strong>32% increase</strong> of web search visibility.
            </li>
            <li>
              Designed and developed mobile responsive Frontend for a start-up
              company&apos;s website using{" "}
              <strong>React, Next.JS and Tailwind</strong>. The result was a{" "}
              <strong>100% increase in brand awareness</strong>.
            </li>
            <li>
              Converted a client&apos;s static HTML website into a{" "}
              <strong>React/Next.JS SPA</strong> using{" "}
              <strong>Reusable Components and React Hooks</strong> for managing
              dynamic content and state. The result was{" "}
              <strong>2x loading speed and 1/3 of disk space used</strong>.
            </li>
          </ul>
        </div>
        <div className="w-full h-[0.05rem] mt-6 bg-zinc-400">
          <hr />
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold md:text-xl">
            Junior Software Engineer,{" "}
            <span className="text-sm md:text-lg font-normal">
              Coroutine, Boulder, CO
            </span>
          </h2>
          <p className="text-sm md:text-lg font-light italic">
            September 2022 - November 2022
          </p>
        </div>

        <div className="text-black text-sm w-full pl-8 pr-4 pt-3">
          <ul className="list-disc space-y-2 md:text-lg">
            <li>
              Contributed to the development team by writing{" "}
              <strong>Unit Tests</strong> for the <strong>Frontend</strong> of
              an enterprise website built in the Ruby on Rails platform. Tests
              were written using <strong>MiniTest</strong> and{" "}
              <strong>RSpec</strong>, and resulted in assured validation of all
              UI content.
            </li>

            <li>
              Was responsible for the integration of{" "}
              <strong>Google Geocoder API</strong> for an enterprise website,
              and providing a <strong>TailwindCSS</strong> styled element to
              contain the output in the <strong>UI</strong>. The result was a
              polished product with a completion date well{" "}
              <strong>before its deadline</strong>.
            </li>

            <li>
              Co-designed and Developed the <strong>UI</strong> for a
              company-wide internal chat app using <strong>React</strong> and{" "}
              <strong>TailwindCSS</strong>. The result yielded a
              mobile-responsive design that enabled developers to freely
              collaborate,{" "}
              <strong>increasing productivity and net profits.</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
