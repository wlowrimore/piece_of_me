type CertificationsProps = {
  handleOpenCertifications: () => void;
};

const Certifications: React.FC<CertificationsProps> = ({
  handleOpenCertifications,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 py-8 border-2 border-zinc-800 rounded-lg">
        <h1 className="text-3xl text-indigo-800 font-semibold">
          Certifications
        </h1>
        <p
          onClick={handleOpenCertifications}
          className="text-2xl font-bold text-red-500 absolute top-2 right-2"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Certified Web Developer</h2>
          <p>Vanderbilt University Code Bootcamp</p>
          <p>May 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Certified Agile Software Developer</h2>
          <p>LinkedIn</p>
          <p>June 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Certified React Developer</h2>
          <p>Udemy</p>
          <p>July 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">SDLC Certified</h2>
          <p>LinkedIn</p>
          <p>July 2022</p>
        </div>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Certified Strategic SEO Developer</h2>
          <p>SemRush</p>
          <p>December 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
