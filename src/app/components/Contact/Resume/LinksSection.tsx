const LinksSection: React.FC = () => {
  return (
    <div className="w-full py-2 text-white">
      <ul className="space-y-3">
        <li className="px-4 py-1 bg-amber-700/30 border border-zinc-400 rounded-3xl">
          Technical Skills
        </li>
        <li className="px-4 py-1 bg-amber-700/30 border border-zinc-400 rounded-3xl">
          Professional Experience
        </li>
        <li className="px-4 py-1 bg-amber-700/30 border border-zinc-400 rounded-3xl">
          Education
        </li>
        <li className="px-4 py-1 bg-amber-700/30 border border-zinc-400 rounded-3xl">
          All Certifications
        </li>
        <li className="px-4 py-1 bg-amber-700/30 border border-zinc-400 rounded-3xl">
          Testimonials
        </li>
      </ul>
    </div>
  );
};

export default LinksSection;
