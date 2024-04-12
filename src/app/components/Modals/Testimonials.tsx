import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type TestimonialsProps = {
  handleOpenTestimonials: () => void;
};

const Testimonials: React.FC<TestimonialsProps> = ({
  handleOpenTestimonials,
}) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 2xl:mt-14 mx-4 px-4 pt-64 pb-16 border-2 border-zinc-800 rounded-lg overflow-scroll h-screen">
        <h1 className="text-3xl md:text-4xl md:mt-[-27rem] md:pb-12 lg:pt-56 2xl:pt-72 text-indigo-800 font-semibold">
          Testimonials
        </h1>
        <p
          onClick={handleOpenTestimonials}
          className="text-2xl md:text-3xl font-bold text-red-500 fixed top-10 md:top-20 right-6 md:right-10 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5 2xl:pt-5 2xl:pl-[42%]">
          <h2 className="font-semibold md:text-xl">Tim Lowrimore</h2>
          <p className="text-red-700 md:text-lg">
            Principal Software Engineer at Heroku
          </p>
          <p className="md:text-lg">November 5, 2023</p>
          <p className="italic md:text-lg">Tim managed William directly</p>
          <article className="mt-3 md:text-lg 2xl:w-[30%]">
            Will is a thoughtful and passionate developer. I&apos;ve known Will
            to work tirelessly to first grasp challenging concepts, and then go
            on to master them. His dedication to excellence has been a massive
            asset to my organization. He will, without doubt, be highly valuable
            to any organization he joins.
          </article>
        </div>
        <hr className="w-full bg-black mt-5 h-[0.07rem]" />
        <div className="text-black w-full px-4 pt-5 2xl:pl-[42%]">
          <h2 className="font-semibold md:text-xl">Courtez Cannady</h2>
          <p className="text-red-700 md:text-lg">
            Software Developer at ManTech
          </p>
          <p className="md:text-lg">June 3, 2022</p>
          <p className="md:text-lg italic">
            Courtez and William studied together at Vanderbilt
          </p>
          <article className="mt-2 md:text-lg 2xl:w-[30%]">
            I worked with Will previosly on a project. Will showed great
            attention to detail and was constantly on top of the project and
            schedule. During the project, Will was not only ready but eager to
            help others where they fell short in their assignments on our web
            application.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
