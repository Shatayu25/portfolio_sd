import { HiArrowUpRight } from "react-icons/hi2";
import TechPills from "./TechPills";

function ProjectInfo({ data }) {
  return (
    <div className="mb-8 flex flex-col gap-1 rounded-2xl border-[0.5px] border-zinc-950 bg-zinc-950 p-4 font-cascadia md:gap-4 md:p-8">
      <div className="flex flex-wrap justify-between font-cascadia">
        <p className="cursor-pointer text-xl font-bold italic transition-all duration-300 hover:text-emerald-400 md:text-2xl lg:text-3xl xl:text-4xl">
          {data.title}
        </p>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex cursor-pointer items-center gap-1 rounded-2xl bg-emerald-600/20 p-1 text-base text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 md:mt-0"
        >
          <span className="text-xs md:text-base">
            <HiArrowUpRight />
          </span>
          <p className="text-[12px] md:text-[14px] lg:text-[16px]">Live Demo</p>
        </a>
      </div>
      <div className="flex w-full flex-wrap items-start gap-2 md:flex-nowrap md:gap-6">
        <div className="lg:w-[1/2]">
          <p className="mt-4 text-[12px] md:text-[13px] lg:text-[14px] xl:text-lg">
            &rarr; {data.description}
          </p>
        </div>
        <div className="mt-1 flex w-[1/2] cursor-pointer overflow-hidden rounded-lg border-[1px] md:mt-4">
          <img
            src={data.projectImg}
            className="h-auto w-full object-cover"
            alt="Wild Oasis App preview"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[8px] sm:flex-wrap md:gap-4">
        {data.techStack.map(({ img, alt, name }) => (
          <TechPills img={img} key={alt} alt={alt}>
            <p>{name}</p>
          </TechPills>
        ))}
      </div>
    </div>
  );
}

export default ProjectInfo;
