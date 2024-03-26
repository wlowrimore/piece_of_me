import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center bg-[#304454] rounded-lg p-4">
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="firstName" className="text-zinc-200">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value=""
          placeholder="first name"
          className="p-1 rounded outline-none text-zinc-900"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="lastName" className="text-zinc-200">
          last Name
        </label>
        <input
          type="text"
          name="lastName"
          value=""
          placeholder="last name"
          className="p-1 rounded outline-none text-zinc-900"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="firstName" className="text-zinc-200">
          Email
        </label>
        <input
          type="email"
          name="email"
          value=""
          placeholder="email"
          className="p-1 rounded outline-none text-zinc-900"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="message" className="text-zinc-200">
          Message
        </label>
        <textarea
          name="message"
          value=""
          rows={5}
          className="p-1 rounded outline-none text-zinc-900"
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="w-full py-1 px-4 rounded bg-emerald-600 text-white"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
