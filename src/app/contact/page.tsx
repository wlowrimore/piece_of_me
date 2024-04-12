import Link from "next/link";
import ContactForm from "../components/Contact/ContactForm";
import { TiHome } from "react-icons/ti";
import { HiChevronRight } from "react-icons/hi";

const Contact: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-contact-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto">
      <div className="fixed left-3 top-2 text-zinc-300/90 rounded-full">
        <p className="md:hidden text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
        </p>
      </div>
      <section className="w-full">
        <ContactForm />
      </section>
      <div className="fixed bottom-0 w-screen flex items-center justify-center h-[3rem] hover:h-[4rem] transition-all duration-300 mb-[-0.2rem]">
        <Link
          href="/resume"
          className="w-full h-full flex items-center justify-between px-12 bg-[#304454] text-zinc-300 text-lg font-semibold rounded-t-3xl border-t border-zinc-500"
        >
          Get My Resume
          <div className="animate-slide-right-back">
            <HiChevronRight className="text-4xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
