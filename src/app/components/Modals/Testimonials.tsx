type TestimonialsProps = {
  handleOpenTestimonials: () => void;
};

const Testimonials: React.FC<TestimonialsProps> = ({
  handleOpenTestimonials,
}) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center bg-zinc-200 mt-8 mx-4 px-4 pt-8 pb-12 border-2 border-zinc-800 rounded-lg overflow-scroll h-screen">
        <h1 className="text-3xl text-indigo-800 font-semibold">Testimonials</h1>
        <p
          onClick={handleOpenTestimonials}
          className="text-2xl font-bold text-red-500 fixed top-10 right-6"
        >
          X
        </p>
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Tim Lowrimore</h2>
          <p className="text-red-700">Principal Software Engineer at Heroku</p>
          <p>November 5, 2023</p>
          <p className="italic">Tim managed William directly</p>
          <article className="mt-3">
            Will is a thoughtful and passionate developer. I&apos;ve known Will
            to work tirelessly to first grasp challenging concepts, and then go
            on to master them. His didcation to excellence has been a massive
            asset to my organization. He will, without doubt, be highly valuable
            to any organization he joins.
          </article>
        </div>
        <hr className="w-full bg-black mt-5 h-[0.07rem]" />
        <div className="text-black w-full px-4 pt-5">
          <h2 className="font-semibold">Courtez Cannady</h2>
          <p className="text-red-700">Software Developer at ManTech</p>
          <p>June 3, 2022</p>
          <p className="italic">
            Courtez and William studied together at Vanderbilt
          </p>
          <article className="mt-2">
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
