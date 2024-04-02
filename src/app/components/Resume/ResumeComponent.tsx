import NavMobile from "../NavMobile/NavMobile";
import LinksSection from "./LinksSection";

const ResumeComponent: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center p-6 space-y-2">
      <div className="fixed top-0 right-0 p-1">
        <NavMobile />
      </div>
      <div className="py-4">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-2xl text-center font-semibold tracking-wider text-zinc-200 uppercase">
            William Lowrimore
          </h1>
          <div className="mt-[-0.5rem] flex flex-col text-purple-200 tracking-wider items-center">
            <p className="mb-[-0.3rem]">linkedin.com/william-lowrimore-dev</p>
            <p>wlowrimore@gmail.com</p>
            <div className="flex justify-center mt-[-0.3rem] gap-2">
              <p>901.568.7941</p>
              <p>Nashville,&nbsp;TN</p>
            </div>
          </div>
        </div>
      </div>
      <LinksSection />
    </main>
  );
};

export default ResumeComponent;
