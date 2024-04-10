import Link from "next/link";
import Image from "next/image";

import EmailIcon from "/public/images/contact/email.webp";
import LinkedInIcon from "/public/images/contact/linkedin.webp";
import GitHubIcon from "/public/images/contact/github.webp";

const HomeHeaderComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-full lg:px-24 lg:py-20 md:py-28">
        <article className="flex flex-col w-full px-6 mt-8 md:px-0">
          <h1 className="text-slate-300 text-4xl md:text-5xl lg:text-4xl font-semibold uppercase tracking-wider">
            William Lowrimore
          </h1>
          <div className="flex gap-2 text-purple-200/80 tracking-widest uppercase">
            <h2 className="text-xl md:text-3xl lg:text-2xl font-semibold">
              Frontend Developer
            </h2>
          </div>
        </article>
      </div>
    </>
  );
};

export default HomeHeaderComponent;
