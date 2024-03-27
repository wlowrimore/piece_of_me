import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { TiHome } from "react-icons/ti";

import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

const Contact: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-contact-bg bg-cover bg-center bg-norepeat flex flex-col items-center justify-center mx-auto container">
      <div className="fixed z-10 right-3 top-2 text-zinc-300/90 rounded-full">
        <p className="text-2xl">
          <Link href="/">
            <TiHome />
          </Link>
        </p>
      </div>
      <section className="w-full">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
