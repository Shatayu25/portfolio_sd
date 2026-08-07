import { useActiveSection } from "../contexts/ActiveSectionContext";
import ProjectInfo from "./ProjectInfo";
import { projectsData } from "./projectsData";

function ProjectSection() {
  const { workRef } = useActiveSection();
  return (
    <section ref={workRef} className="bg-zinc-900 py-20" id="work">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="my-4 flex flex-wrap font-poller text-2xl sm:my-6 sm:text-4xl md:my-8 md:text-5xl lg:my-10 lg:text-6xl">
          <h1 className="text-zinc-50">
            Featured <span className="text-emerald-500">Projects</span>
          </h1>
          <span className="text-zinc-700">&mdash;</span>
        </div>
        {projectsData.map((data, index) => (
          <ProjectInfo data={data} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
