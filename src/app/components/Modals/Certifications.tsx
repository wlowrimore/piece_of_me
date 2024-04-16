import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type CertificationsProps = {
  handleOpenCertifications: () => void;
};

const Certifications: React.FC<CertificationsProps> = ({
  handleOpenCertifications,
}) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-scroll">
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-200 mt-8 md:mt-16 2xl:mt-16 mx-4 xl:px-52 2xl:px-[29%] px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl md:text-4xl md:pb-12 text-indigo-800 font-semibold">
          Certifications
        </h1>
        <p
          onClick={handleOpenCertifications}
          className="text-2xl md:text-3xl font-bold text-red-500 absolute top-2 md:top-10 right-2 md:right-5 2xl:top-6 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5 lg:pl-[32%] 2xl:pt-6">
          <h2 className="font-semibold md:text-xl">Certified Web Developer</h2>
          <p className="md:text-lg">Vanderbilt University Code Bootcamp</p>
          <p className="md:text-lg">May 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5 lg:pl-[32%]">
          <h2 className="font-semibold md:text-xl">
            Certified Agile Software Developer
          </h2>
          <p className="md:text-lg">LinkedIn</p>
          <p className="md:text-lg">June 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5 lg:pl-[32%]">
          <h2 className="font-semibold md:text-xl">
            Certified React Developer
          </h2>
          <p className="md:text-lg">Udemy</p>
          <p className="md:text-lg">July 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5 lg:pl-[32%]">
          <h2 className="font-semibold md:text-xl">SDLC Certified</h2>
          <p className="md:text-lg">LinkedIn</p>
          <p className="md:text-lg">July 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5 lg:pl-[32%]">
          <h2 className="font-semibold md:text-xl">
            Certified Strategic SEO Developer
          </h2>
          <p className="md:text-lg">SemRush</p>
          <p className="md:text-lg">December 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
