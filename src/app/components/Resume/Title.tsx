const Title: React.FC = () => {
  return (
    <div className="py-4 md:pb-20">
      <div className="flex flex-col w-full gap-2 md:gap-4 2xl:mt-[-8rem]">
        <h1 className="text-2xl md:text-[2.5rem] text-center font-semibold tracking-wider text-zinc-200 uppercase">
          William Lowrimore
        </h1>
        <div className="mt-[-0.5rem] flex flex-col text-purple-200 md:text-2xl tracking-wider items-center">
          <p className="mb-[-0.4rem]">linkedin/william-lowrimore-dev</p>
          <p>wlowrimore@gmail.com</p>
          <div className="flex justify-center mt-[-0.3rem] gap-2">
            <p>901.568.7941</p>
            <p>Nashville,&nbsp;TN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
