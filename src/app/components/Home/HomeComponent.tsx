"use client";

import Avatar from "/public/images/will_avatar.webp";
import Link from "next/link";
import Image from "next/image";

import { HiChevronRight } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

import NavMobile from "../NavMobile/NavMobile";
import HomeHeaderComponent from "./HomeHeaderComponent";
import Testimonies from "./TestimonySnippets/Testimonies";

const HomeComponent: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-2 overflow-hidden">
      <div className="md:hidden fixed top-0 right-0 p-1 z-50">
        <NavMobile />
      </div>
      <HomeHeaderComponent />
      <div className="hidden md:flex fixed z-50 top-24 px-6">
        <Testimonies />
      </div>
      <Fade duration={6000} delay={2000} triggerOnce={true}>
        <div className="absolute bottom-[-0.5rem] right-[-2.5rem] md:bottom-[-2.8rem] md:right-[-6rem] lg:bottom-[-3.5rem] 2xl:bottom-[-4.5rem]">
          <Image
            src={Avatar}
            alt="William Lowrimore"
            width={1000}
            height={1000}
            className="opacity-90 w-[90%] md:w-[30rem]"
          />
        </div>
      </Fade>
      <div className="z-20 w-screen flex items-center justify-center mt-auto h-[3rem] hover:h-[4rem] transition-all duration-300">
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
