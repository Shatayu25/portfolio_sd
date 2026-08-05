import { HiArrowUpRight } from "react-icons/hi2";
import TechPills from "./TechPills";

function ProjectSection() {
  return (
    <section className="bg-slate-200 py-20" id="work">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="my-4 flex flex-wrap font-poller text-3xl sm:my-6 sm:text-4xl md:my-8 md:text-5xl lg:my-10 lg:text-6xl">
          <h1 className="text-red-500">
            Featured <span className="text-red-950">Projects</span>
          </h1>
          <span className="text-slate-400">&mdash;</span>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-slate-500 p-4 font-roboto sm:p-8 md:p-8 lg:p-8">
          <div className="flex flex-wrap justify-between font-roboto">
            <p className="cursor-pointer text-sm font-bold transition-all duration-300 hover:text-red-950 sm:text-lg md:text-xl lg:text-2xl">
              Wild Oasis&mdash; A hotel booking app
            </p>
            <a
              href="https://the-wild-oasis-sd.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-1 text-xs sm:text-base md:text-base lg:text-base rounded-2xl bg-slate-800/40 p-1 text-slate-50 hover:bg-slate-200 hover:text-slate-800"
            >
              <span>
                <HiArrowUpRight />
              </span>
              <p>Live Demo</p>
            </a>
          </div>
          <div className="lg:flex-no-wrap flex flex-wrap w-full items-start gap-4 sm:flex-wrap md:flex-nowrap">
            <div className="lg:w-[1/2]">
              <p className='text-sm sm:text-base md:text-base lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ad reprehenderit nulla eos facere quasi nesciunt
                suscipit eligendi veritatis saepe maiores beatae soluta,
                adipisci laborum quaerat placeat corporis sequi, ab amet.
                Laudantium repudiandae, itaque aliquid minima eius iure!
                Architecto, assumenda inventore? Totam officiis sed saepe iste
                accusantium consequuntur placeat veritatis!
              </p>
            </div>
            <div className="flex w-[1/2] overflow-hidden rounded-lg border-[1px]">
              <img
                src="./project_img.svg"
                className="h-auto w-full object-cover"
                alt="Wild Oasis App preview"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap sm:flex-wrap">
            <TechPills>
              <span className="inline-block h-4 w-4">
                <img src="./react_logo.svg" alt="react_logo" />
              </span>
              <p>React</p>
            </TechPills>
            <TechPills>
              <span className="inline-block h-4 w-4">
                <img src="./redux-logo.svg" alt="redux-logo" />
              </span>
              <p>Redux</p>
            </TechPills>
            <TechPills>
              <span className="inline-block h-4 w-4">
                <img src="./rq-logo.svg" alt="rq-logo" />
              </span>
              <p>React Query</p>
            </TechPills>
            <TechPills>
              <span className="inline-block h-4 w-4">
                <img src="./tailwind_logo.svg" alt="tailwind-logo" />
              </span>
              <p>Tailwind CSS</p>
            </TechPills>
            <TechPills>
              <span className="inline-block h-4 w-4">
                <img src="./supabase-logo.svg" alt="supabase-logo" />
              </span>
              <p>Supabase</p>
            </TechPills>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
