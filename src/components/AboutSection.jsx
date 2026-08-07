import {
  HiAcademicCap,
  HiOutlineCircleStack,
  HiOutlineCommandLine,
  HiOutlineComputerDesktop,
  HiOutlineMapPin,
  HiOutlineRocketLaunch,
  HiOutlineUser,
} from "react-icons/hi2";

import { useActiveSection } from "../contexts/ActiveSectionContext";

import { techPillsDataFront } from "./techPillsDataFront";
import { techPillsDataDB } from "./techPillsDataDB";
import { techPillsDataCL } from "./techPillsDataCL";

import SubHeading from "./SubHeading";
import TechPills from "./TechPills";

function AboutSection() {
  const { aboutRef } = useActiveSection();

  return (
    <section ref={aboutRef} className="bg-zinc-950 py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="my-4 flex font-poller text-2xl sm:my-6 sm:text-4xl md:my-8 md:text-5xl lg:my-10 lg:text-6xl">
          <h1 className="text-zinc-50">
            About <span className="text-emerald-500">Me</span>
          </h1>
          <span className="text-zinc-700">&mdash;</span>
        </div>

        <div className="grid gap-4 font-roboto md:grid-cols-3">
          <div className="h-full w-full rounded-2xl border-[0.5px] border-zinc-800 bg-zinc-900 p-4 md:col-start-1 md:col-end-3">
            <SubHeading>
              <span>
                <HiOutlineUser />
              </span>
              <p>Info</p>
            </SubHeading>
            <p className="text-sm md:text-base lg:text-lg">
              I&apos;m a frontend engineer focused on building smooth,
              responsive web applications using React and its ecosystem. I care
              about writing clean, maintainable code and making interfaces that
              users understand easily. Currently, I&apos;m adding backend skills
              with Node.js and Express, MongoDB to build complete full-stack
              apps and to understand how apps work end-to-end. Open for new
              opportunities and eager to gain practical exposure to real world
              problems.
            </p>
          </div>

          <div className="flex h-full w-full flex-col justify-between rounded-2xl border-[0.5px] border-zinc-800 bg-zinc-900 p-4">
            <div>
              <SubHeading>
                <span>
                  <HiAcademicCap />
                </span>
                <p>Experience</p>
              </SubHeading>
              <p className="text-sm md:text-base lg:text-lg">Fresher</p>
            </div>
            <div>
              <SubHeading>
                <span>
                  <HiOutlineMapPin />
                </span>
                <p className="text-sm md:text-base lg:text-lg">Location</p>
              </SubHeading>
              <p className="text-sm md:text-base lg:text-lg">Vapi, Gujarat</p>
            </div>
          </div>

          <div className="md:col-start-1 md:col-end-3">
            <div className="h-full w-full rounded-2xl border-[0.5px] border-zinc-800 bg-zinc-900 p-4">
              <SubHeading>
                <span>
                  <HiOutlineCommandLine />
                </span>
                <p>Technical Skill-set</p>
              </SubHeading>
              <div className="mt-1 rounded-2xl p-1 sm:mt-4 md:mt-4 lg:mt-4">
                <div className="flex items-center gap-1 p-1 text-slate-200 lg:text-base lg:font-extrabold">
                  <span>
                    <HiOutlineComputerDesktop />
                  </span>
                  <p className="">Frontend:-</p>
                </div>
                <div className="my-2 flex flex-wrap justify-items-center gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
                  {techPillsDataFront.map(({ img, alt, name }) => (
                    <TechPills img={img} key={alt} alt={alt}>
                      {name}
                    </TechPills>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex w-full gap-5 rounded-2xl p-1">
                <div className="lg:text-bold flex items-center gap-1 p-1 text-base font-extrabold text-slate-200">
                  <span>
                    <HiOutlineCircleStack />
                  </span>
                  <p>Database:-</p>
                </div>
                {techPillsDataDB.map(({ img, alt, name }) => (
                  <TechPills img={img} key={alt} alt={alt}>
                    {name}
                  </TechPills>
                ))}
              </div>
            </div>
          </div>

          <div className="h-full w-full rounded-2xl border-[0.5px] border-zinc-800 bg-zinc-900 p-4">
            <SubHeading>
              <span>
                <HiOutlineRocketLaunch />
              </span>
              <p>Currently Learning</p>
            </SubHeading>
            <div className="mt-4 flex flex-wrap gap-4 md:flex-col md:py-2 lg:flex-col lg:py-4">
              {techPillsDataCL.map(({ img, alt, name }) => (
                <TechPills img={img} key={alt} alt={alt}>
                  {name}
                </TechPills>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
