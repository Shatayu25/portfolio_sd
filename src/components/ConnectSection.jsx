import { FaRegHandshake } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function ConnectSection() {
  return (
    <section className="bg-terminal-grid py-20" id="connect">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="my-4 flex flex-col font-poller sm:my-6 md:my-8 lg:my-10">
          <h1 className="text-2xl text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s <span className="text-emerald-500">Connect!</span>
          </h1>
          <div className="flex flex-wrap items-center gap-1 font-roboto text-base font-bold text-emerald-500 md:text-xl lg:text-2xl">
            <span>
              <FaRegHandshake />
            </span>
            <span>And discuss potential opportunities.</span>
          </div>
        </div>
        <div className="mx-auto mt-16 w-full max-w-md rounded-lg border-[0.5px] border-emerald-800 bg-zinc-900 p-6 font-roboto">
          <form className="flex flex-col gap-3 text-zinc-300">
            <label htmlFor="name" className="font-bold">
              Name:-&nbsp;
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-2xl border-[0.5px] border-zinc-700 bg-zinc-950 p-1 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Please enter your name"
              required
            />
            <label htmlFor="email" className="font-bold">
              Email:-&nbsp;
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-2xl border-[0.5px] border-zinc-700 bg-zinc-950 p-1 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Please enter your email"
              required
            />
            <label htmlFor="subject" className="font-bold">
              Subject:-&nbsp;
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="rounded-2xl border-[0.5px] border-zinc-700 bg-zinc-950 p-1 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Subject"
            />
            <label htmlFor="message" className="font-bold">
              Message:-&nbsp;
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="rounded-2xl border-[0.5px] border-zinc-700 bg-zinc-950 p-1 pb-20 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Please enter your message"
            />
            <button className="mx-auto flex w-fit items-center gap-1 rounded-full border-[0.5px] border-none bg-emerald-600 p-3 text-zinc-950 transition-all duration-[0.2s] hover:bg-emerald-500">
              <span>
                <IoIosSend />
              </span>
              <p>Send Message</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
