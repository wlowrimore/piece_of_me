import Image from "next/image";
import Avatar from "/public/images/will_avatar.webp";
import ReactLogo from "/public/images/languages/react.webp";
import NextLogo from "/public/images/languages/next.webp";

const HomeComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1 className="bg-[#304454] rounded-full py-4 text-2xl text-[#B89F88] font-semibold my-6 uppercase">
            Will
          </h1>
          <h1 className="text-2xl text-slate-900 font-semibold uppercase">
            iam lowrimore
          </h1>
        </div>
        <h2 className="text-lg text-slate-900/70 font-semibold mt-[-1rem] uppercase">
          &#123; Frontend_Developer &#125;
        </h2>
      </div>
      <div className="mt-6">
        <Image
          priority
          src={Avatar}
          alt="william-lowrimore-avatar"
          width={1000}
          height={1000}
          className="rounded-b-full"
        />
      </div>
      <section className="mt-8 flex flex-col items-center">
        <ul className="flex flex-col font-semibold text-slate-800">
          <li className="flex text-lg items-center gap-1">
            <span>
              <Image
                src={ReactLogo}
                alt="react-logo"
                width={200}
                height={200}
                className="w-6 h-5 p-[0.07rem]"
              />
            </span>
            React Library
          </li>
          <li className="flex text-lg items-center gap-2">
            <span>
              <Image
                src={NextLogo}
                alt="next-logo"
                width={200}
                height={200}
                className="w-4 h-4 ml-1"
              />
            </span>
            Next.js Framework
          </li>
        </ul>
      </section>
      <div className="mt-8">
        <button className="py-3 px-[1.4rem] bg-[#304454] text-[#B89F88] text-4xl font-semibold rounded-xl">
          ?
        </button>
      </div>
    </>
  );
};

export default HomeComponent;
