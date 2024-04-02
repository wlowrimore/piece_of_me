"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiLinksFill } from "react-icons/ri";

import styles from "./NavMobile.module.css";

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
        return "bg-slate-700/95 w-full h-[17rem] border-b border-zinc-400 pl-4 text-zinc-200 tracking-widest";
      case "/about":
        return "bg-[#450A0A]/90 w-full h-[17rem] border-b border-zinc-400 pl-4 text-zinc-200 tracking-widest";
      case "/projects":
        return "bg-slate-700/95 w-full h-[17rem] border-b border-zinc-400 pl-4 text-zinc-200 tracking-widest";
      case "/contact":
        return "bg-emerald-600/90 w-full h-[17rem] border-b border-zinc-400 pl-4 text-zinc-100 tracking-widest font-semibold";
      default:
    }
  };

  return (
    <main className="pr-1">
      <h1
        onClick={handleNavOpen}
        className="text-xl flex justify-end fixed right-3 bg-black/10 rounded-full text-zinc-100 p-1"
      >
        <RiLinksFill />
      </h1>

      <nav
        className={`${styles.nav} ${navOpen ? styles.show : ""} ${getNavStyles(
          pathname
        )}`}
      >
        <div className="fixed top-2.5 right-3.5">
          <h1
            onClick={handleNavClose}
            className="text-2xl text-zinc-200 flex justify-end mt-[-0.4rem] px-1"
          >
            X
          </h1>
        </div>
        <div className="py-8">
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
          <Link href="/resume">
            <p className="pt-[0.3rem] pb-2 pl-4">Resume</p>
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default NavMobile;
