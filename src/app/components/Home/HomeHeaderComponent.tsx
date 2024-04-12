"use client";

import { Fade } from "react-awesome-reveal";

const HomeHeaderComponent: React.FC = () => {
  return (
    <>
      <Fade direction={"left"} delay={200} duration={1000} triggerOnce={true}>
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-full lg:px-24 lg:mt-[-1rem] xl:px-44 2xl:container 2xl:mx-auto 2xl:py-44 xl:py-24 lg:py-20 md:py-28">
          <article className="flex flex-col w-full px-6 mt-8 md:px-0 lg:ml-[-52%] 2xl:ml-0">
            <h1 className="text-slate-300 text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl font-semibold uppercase tracking-wider">
              William Lowrimore
            </h1>
            <div className="flex gap-2 text-purple-200/80 tracking-widest uppercase">
              <h2 className="text-xl md:text-3xl lg:text-2xl font-semibold">
                Frontend Developer
              </h2>
            </div>
          </article>
        </div>
      </Fade>
    </>
  );
};

export default HomeHeaderComponent;
