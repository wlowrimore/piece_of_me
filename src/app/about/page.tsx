import type { Metadata } from "next";

import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import NavMobile from "../components/NavMobile/NavMobile";
import AboutLinks from "../components/About/AboutLinks";

export const metadata: Metadata = {
  title: "About | William Lowrimore | Frontend Developer",
  description:
    "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
  keywords:
    "Software, Developer, Frontend, React, Javascript, Web Development, Nashville, TN, Next.JS, Engineer, Agile, Collaboration, Tailwind, Django, Python, HTML, CSS, Bootstrap, API, REST, SOAP, GraphQL, Postgres, PostgreSQL",
  openGraph: {
    title: "William Lowrimore | Frontend Developer",
    description:
      "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
    type: "website",
    url: "http://www.williamlowrimore.com", // Change to your actual URL
    images: [
      {
        url: "https://res.cloudinary.com/dxvvq6h1x/image/upload/v1712924384/will_avatar_ctz0rg.webp",
      },
    ],
  },
};

const About: React.FC = () => {
  return (
    <main className="bg-fixed w-screen min-h-screen bg-about-bg bg-cover bg-center bg-norepeat flex flex-col mx-auto">
      <div className="bg-zinc-800/70 w-full min-h-screen">
        <div className="fixed top-0 right-0 p-1">
          <NavMobile />
        </div>
        <div className="md:hidden fixed left-3 top-2 text-zinc-400/90 rounded-full">
          <p className="text-2xl">
            <Link href="/">
              <TiHome />
            </Link>
          </p>
        </div>
        <div className="flex flex-col w-full px-6 pt-16 md:pt-32 md:px-20 pb-10 lg:pb-6 2xl:container 2xl:mx-auto 2xl:py-44 justify-center">
          <h1 className="py-3 text-2xl md:text-3xl text-zinc-100 md:text-zinc-200 uppercase">
            Hey there!
          </h1>
          <p className="text-white md:text-zinc-200 text-lg md:text-2xl mb-[0.88rem]">
            I'm William Lowrimore, a Frontend Developer from Nashville, TN. I
            have been studying and building web applications since graduating
            Vanderbilt University Code Bootcamp in the Spring of 2022.
          </p>
          <p className="text-white text-lg md:text-2xl mb-[0.88rem]">
            While working as a Junior Software Engineer, I became very
            passionate about Frontend Development and all of its moving parts
            and neccessities. I develop mobile first, always keeping the users'
            experience at the forefront of each design, and I'm always excited
            to learn new things as I grow along with technological advancements.
          </p>
          <p className="text-white text-lg md:text-2xl">
            As a life-long student, teacher, and performer of music, I have
            developed a rich and diverse skill set that flows seemlessly into my
            work as a Frontend Developer.
          </p>
        </div>
        <AboutLinks />
        <div className="fixed bottom-0 w-screen flex items-center justify-center h-[3rem] hover:h-[4rem] transition-all duration-300 mb-[-0.2rem]">
          <Link
            href="/projects"
            className="w-full h-full flex items-center justify-between px-12 bg-red-950 text-zinc-300 text-lg font-semibold rounded-t-3xl border-t border-zinc-500"
          >
            View Some of My Work
            <div className="animate-slide-right-back">
              <HiChevronRight className="text-4xl" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
