import { HiPlay } from "react-icons/hi2";
import Anchor from "./Anchor";

function HeroSection() {
  return (
    <section className="sm:bg-terminal-grid flex min-h-screen flex-col items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center justify-center">
        <h1 className="animate-move-in-right font-poller text-lg sm:text-4xl md:text-5xl lg:text-6xl">
          Hi,
          <span className="block text-emerald-500">
            I&apos;m Shatayu Deshpande
          </span>
        </h1>
        <div className="flex items-center justify-center p-1 md:p-2 lg:p-4">
          <HiPlay />
          <span className="animate-move-in-left font-roboto text-sm text-zinc-400 sm:text-lg md:text-xl">
            Front-end Engineer
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 sm:mt-4 sm:gap-4 md:mt-8 md:gap-8 lg:mt-10 lg:gap-10">
        <div className="flex animate-move-in-right gap-2 rounded-full border-[0.5px] border-emerald-800 bg-zinc-900 p-1 sm:gap-4 sm:p-2 md:gap-4 md:p-2 lg:gap-4 lg:p-4">
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
              src="./github-light.svg"
              alt="Github"
            />
          </Anchor>
          <Anchor link="https://leetcode.com/u/Shatayu_25/">
            <img
              className="h-full w-full"
              src="./leetcode-dark.svg"
              alt="Leetcode"
            />
          </Anchor>
        </div>
        <a
          className="flex animate-move-in-left items-center gap-1 rounded-full border-[0.5px] border-none bg-emerald-600 p-[4px] font-roboto text-zinc-950 transition-all duration-200 hover:bg-emerald-500 sm:gap-1 sm:p-[6px] md:gap-1 md:p-2 lg:gap-2 lg:p-4"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1m5h1uxWvLp-NEkX04kYuhqwxOpfqiAie/view?usp=drive_link"
        >
          <span className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6">
            <img
              className="h-full w-full"
              src="./download-logo.svg"
              alt="download"
            />
          </span>
          <p className="text-xs sm:text-base md:text-base lg:text-base">
            Resume
          </p>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
