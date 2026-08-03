import {
  HiAcademicCap,
  HiOutlineUser,
  HiOutlineCommandLine,
  HiOutlineRocketLaunch,
  HiOutlineMapPin,
  HiOutlineComputerDesktop,
  HiOutlineCircleStack,
} from 'react-icons/hi2';
import SubHeading from './SubHeading';
import TechPills from './TechPills';

function AboutSection() {
  return (
    <section className='bg-slate-300 py-20' id='about'>
      <div className='flex px-4 font-poller text-5xl mt-10'>
        <h1 className='text-red-500'>About Me</h1>
        <span className='text-red-950'>&mdash;</span>
      </div>
      <div className='grid font-roboto grid-cols-3 p-4 grid-rows-2 gap-4 mt-8'>
        <div className='col-start-1 col-end-3 bg-slate-500 w-full h-full p-6 rounded-2xl'>
          <SubHeading>
            <span>
              <HiOutlineUser />
            </span>
            <p>Info</p>
          </SubHeading>
          <p className='text-lg mt-2'>
            I&apos;m a frontend engineer focused on building smooth, responsive
            web applications using React and its ecosystem. I care about writing
            clean, maintainable code and making interfaces that users understand
            easily. Currently, I&apos;m adding backend skills with Node.js and
            Express, MongoDB to build complete full-stack apps and to understand
            how apps work end-to-end. Open for new opportunities and eager to
            gain practical exposure to real world problems.
          </p>
        </div>
        <div className=' flex flex-col justify-between bg-slate-500 w-full h-full p-6 rounded-2xl'>
          <div>
            <SubHeading>
              <span>
                <HiAcademicCap />
              </span>
              <p>Experience</p>
            </SubHeading>
            <p>Fresher</p>
          </div>
          <div>
            <SubHeading>
              <span>
                <HiOutlineMapPin />
              </span>
              <p>Location</p>
            </SubHeading>
            <p>Vapi, Gujarat</p>
          </div>
        </div>
        <div className='col-start-1 col-end-3'>
          <div className='bg-slate-500 w-full h-full p-6 rounded-2xl'>
            <SubHeading>
              <span>
                <HiOutlineCommandLine />
              </span>
              <p>Technical Skill-set</p>
            </SubHeading>
            <div className='p-1 rounded-2xl mt-4'>
              <div className='flex text-slate-200 items-center gap-1 p-1 text-base font-extrabold'>
                <span>
                  <HiOutlineComputerDesktop />
                </span>
                <p>Frontend:-</p>
              </div>
              <div className='grid grid-cols-3 grid-rows-2 gap-2 justify-items-center my-2'>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./js-logo.svg' alt='js-logo' />
                  </span>
                  <p>JavaScript</p>
                </TechPills>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./react_logo.svg' alt='react_logo' />
                  </span>
                  <p>React</p>
                </TechPills>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./redux-logo.svg' alt='redux-logo' />
                  </span>
                  <p>Redux</p>
                </TechPills>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./rq-logo.svg' alt='rq-logo' />
                  </span>
                  <p>React Query</p>
                </TechPills>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./tailwind_logo.svg' alt='tailwind-logo' />
                  </span>
                  <p>Tailwind CSS</p>
                </TechPills>
                <TechPills>
                  <span className='w-4 h-4 inline-block'>
                    <img src='./nextjs-logo.svg' alt='nextjs-logo' />
                  </span>
                  <p>Next.js</p>
                </TechPills>
              </div>
            </div>
            <div className=' p-1 rounded-2xl mt-4 w-full flex gap-5'>
              <div className='flex items-center text-slate-200 gap-1 p-1 text-base font-extrabold text-bold'>
                <span>
                  <HiOutlineCircleStack />
                </span>
                <p>Database:-</p>
              </div>
              <TechPills>
                <span className='w-4 h-4 inline-block'>
                  <img src='./supabase-logo.svg' alt='supabase-logo' />
                </span>
                <p>Supabase</p>
              </TechPills>
            </div>
          </div>
        </div>
        <div className='bg-slate-500 w-full h-full p-6 rounded-2xl'>
          <SubHeading>
            <span>
              <HiOutlineRocketLaunch />
            </span>
            <p>Currently Learning</p>
          </SubHeading>
          <div className='flex flex-col gap-4 py-4 mt-4'>
            <TechPills>
              <span className='w-4 h-4 inline-block'>
                <img src='./nodejs-logo.svg' alt='nodejs-logo' />
              </span>
              <p>Node.js</p>
            </TechPills>
            <TechPills>
              <span className='w-4 h-4 inline-block'>
                <img src='./express-logo.svg' alt='express-logo' />
              </span>
              <p>express.js</p>
            </TechPills>
            <TechPills>
              <span className='w-4 h-4 inline-block'>
                <img src='./mongodb-logo.svg' alt='mongodb-logo' />
              </span>
              <p>MongoDB</p>
            </TechPills>
            <TechPills>
              <span className='w-4 h-4 inline-block'>
                <img src='./books-logo.svg' alt='books-logo' />
              </span>
              <p>CS Fundamentals</p>
            </TechPills>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
