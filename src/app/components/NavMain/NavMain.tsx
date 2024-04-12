"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import "./nav-styles.css";

const NavMain: React.FC = () => {
  const [color, setColor] = useState<boolean>(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className="hidden md:inline-flex fixed w-full top-0 z-50">
      <div
        className={
          color
            ? "nav-bg bg-[#304454] 2xl:justify-center 2xl:gap-[10rem]"
            : "nav-bg bg-[#304454]/50 2xl:justify-center 2xl:gap-[10rem]"
        }
      >
        <Link href="/">
          <p className="py-1.5 pl-4 btmbrdr">Home</p>
        </Link>
        <Link href="/about">
          <p className="py-1.5 pl-4 btmbrdr">About</p>
        </Link>
        <Link href="/projects">
          <p className="py-1.5 pl-4 btmbrdr">Projects</p>
        </Link>
        <Link href="/contact">
          <p className="py-1.5 pl-4 btmbrdr">Contact</p>
        </Link>
        <Link href="/resume">
          <p className="pt-[0.3rem] pb-2 pl-4 btmbrdr">Resume</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavMain;
