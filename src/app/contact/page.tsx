import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-cyan-100/70 flex flex-col items-center justify-center p-4 mx-auto container">
      <h1 className="text-2xl text-zinc-900 font-semibold mb-4">
        Let&apos;s Work Together
      </h1>
      <section className="w-full">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
