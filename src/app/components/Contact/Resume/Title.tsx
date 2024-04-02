import Link from "next/link";
import Image from "next/image";
import EmailIcon from "/public/images/contact/email.webp";
import LinkedInIcon from "/public/images/contact/linkedin.webp";
import GitHubIcon from "/public/images/contact/github.webp";

const Title: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <h1 className="text-3xl text-center font-semibold tracking-wider text-zinc-200 uppercase">
        William Lowrimore
      </h1>
      <article className="flex items-center gap-4 w-full">
        <Link
          href="mailto://wlowrimore@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-xl text-amber-200"
        >
          <Image
            src={EmailIcon}
            alt="email"
            width={44}
            height={44}
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
            width={44}
            height={44}
            className="rounded-full bg-black"
          />
        </Link>
        <Link
          href="https://www.github.com/wlowrimore"
          target="_blank"
          rel="noreferrer noopener"
          className="text-xl text-amber-200"
        >
          <Image
            src={GitHubIcon}
            alt="github"
            width={44}
            height={42}
            className="rounded-full border-2 border-[#35AACE] bg-[#35AACE]"
          />
        </Link>
        <div className="flex flex-col text-zinc-100 tracking-wider uppercase">
          <p>901.568.7941</p>
          <p>Nashville,&nbsp;TN</p>
        </div>
      </article>
    </div>
  );
};

export default Title;
