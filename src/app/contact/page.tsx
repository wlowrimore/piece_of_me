import Link from "next/link";
import Image from "next/image";
import EmailIcon from "/public/images/contact/email.webp";
import LinkedInIcon from "/public/images/contact/linkedin.webp";
import GitHubIcon from "/public/images/contact/github.webp";
import ContactForm from "../components/Contact/ContactForm";
import { TiHome } from "react-icons/ti";
import { HiChevronRight } from "react-icons/hi";

const Contact: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-contact-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto">
      <div className="fixed left-3 top-2 text-zinc-300/90 rounded-full">
        <p className="md:hidden text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
          {/* <div className="fixed left-[32%] top-2 opacity-70 flex gap-4">
            <Link
              href="mailto://wlowrimore@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <Image
                src={EmailIcon}
                alt="email"
                width={32}
                height={32}
                className="px-1 py-1 rounded-full border-2 border-[#35AACE] bg-black"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/william-lowrimore-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xl"
            >
              <Image
                src={LinkedInIcon}
                alt="linkedin"
                width={32}
                height={32}
                className="rounded-full bg-black"
              />
            </Link>
            <Link
              href="https://www.github.com/wlowrimore"
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <Image
                src={GitHubIcon}
                alt="github"
                width={32}
                height={32}
                className="rounded-full border-2 border-[#35AACE] bg-[#35AACE]"
              />
            </Link>
          </div> */}
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
