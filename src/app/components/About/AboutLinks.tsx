import Link from "next/link";
import Image from "next/image";

import EmailIcon from "/public/images/contact/email.webp";
import LinkedInIcon from "/public/images/contact/linkedin.webp";
import GitHubIcon from "/public/images/contact/github.webp";

const AboutLinks: React.FC = () => {
  return (
    <main className="w-full h-full flex items-center justify-center gap-12 lg:pb-20  xl:mt-[-1rem] 2xl:mt-[-5rem] overflow-y-scroll">
      <div>
        <Link href="mailto://wlowrimore@gmail.com">
          <Image
            src={EmailIcon}
            alt="email"
            width={80}
            height={80}
            className="px-1 py-1 rounded-full border-2 border-[#35AACE] bg-transparent opacity-70"
          />
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/william-lowrimore-dev">
          <Image
            src={LinkedInIcon}
            alt="linkedin"
            width={150}
            height={150}
            className="px-1 py-1 rounded-full bg-transparent opacity-70"
          />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/wlowrimore">
          <Image
            src={GitHubIcon}
            alt="github"
            width={85}
            height={85}
            className="px-1 py-1 rounded-full bg-transparent border border-[#35AACE] opacity-70"
          />
        </Link>
      </div>
    </main>
  );
};

export default AboutLinks;
