import { HiArrowUpRight } from "react-icons/hi2";
import TechPills from "./TechPills";

function ProjectInfo({ data }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-[0.5px] border-zinc-950 bg-zinc-950 p-4 font-roboto sm:p-8 mb-8">
      <div className="flex flex-wrap justify-between font-roboto">
        <p className="cursor-pointer text-sm font-bold transition-all duration-300 hover:text-emerald-400 sm:text-lg md:text-xl lg:text-2xl">
          {data.title}
        </p>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="flex cursor-pointer items-center gap-1 rounded-2xl bg-emerald-600/20 p-1 text-xs text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 sm:text-base"
        >
          <span>
            <HiArrowUpRight />
          </span>
          <p>Live Demo</p>
        </a>
      </div>
      <div className="flex w-full flex-wrap items-start gap-4 md:flex-nowrap">
        <div className="lg:w-[1/2]">
          <p className="text-sm sm:text-base md:text-base lg:text-base">
            {data.description}
          </p>
        </div>
        <div className="flex w-[1/2] cursor-pointer overflow-hidden rounded-lg border-[1px]">
          <img
            src={data.projectImg}
            className="h-auto w-full object-cover"
            alt="Wild Oasis App preview"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 sm:flex-wrap">
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
