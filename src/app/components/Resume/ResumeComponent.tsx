import NavMobile from "../NavMobile/NavMobile";
import LinksSection from "./LinksSection";
import Title from "./Title";

const ResumeComponent: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center p-6 space-y-2">
      <div className="md:hidden fixed top-0 right-0 p-1">
        <NavMobile />
      </div>
      <Title />
      <LinksSection />
    </main>
  );
};

export default ResumeComponent;
