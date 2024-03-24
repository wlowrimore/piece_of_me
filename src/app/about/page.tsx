import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

const About: React.FC = () => {
  return (
    <main className="bg-fixed w-screen min-h-screen bg-about-bg  bg-cover bg-center bg-norepeat flex flex-col mx-auto container">
      <div className="bg-zinc-800/70 w-full min-h-screen">
        <div className="flex flex-col w-full p-6 justify-center">
          <h1 className="py-3 text-2xl text-zinc-100 uppercase">Hey there!</h1>
          <p className="text-white">
            I'm William Lowrimore, a Frontend Developer from Nashville, TN. I
            have been studying and building web applications since graduating
            Vanderbilt University Code Bootcamp in the Spring of 2022.
            <br />
            <br />
            While working as a Junior Software Engineer, I became very
            passionate about Frontend Development and all of its moving parts
            and neccessities. I develop mobile first, always keeping the users'
            experience at the forefront of each design, and I'm always excited
            to learn new things as I grow along with technological advancements.
            <br />
            <br />
            As a life-long student, teacher, and performer of music, I have
            developed a rich and diverse skill set that flows seemlessly into my
            work as a Frontend Developer.
          </p>
          <Link href="/projects">
            <div className="flex items-center w-full text-zinc-100 justify-between py-1 px-8 mt-8 bg-zinc-400/30 rounded">
              <p className="text-white font-semibold tracking-wide">
                View Some of My Work
              </p>
              <HiChevronRight className="text-3xl" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
