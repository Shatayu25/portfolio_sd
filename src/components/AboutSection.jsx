import { HiCodeBracket } from "react-icons/hi2";

function AboutSection() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-8">
        <div className="flex flex-col text-8xl">
          <div className="flex gap-2">
            <span className="italic">I BUILD</span>
            <span className="bg-green-400 px-4 text-black">FRONT.</span>
          </div>
          <div className="flex gap-2">
            <span className="italic">I BUILD</span>
            <span className="bg-green-500 px-4 text-black">BACK</span>
          </div>
        </div>
        <div className="flex w-[400px] flex-col gap-4 font-cascadia">
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
          <div className="flex items-center gap-2 text-xl font-extrabold italic">
            <HiCodeBracket />
            <p>TECH-STACK &mdash;</p>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="grid grid-cols-2 border-t-2 border-dashed border-green-500 p-10 text-5xl">
              <div className="flex gap-6">
                <p>FRONTEND &mdash;</p>
              </div>
              <div className="grid grid-cols-6 gap-8">
                <span className="h-20 w-20">
                  <img src="./js-logo.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./react_logo.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./redux-logo.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./tailwind_logo.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./nextjs.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./reactquery.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-t-2 border-dashed border-green-500 p-10 text-5xl">
              <div className="flex gap-6">
                <p>BACKEND &mdash;</p>
              </div>
              <div className="grid grid-cols-5">
                <span className="h-20 w-20">
                  <img src="./nodejs-logo.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./mongodb-logo.svg" alt="" />
                </span>
                <span className="h-20 w-20 bg-white p-1">
                  <img src="./express-logo.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-dashed border-green-500 p-10 text-5xl">
              <div className="flex gap-6">
                <p>TESTING &mdash;</p>
              </div>
              <div className="grid grid-cols-5">
                <span className="h-20 w-20">
                  <img src="./jest.svg" alt="" />
                </span>
                <span className="h-20 w-20">
                  <img src="./vitest.svg" alt="" />
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
