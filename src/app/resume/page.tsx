import type { Metadata } from "next";
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import ResumeComponent from "../components/Resume/ResumeComponent";

export const metadata: Metadata = {
  title: "Resume | William Lowrimore | Frontend Developer",
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
const Resume: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-resume-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto">
        <div className="w-screen min-h-screen bg-black/60 lg:pt-32 lg:pb-12">
          <div className="fixed z-10 left-3 top-2 text-zinc-300/90 rounded-full">
            <p className="md:hidden text-2xl">
              <Link href="/">
                <TiHome />
              </Link>
            </p>
          </div>
          <ResumeComponent />
        </div>
      </div>
    </>
  );
};

export default Resume;
