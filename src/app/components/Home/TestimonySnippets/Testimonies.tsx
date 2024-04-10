"use client";

import { useState, useEffect } from "react";

import Snippet1A from "./Snippets/Snippet-1a";
import Snippet1B from "./Snippets/Snippet-1b";
import Snippet1C from "./Snippets/Snippet-1c";
import Snippet1D from "./Snippets/Snippet-1d";
import Snippet2A from "./Snippets/Snippet-2a";
import Snippet2B from "./Snippets/Snippet-2b";

const Testimonies: React.FC = () => {
  const [showSnippet, setShowSnippet] = useState({
    snippet1A: false,
    snippet1B: false,
    snippet1C: false,
    snippet1D: false,
    snippet2A: false,
    snippet2B: false,
  });

  // const randomInterval = () => Math.random() * 5000;

  useEffect(() => {
    const toggleSnippetVisibility = (snippetName: string) => {
      setShowSnippet((prev) => ({
        ...prev,
        [snippetName]: !prev[snippetName as keyof typeof prev],
      }));
    };

    const timeouts = Object.keys(showSnippet).map((snippetName) => {
      return setTimeout(() => {
        toggleSnippetVisibility(snippetName);
      }, 2000);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative h-full lg:w-full lg:ml-[-7%] flex flex-col pt-[25%] lg:pt-[10%] gap-8 lg:gap-3 overflow-hidden">
      <div
        className={`transition-opacity delay-[5000ms] duration-1000 ${
          showSnippet.snippet1B ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet1B />
      </div>

      <div
        className={`transition-opacity delay-[4000ms] duration-1000 ${
          showSnippet.snippet1A ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet1A />
      </div>

      <div
        className={`transition-opacity delay-[3000ms] duration-1000 ${
          showSnippet.snippet2B ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet2B />
      </div>

      <div
        className={`transition-opacity delay-[2000ms] duration-1000 ${
          showSnippet.snippet1D ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet1D />
      </div>
      <div
        className={`transition-opacity delay-[1000ms] duration-1000 ${
          showSnippet.snippet2A ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet2A />
      </div>

      <div
        className={`transition-opacity delay-0 duration-1000 ${
          showSnippet.snippet1C ? "opacity-100" : "opacity-0"
        }`}
      >
        <Snippet1C />
      </div>
    </div>
  );
};

export default Testimonies;
