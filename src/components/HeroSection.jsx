import { useActiveSection } from "../contexts/ActiveSectionContext";

import Anchor from "./Anchor";

function HeroSection() {
  const { homeRef } = useActiveSection();
  return (
    <section
      ref={homeRef}
      className="bg-terminal-grid flex min-h-screen flex-col items-center justify-center bg-zinc-950"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="animate-move-in-right font-dmserif text-2xl tracking-wider md:text-6xl lg:text-7xl xl:text-[80px]">
          Hi,
          <span className="block tracking-wider text-emerald-500">
            I&apos;m Shatayu Deshpande
          </span>
        </h1>
      </div>
      <div className="mt-8 flex items-center gap-6 md:mt-12 md:gap-10 xl:mt-16">
        <div className="flex animate-move-in-right gap-3 rounded-full border-[0.5px] border-emerald-800 bg-zinc-900 p-2.5 md:gap-4 md:p-4 xl:border-[1px]">
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
          <Anchor link="https://leetcode.com/u/Shatayu_2599/">
            <img
              className="h-full w-full"
              src="./leetcode-dark.svg"
              alt="Leetcode"
            />
          </Anchor>
        </div>
        <a
          className="flex animate-move-in-left items-center gap-2 rounded-full border-[0.5px] border-none bg-emerald-600 p-1.5 font-cascadia text-zinc-950 transition-all duration-200 hover:bg-emerald-500 md:p-4"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/18zQUgkAmq4NV-KhEM5lpIiG5F-XzUjF2/view?usp=drive_link"
        >
          <span className="h-5 w-5 md:h-6 md:w-6">
            <img
              className="h-full w-full"
              src="./download-logo.svg"
              alt="download"
            />
          </span>
          <p className="md:text-md p-[0.5px] text-sm xl:p-[1px] xl:text-xl">
            Resume
          </p>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
