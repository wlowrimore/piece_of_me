import Link from "next/link";
import Image from "next/image";
import EmailIcon from "/public/images/contact/email.webp";
import LinkedInIcon from "/public/images/contact/linkedin.webp";
import GitHubIcon from "/public/images/contact/github.webp";

const Title: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <h1 className="text-2xl text-center font-semibold tracking-wider text-zinc-200 uppercase">
        William Lowrimore
      </h1>
      <div className="flex text-slate-300 text-lg tracking-wider uppercase gap-2 mt-[-0.5rem]">
        <p>901.568.7941</p>
        <p>Nashville,&nbsp;TN</p>
      </div>
    </div>
  );
};

export default Title;
