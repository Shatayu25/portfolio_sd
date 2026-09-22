import { useActiveSection } from "../contexts/ActiveSectionContext";

import { projectsData } from "./projectsData";

import ProjectInfo from "./ProjectInfo";

function ProjectSection() {
  const { workRef } = useActiveSection();
  return (
    <section ref={workRef} className="bg-zinc-900 py-20" id="work">
      <div className="mx-auto max-w-7xl px-8">
        <div className="my-6 md:my-8 flex flex-wrap font-dmserif text-4xl md:text-6xl">
          <h1 className="text-zinc-50">
            Pro<span className="text-emerald-500">jects </span>
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
