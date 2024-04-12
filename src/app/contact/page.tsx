import type { Metadata } from "next";

import Link from "next/link";
import ContactForm from "../components/Contact/ContactForm";
import { TiHome } from "react-icons/ti";
import { HiChevronRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "William Lowrimore | Frontend Developer",
  description:
    "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
  keywords:
    "Software, Developer, Frontend, React, Javascript, Web Development, Nashville, TN, Next.JS, Engineer, Agile, Collaboration, Tailwind, Django, Python, HTML, CSS, Bootstrap, API, REST, SOAP, GraphQL, Postgres, PostgreSQL",
  openGraph: {
    title: "Contact | William Lowrimore | Frontend Developer",
    description:
      "William Lowrimore is a frontend developer from Nashville, TN.  A former instructor, performer, and composer of music, he moved to Nashville to persue his career in software engineering, graduating Vanderbilt University Code Bootcamp in the Spring of 2022 as a Certified Web Developer.  In the fall of 2022 he earned the role of Junior Software Engineer with the highly touted Software Engineering firm, Coroutine.  He now works as a freelance React/Next.JS Frontend Developer, and continues to study and further his knowledge of the latest technological advancements across the web development spectrum.",
    type: "website",
    url: "http://www.williamlowrimore.com", // Change to your actual URL
    images: [
      {
        url: "https://res.cloudinary.com/dxvvq6h1x/image/upload/v1712924384/will_avatar_ctz0rg.webp",
      },
      {
        url: "https://res.cloudinary.com/dxvvq6h1x/image/upload/v1712934327/site-sample_fyhmn8.webp",
      },
    ],
  },
};

const Contact: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-contact-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto">
      <div className="fixed left-3 top-2 text-zinc-300/90 rounded-full">
        <p className="md:hidden text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
        </p>
      </div>
      <section className="w-full">
        <ContactForm />
      </section>
      <div className="fixed bottom-0 w-screen flex items-center justify-center h-[3rem] hover:h-[4rem] transition-all duration-300 mb-[-0.2rem]">
        <Link
          href="/resume"
          className="w-full h-full flex items-center justify-between px-12 bg-[#304454] text-zinc-300 text-lg font-semibold rounded-t-3xl border-t border-zinc-500"
        >
          Get My Resume
          <div className="animate-slide-right-back">
            <HiChevronRight className="text-4xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
