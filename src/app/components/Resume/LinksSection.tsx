import { FaRegEye } from "react-icons/fa";

const LinksSection: React.FC = () => {
  return (
    <div className="w-full pt-10 text-white">
      <ul className="space-y-8 flex flex-col">
        <li className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between">
          <span>
            <FaRegEye />
          </span>
          Technical Skills
        </li>
        <li className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between">
          <span>
            <FaRegEye />
          </span>
          Experience
        </li>
        <li className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between">
          <span>
            <FaRegEye />
          </span>
          Education
        </li>
        <li className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between">
          <span>
            <FaRegEye />
          </span>
          Certifications
        </li>
        <li className="px-4 py-1 border-b border-zinc-400 flex items-center justify-between">
          <span>
            <FaRegEye />
          </span>
          Testimonials
        </li>
      </ul>
      <div className="w-full text-center mt-12 py-2 px-6 bg-blue-300 rounded-3xl">
        <p className="text-zinc-950 font-semibold">Download Printable Resume</p>
      </div>
    </div>
  );
};

export default LinksSection;
