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
      <div className="absolute bottom-[-2rem] right-[-4rem]">
        <Image
          src={Avatar}
          alt="William Lowrimore"
          width={1000}
          height={1000}
          className="opacity-90"
        />
      </div>
      <div className="absolute z-50 left-[45%] top-[47%]">
        <Image
          src={ReactLogo}
          alt="React Logo"
          width={46}
          height={46}
          className="opacity-50"
        />
      </div>
      <div className="absolute z-50 left-[25%] bottom-[40%]">
        <Image
          src={NextLogo}
          alt="Next Logo"
          width={38}
          height={38}
          className="opacity-50"
        />
      </div>
      <div className="absolute z-50 left-[16%] bottom-[26%]">
        <Image
          src={TSLogo}
          alt="TypeScript Logo"
          width={32}
          height={32}
          className="opacity-50"
        />
      </div>
      <div className="absolute z-50 left-24 bottom-[12%]">
        <Image
          src={TWLogo}
          alt="Tailwind Logo"
          width={44}
          height={44}
          className="opacity-50"
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
