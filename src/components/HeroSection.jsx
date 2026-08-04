import { HiPlay } from "react-icons/hi2";
import Anchor from "./Anchor";

function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-500">
      <div className="flex flex-col items-center justify-center">
        <h1 className="animate-move-in-right font-poller text-base md:text-5xl lg:text-6xl">
          Hi,
          <span className="block text-red-500">I&apos;m Shatayu Deshpande</span>
        </h1>
        <div className="flex items-center justify-center p-1 md:p-2 lg:p-4">
          <HiPlay />
          <span className="animate-move-in-left font-roboto text-slate-200 text-xl">
            Front-end Engineer
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 md:mt-8 md:gap-8 lg:mt-10 lg:gap-10">
        <div className="flex animate-move-in-right rounded-full border-[0.5px] border-black bg-slate-100 p-2 md:p-2 gap-4 lg:p-4">
          <Anchor link="https://www.linkedin.com/in/shatayu-deshpande">
            <img
              className="h-full w-full"
              src="./linkedin_logo.svg"
              alt="LinkedIn"
            />
          </Anchor>
          <Anchor link="https://github.com/Shatayu25">
            <img
              className="h-full w-full"
              src="./github_logo.svg"
              alt="Github"
            />
          </Anchor>
          <Anchor link="https://leetcode.com/u/Shatayu_25/">
            <img
              className="h-full w-full"
              src="./leetcode.svg"
              alt="Leetcode"
            />
          </Anchor>
        </div>
        <a
          className="flex animate-move-in-left items-center rounded-full border-[0.5px] border-black bg-red-500 p-1 font-roboto text-black transition-all duration-[0.2s] hover:bg-red-600 md:gap-1 md:p-2 lg:gap-2 lg:p-4"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1m5h1uxWvLp-NEkX04kYuhqwxOpfqiAie/view?usp=drive_link"
        >
          <span className="h-5 w-5 lg:h-6 lg:w-6">
            <img
              className="h-full w-full"
              src="./download-logo.svg"
              alt="download"
            />
          </span>
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
