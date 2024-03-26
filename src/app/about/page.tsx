import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

const About: React.FC = () => {
  return (
    <main className="bg-fixed w-screen min-h-screen bg-about-bg  bg-cover bg-center bg-norepeat flex flex-col mx-auto container">
      <div className="bg-zinc-800/70 w-full min-h-screen">
        <div className="flex flex-col w-full px-6 py-4 justify-center">
          <h1 className="py-3 text-2xl text-zinc-100 uppercase">Hey there!</h1>
          <p className="text-white text-lg mb-[0.88rem]">
            I'm William Lowrimore, a Frontend Developer from Nashville, TN. I
            have been studying and building web applications since graduating
            Vanderbilt University Code Bootcamp in the Spring of 2022.
          </p>
          <p className="text-white text-lg mb-[0.88rem]">
            While working as a Junior Software Engineer, I became very
            passionate about Frontend Development and all of its moving parts
            and neccessities. I develop mobile first, always keeping the users'
            experience at the forefront of each design, and I'm always excited
            to learn new things as I grow along with technological advancements.
          </p>
          <p className="text-white text-lg">
            As a life-long student, teacher, and performer of music, I have
            developed a rich and diverse skill set that flows seemlessly into my
            work as a Frontend Developer.
          </p>
        </div>
        <div className="w-screen flex items-center justify-center mt-auto h-[3rem]">
          <Link
            href="/projects"
            className="w-full h-full flex items-center justify-between px-16 bg-zinc-500/30 text-white text-lg font-semibold rounded-t-3xl"
          >
            View Some of My Work
            <div className="animate-slide-right-back">
              <HiChevronRight className="text-4xl" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
