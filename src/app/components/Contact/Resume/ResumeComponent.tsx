import Subtitle from "./Subtitle";
import Title from "./Title";

const ResumeComponent: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center p-6 space-y-4">
      <div className="py-4">
        <Title />
      </div>
      <Subtitle />
      <div className=""></div>
    </main>
  );
};

export default ResumeComponent;
