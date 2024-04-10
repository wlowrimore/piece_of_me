import React from "react";

const Snippet2A: React.FC = () => {
  return (
    <article className="flex flex-col w-4/5 bg-gradient-to-r from-gray-700 to-transparent px-3 ml-2 border-b border-l border-zinc-500 rounded-l-xl py-1">
      <p className="text-lg text-amber-400 tracking-wide">
        &quot;Will showed great attention to detail and was constantly on top of
        the project and schedule...&quot;
      </p>
      <em className="text-black bg-gradient-to-r from-transparent to-zinc-300/90 rounded-r-xl w-4/5 px-4 text-sm text-end">
        - C. Courtez, Software Developer, Mantech{" "}
      </em>
    </article>
  );
};

export default Snippet2A;
