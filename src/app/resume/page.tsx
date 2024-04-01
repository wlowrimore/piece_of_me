import Link from "next/link";
import { TiHome } from "react-icons/ti";

const Resume: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-resume-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto container">
        <div className="w-screen h-screen bg-black/60">
          <div className="fixed z-10 left-3 top-2 text-zinc-300/90 rounded-full">
            <p className="text-2xl">
              <Link href="/">
                <TiHome />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
