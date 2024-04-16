import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

type TestimonialsProps = {
  handleOpenTestimonials: () => void;
};

const Testimonials: React.FC<TestimonialsProps> = ({
  handleOpenTestimonials,
}) => {
  useBodyScrollLock();

  return (
    <div className="fixed inset-0 backdrop-blur-sm overflow-scroll">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 md:mt-16 2xl:mt-14 mx-4 xl:px-44 px-4 py-16 border-2 border-zinc-800 rounded-lg min-h-screen">
        <h1 className="text-3xl md:text-4xl md:pb-12 2xl:pt-12 text-indigo-800 font-semibold">
          Testimonials
        </h1>
        <p
          onClick={handleOpenTestimonials}
          className="text-2xl md:text-3xl font-bold text-red-500 fixed top-10 md:top-20 right-6 md:right-10 cursor-pointer hover:text-black"
        >
          X
        </p>
        <div className="2xl:w-full 2xl:flex 2xl:mt-12 2xl:px-[25%]">
          <div className="text-black w-full px-4 pt-5 2xl:pt-5">
            <h2 className="font-semibold md:text-xl">Tim Lowrimore</h2>
            <p className="text-red-700 md:text-lg">
              Principal Software Engineer at Heroku
            </p>
            <p className="md:text-lg">November 5, 2023</p>
            <p className="italic md:text-lg">Tim managed William directly</p>
            <article className="mt-3 md:text-lg 2xl:w-full">
              Will is a thoughtful and passionate developer. I&apos;ve known
              Will to work tirelessly to first grasp challenging concepts, and
              then go on to master them. His dedication to excellence has been a
              massive asset to my organization. He will, without doubt, be
              highly valuable to any organization he joins.
            </article>
          </div>
          <hr className="w-full bg-black mt-5 h-[0.07rem]" />
          <div className="text-black w-full px-4 pt-5">
            <h2 className="font-semibold md:text-xl">Courtez Cannady</h2>
            <p className="text-red-700 md:text-lg">
              Software Developer at ManTech
            </p>
            <p className="md:text-lg">June 3, 2022</p>
            <p className="md:text-lg italic">
              Courtez and William studied together at Vanderbilt
            </p>
            <article className="mt-2 md:text-lg 2xl:w-full">
              I worked with Will previosly on a project. Will showed great
              attention to detail and was constantly on top of the project and
              schedule. During the project, Will was not only ready but eager to
              help others where they fell short in their assignments on our web
              application.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
