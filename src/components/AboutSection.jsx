import {
  HiAcademicCap,
  HiOutlineUser,
  HiOutlineCommandLine,
  HiOutlineRocketLaunch,
  HiOutlineMapPin,
  HiOutlineComputerDesktop,
  HiOutlineCircleStack,
} from "react-icons/hi2";
import SubHeading from "./SubHeading";
import TechPills from "./TechPills";

function AboutSection() {
  return (
    <section className="bg-slate-300 py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex font-poller md:my-8 md:text-5xl lg:my-10 lg:text-6xl">
          <h1 className="text-red-500">
            About <span className="text-red-950">Me</span>
          </h1>
          <span className="text-slate-400">&mdash;</span>
        </div>
        <div className="grid gap-4 font-roboto md:grid-cols-3 md:grid-rows-2">
          <div className="col-start-1 col-end-3 h-full w-full rounded-2xl bg-slate-500 p-4">
            <SubHeading>
              <span>
                <HiOutlineUser />
              </span>
              <p>Info</p>
            </SubHeading>
            <p className="md:text-base lg:text-lg">
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
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-slate-500 p-4">
            <div>
              <SubHeading>
                <span>
                  <HiAcademicCap />
                </span>
                <p>Experience</p>
              </SubHeading>
              <p className="md:text-base lg:text-lg">Fresher</p>
            </div>
            <div>
              <SubHeading>
                <span>
                  <HiOutlineMapPin />
                </span>
                <p className="md:text-base lg:text-lg">Location</p>
              </SubHeading>
              <p className="md:text-base lg:text-lg">Vapi, Gujarat</p>
            </div>
          </div>
          <div className="col-start-1 col-end-3">
            <div className="h-full w-full rounded-2xl bg-slate-500 p-4">
              <SubHeading>
                <span>
                  <HiOutlineCommandLine />
                </span>
                <p className="md:text-base lg:text-lg">Technical Skill-set</p>
              </SubHeading>
              <div className="mt-4 rounded-2xl p-1">
                <div className="flex items-center gap-1 p-1 text-slate-200 lg:text-base lg:font-extrabold">
                  <span>
                    <HiOutlineComputerDesktop />
                  </span>
                  <p>Frontend:-</p>
                </div>
                <div className="my-2 grid justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
                  <TechPills>
                    <span className="inline-block h-4 w-4">
                      <img src="./js-logo.svg" alt="js-logo" />
                    </span>
                    <p>JavaScript</p>
                  </TechPills>
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
                      <img src="./nextjs-logo.svg" alt="nextjs-logo" />
                    </span>
                    <p>Next.js</p>
                  </TechPills>
                </div>
              </div>
              <div className="mt-4 flex w-full gap-5 rounded-2xl p-1">
                <div className="lg:text-bold flex items-center gap-1 p-1 text-base font-extrabold text-slate-200">
                  <span>
                    <HiOutlineCircleStack />
                  </span>
                  <p>Database:-</p>
                </div>
                <TechPills>
                  <span className="inline-block h-4 w-4">
                    <img src="./supabase-logo.svg" alt="supabase-logo" />
                  </span>
                  <p>Supabase</p>
                </TechPills>
              </div>
            </div>
          </div>
          <div className="h-full w-full rounded-2xl bg-slate-500 p-4">
            <SubHeading>
              <span>
                <HiOutlineRocketLaunch />
              </span>
              <p>Currently Learning</p>
            </SubHeading>
            <div className="mt-4 flex flex-col gap-4 md:py-2 lg:py-4">
              <TechPills>
                <span className="inline-block h-4 w-4">
                  <img src="./nodejs-logo.svg" alt="nodejs-logo" />
                </span>
                <p>Node.js</p>
              </TechPills>
              <TechPills>
                <span className="inline-block h-4 w-4">
                  <img src="./express-logo.svg" alt="express-logo" />
                </span>
                <p>express.js</p>
              </TechPills>
              <TechPills>
                <span className="inline-block h-4 w-4">
                  <img src="./mongodb-logo.svg" alt="mongodb-logo" />
                </span>
                <p>MongoDB</p>
              </TechPills>
              <TechPills>
                <span className="inline-block h-4 w-4">
                  <img src="./books-logo.svg" alt="books-logo" />
                </span>
                <p>CS Fundamentals</p>
              </TechPills>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
