import Link from "next/link";
import "./nav-styles.css";

const NavMain: React.FC = () => {
  return (
    <nav className="hidden md:inline-flex fixed w-full top-0 z-50">
      <div className="flex bg-[#304454]/50 py-2 border-b border-zinc-200 text-white text-xl justify-around w-full mx-auto 2xl:justify-center 2xl:gap-[12rem]">
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
