import { FaRegHandshake } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function ConnectSection() {
  return (
    <section className="bg-slate-300 py-20" id="connect">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col font-poller md:my-8 lg:my-10">
          <h1 className="text-red-500 md:text-5xl lg:text-6xl">
            Let&apos;s <span className="text-red-950">Connect!</span>
          </h1>
          <div className="flex items-center gap-2 font-roboto font-bold text-red-600 md:text-xl lg:text-2xl">
            <span>
              <FaRegHandshake />
            </span>
            <h2>And discuss potential opportunities.</h2>
          </div>
        </div>
        <div className="mx-auto mt-16 rounded-lg bg-slate-800/40 p-6 font-roboto md:w-[50%] lg:w-[40%]">
          <form className="flex flex-col gap-3 text-slate-800">
            <label htmlFor="name" className="font-bold">
              Name:-&nbsp;
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-2xl p-1"
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
              className="rounded-2xl p-1"
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
              className="rounded-2xl p-1"
              placeholder="Subject"
            />
            <label htmlFor="message" className="font-bold">
              Message:-&nbsp;
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="rounded-2xl p-1 pb-20"
              placeholder="Please enter your message"
            />
            <button className="mx-auto flex w-fit items-center gap-1 rounded-full border-[0.5px] border-black bg-red-500 p-3 text-black transition-all duration-[0.2s] hover:bg-red-600">
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
