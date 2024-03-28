"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiLinksFill } from "react-icons/ri";

const NavMobile: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const handleNavOpen = (): void => {
    setNavOpen(true);
  };

  const handleNavClose = (): void => {
    setNavOpen(false);
  };

  const getNavStyles = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "bg-slate-700/90 text-zinc-200";
      case "/about":
        return "bg-[#450A0A]/80 text-zinc-200";
      case "/projects":
        return "text-green-900/80";
      case "/contact":
        return "text-pink-900/80";
      default:
    }
  };

  return (
    <main className="pr-1">
      <h1
        onClick={handleNavOpen}
        className="text-2xl flex justify-end text-zinc-950 fixed right-3 bg-zinc-200 rounded-full"
      >
        <RiLinksFill />
      </h1>
      {navOpen && (
        <nav
          className={`fixed right-0 top-0 text-lg font-semibold p-2 bg-zinc-200 rounded-bl-lg w-[8rem] ${getNavStyles(
            pathname
          )}`}
        >
          <h1
            onClick={handleNavClose}
            className="text-2xl flex justify-end mr-1 mt-[-0.2rem]"
          >
            <RiLinksFill />
          </h1>
          <Link href="/">
            <p className="py-1.5 pl-4">Home</p>
          </Link>
          <Link href="/about">
            <p className="py-1.5 pl-4">About</p>
          </Link>
          <Link href="/projects">
            <p className="py-1.5 pl-4">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="py-1.5 pl-4">Contact</p>
          </Link>
          <Link href="#">
            <p className="pt-[0.3rem] pb-2 pl-4">Resume</p>
          </Link>
        </nav>
      )}
    </main>
  );
};

export default NavMobile;
