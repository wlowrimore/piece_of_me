type ExperienceProps = {
  handleOpenExperience: () => void;
};

const Experience: React.FC<ExperienceProps> = ({ handleOpenExperience }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative h-screen flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 pt-72 pb-16 border-2 border-zinc-800 rounded-lg overflow-scroll">
        <h1 className="text-3xl text-indigo-800 font-semibold">Experience</h1>
        <p
          onClick={handleOpenExperience}
          className="text-2xl font-bold text-red-500 fixed top-10 right-8"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">
            Web Developer,{" "}
            <span className="text-sm font-normal">Upwork, Nashville, TN</span>
          </h2>
          <p className="text-sm font-light italic">November 2022 - Present</p>
        </div>

        <div className="text-black text-sm w-full pl-8 pr-4 pt-3">
          <ul className="list-disc space-y-2">
            <li>
              Restructured a client's website to be mobile responsive and
              implemented <strong>SEO</strong> best practices using{" "}
              <strong>HTML, CSS, JavaScript and jQuery</strong>. This resulting
              in a <strong>32% increase</strong> of web search visibility.
            </li>
            <li>
              Designed and developed mobile responsive Frontend for a start-up
              company's website using{" "}
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

        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">
            Junior Software Engineer,{" "}
            <span className="text-sm font-normal">Coroutine, Boulder, CO</span>
          </h2>
          <p className="text-sm font-light italic">
            September 2022 - November 2022
          </p>
        </div>

        <div className="text-black text-sm w-full pl-8 pr-4 pt-3">
          <ul className="list-disc space-y-2">
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
