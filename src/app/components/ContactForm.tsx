import { GrMailOption } from "react-icons/gr";

const ContactForm: React.FC = () => {
  return (
    <form className="w-screen h-screen flex flex-col gap-6 items-center justify-center bg-gray-900/60 rounded-lg p-6 border border-white/30">
      <div className=" pt-2 pb-4 text-center">
        <h1 className="text-3xl text-white/70 tracking-wide font-semibold uppercase">
          Let&apos;s Create Something
        </h1>
      </div>
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          name="firstName"
          value=""
          placeholder="first name"
          className="p-1 rounded outline-none text-zinc-900 bg-transparent border-b border-white placeholder:text-white/70 placeholder:uppercase placeholder:text-sm focus:emerald-300"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          name="lastName"
          value=""
          placeholder="last name"
          className="p-1 rounded outline-none text-zinc-900 bg-transparent border-b border-white placeholder:text-white/70 placeholder:uppercase placeholder:text-sm"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <input
          type="email"
          name="email"
          value=""
          placeholder="email"
          className="p-1 rounded outline-none text-zinc-900 bg-transparent border-b border-white placeholder:text-white/70 placeholder:uppercase placeholder:text-sm"
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="message" className="text-white/70 uppercase">
          Message
        </label>
        <textarea
          name="message"
          value=""
          rows={5}
          className="p-1 rounded outline-none text-zinc-900 bg-white/50"
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="w-full flex justify-center items-center py-1 px-4 rounded bg-emerald-500/70 text-slate-800 text-2xl"
        >
          <GrMailOption />
          &nbsp;
          <span className="text-xl font-semibold">Send Email</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
