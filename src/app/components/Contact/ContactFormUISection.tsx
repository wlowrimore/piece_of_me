import { GrMailOption } from "react-icons/gr";

interface ContactFormUISectionProps {
  form: React.RefObject<HTMLFormElement>;
  formValues: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  };

  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  successMsg: string;
  errMsg: string;
  isLoading: boolean;
}

const ContactFormUISection: React.FC<ContactFormUISectionProps> = ({
  form,
  formValues,
  handleChange,
  handleSubmit,
  successMsg,
  errMsg,
  isLoading,
}) => {
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-screen min-h-screen flex flex-col gap-6 items-center justify-center bg-gray-900/80 rounded-lg px-6 md:px-24 lg:px-44 xl:px-64 2xl:px-[44rem] py-14 md:py-20 lg:pt-32 border border-white/30 md:space-y-10"
    >
      <div className="pb-10 2xl:pb-5 text-center">
        <h1 className="text-2xl md:text-3xl 2xl:text-5xl 2xl:pt-10 text-white/70 tracking-wide font-semibold uppercase">
          Let&apos;s Create Something
        </h1>
      </div>
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder="first name"
          className="p-1 rounded outline-none text-white bg-transparent border-b border-white placeholder:text-white/70 placeholder:uppercase placeholder:text-sm focus:emerald-300 tracking-wide"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder="last name"
          className="p-1 rounded outline-none text-white bg-transparent border-b border-white placeholder:text-white/70 placeholder:uppercase placeholder:text-sm"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="EMAIL"
          className="p-1 rounded outline-none text-white bg-transparent border-b border-white placeholder:text-white/70 placeholder:text-sm"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
          placeholder="subject"
          className="p-1 rounded outline-none text-white bg-transparent border-b border-white placeholder:text-white/70 placeholder:text-sm placeholder:uppercase"
          required
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="message" className="text-white/70 text-sm uppercase">
          Message
        </label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={5}
          className="p-1 rounded outline-none text-black font-semibold tracking-wider bg-white/80"
          required
        />
      </div>
      <div className="w-full">
        {successMsg && (
          <div className="text-white/70 bg-cyan-700 py-1 text-center text-lg font-semibold rounded-t-lg">
            {successMsg}
          </div>
        )}
        {errMsg && (
          <div className="text-red-500/70 bg-white py-1 text-center text-lg font-semibold rounded-t-lg">
            {errMsg}
          </div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center items-center py-1 md:py-3 px-4 rounded bg-emerald-500 text-slate-800 text-2xl outline-none hover:bg-emerald-500/80 transition duration-300"
          disabled={isLoading}
        >
          <GrMailOption />
          &nbsp;
          <span className="text-xl font-semibold">
            {isLoading ? "Sending..." : "Send Email"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactFormUISection;
