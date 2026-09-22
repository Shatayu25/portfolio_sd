import { HiCodeBracket } from "react-icons/hi2";
import { useActiveSection } from "../contexts/ActiveSectionContext";

function AboutSection() {
  const { aboutRef } = useActiveSection();
  return (
    <section ref={aboutRef} className="bg-zinc-950 py-20" id="about">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-7 md:px-8">
        <div className="flex flex-col text-[34px] md:text-7xl lg:text-8xl">
          <div className="flex gap-2">
            <span className="italic">I BUILD</span>
            <span className="bg-green-400 px-4 text-black">FRONT.</span>
          </div>
          <div className="flex gap-2">
            <span className="italic">I BUILD</span>
            <span className="bg-green-500 px-4 text-black">BACK</span>
          </div>
        </div>
        <div className="flex w-[200px] flex-col gap-4 font-cascadia text-[12px] md:w-[300px] lg:w-[400px] lg:text-[16px] xl:w-[500px] xl:text-lg">
          <p>
            &rarr; A{" "}
            <span className="rounded-lg bg-green-400 p-[2px] font-bold italic text-black">
              Full-stack developer
            </span>{" "}
            focused on building complete, responsive web applications. I care
            about writing clean code, designing interfaces that make sense, and
            building reliable backends with Node.js and MongoDB.
          </p>
          <p>
            &rarr; I enjoy understanding how applications work end-to-end, from
            the database to the browser, and I&apos;m always eager to tackle
            real-world problems
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm font-extrabold italic md:text-xl">
            <HiCodeBracket />
            <p className="text-[12px] md:text-base lg:text-xl xl:text-2xl">
              TECH-STACK &mdash;
            </p>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-2 border-t border-dashed border-green-500 p-3 text-[19px] md:p-4 md:text-[35px] lg:border-t-2 lg:text-[40px] xl:p-8 xl:text-5xl">
              <div>
                <p>FRONTEND &mdash;</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./js-logo.svg" alt="JavaScript-logo" />
                </span>
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./react_logo.svg" alt="React-logo" />
                </span>
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./redux-logo.svg" alt="Redux-logo" />
                </span>
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./tailwind_logo.svg" alt="Tailwind CSS logo" />
                </span>
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./nextjs.svg" alt="Next.js-logo" />
                </span>
                <span className="h-7 w-7 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <img src="./reactquery.svg" alt="React-Query.logo" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-t border-dashed border-green-500 p-3 text-[20px] md:p-4 md:text-[35px] lg:border-b-2 lg:border-t-2 lg:p-5 lg:text-[40px] xl:p-8 xl:text-5xl">
              <div>
                <p>BACKEND &mdash;</p>
              </div>
              <div className="flex items-center gap-2 md:gap-6">
                <span className="h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20">
                  <img src="./nodejs-logo.svg" alt="node.js-logo" />
                </span>
                <span className="h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20">
                  <img src="./mongodb-logo.svg" alt="mongodb-logo" />
                </span>
                <span className="h-fit w-8 bg-white p-[0.5px] md:w-14 md:p-1.5 lg:h-20 lg:w-20">
                  <img src="./express-logo.svg" alt="express.js-logo" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-dashed border-green-500 p-3 text-[20px] md:p-4 md:text-[35px] lg:border-b-2 lg:p-5 lg:text-[40px] xl:p-8 xl:text-5xl">
              <div>
                <p>TESTING &mdash;</p>
              </div>
              <div className="flex gap-4 md:gap-7">
                <span className="h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20">
                  <img src="./jest.svg" alt="jest-logo" />
                </span>
                <span className="h-8 w-8 md:h-14 md:w-14 lg:h-20 lg:w-20">
                  <img src="./vitest.svg" alt="vitest-logo" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
