import Image from "next/image";
import Avatar from "/public/images/will_avatar.webp";
import ReactLogo from "/public/images/languages/react.webp";
import NextLogo from "/public/images/languages/next.webp";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import NavMobile from "./NavMobile/NavMobile";

const HomeComponent = () => {
  return (
    <>
      <div className="fixed top-0 right-0 p-1">
        <NavMobile />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1 className="bg-[#304454] rounded-full py-4 text-2xl text-[#B89F88] font-semibold uppercase">
            Will
          </h1>
          <h1 className="text-2xl text-slate-900 font-semibold uppercase">
            iam lowrimore
          </h1>
        </div>
        <h2 className="text-[0.98rem] w-full text-end mt-[-7%] text-slate-900/70 font-semibold uppercase">
          &#123; Frontend_Developer &#125;
        </h2>
      </div>
      <div className="mt-6">
        <Image
          priority
          src={Avatar}
          alt="william-lowrimore-avatar"
          width={1000}
          height={1000}
          className="rounded-b-full"
        />
      </div>
      <section className="mt-8 text-lg font-semibold text-slate-900/80 flex flex-col items-center">
        <div className="flex">
          <p>React</p>&nbsp;|&nbsp;<p>Next.JS</p>
        </div>
        <div className="flex">
          <p>Typescript</p>&nbsp;|&nbsp; <p>Tailwind</p>
        </div>
      </section>

      <div className="w-screen flex items-center justify-center mt-auto h-[3rem]">
        <Link
          href="/about"
          className="w-full h-full flex items-center justify-between px-12 bg-[#304454] text-[#B89F88] text-xl font-semibold rounded-t-3xl"
        >
          Get To Know Me
          <div className="animate-slide-right-back">
            <HiChevronRight className="text-4xl" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeComponent;
