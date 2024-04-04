import Avatar from "/public/images/will_avatar.webp";
import ReactLogo from "/public/images/languages/react.webp";
import NextLogo from "/public/images/languages/next.webp";
import TSLogo from "/public/images/languages/typescript.webp";
import TWLogo from "/public/images/languages/tailwind.webp";

import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import NavMobile from "../NavMobile/NavMobile";
import HomeHeaderComponent from "./HomeHeaderComponent";
import Image from "next/image";

const HomeComponent: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-2 overflow-hidden">
      <div className="fixed top-0 right-0 p-1">
        <NavMobile />
      </div>
      <HomeHeaderComponent />
      <div className="absolute bottom-[-5rem] right-[-6rem]">
        <Image
          src={Avatar}
          alt="William Lowrimore"
          width={1000}
          height={1000}
          className="opacity-90"
        />
      </div>
      <div className="z-20 w-screen flex items-center justify-center mt-auto h-[3rem]">
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
    </div>
  );
};

export default HomeComponent;
