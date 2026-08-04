import { HiArrowUpRight } from 'react-icons/hi2';
import TechPills from './TechPills';

function ProjectSection() {
  return (
    <section className='bg-slate-200 py-20' id='work'>
      <div className='flex px-4 font-poller text-5xl mt-10'>
        <h1 className='text-red-500'>Featured Projects</h1>
        <span className='text-red-950'>&mdash;</span>
      </div>
      <div className='flex flex-col font-roboto bg-slate-500 rounded-2xl p-10 m-4 gap-4 mt-12'>
        <div className='flex justify-between font-roboto'>
          <p className='font-bold text-xl hover:text-red-500 transition-all duration-300'>
            Wild Oasis&mdash; A hotel booking app
          </p>
          <a
            href='https://the-wild-oasis-sd.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-1 bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 p-1 cursor-pointer'
          >
            <span>
              <HiArrowUpRight />
            </span>
            <p>Live Demo</p>
          </a>
        </div>
        <div className='flex w-full gap-4'>
          <div className='w-[50%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad reprehenderit nulla eos facere quasi nesciunt suscipit eligendi veritatis saepe maiores beatae soluta, adipisci laborum quaerat placeat corporis sequi, ab amet. Laudantium repudiandae, itaque aliquid minima eius iure! Architecto, assumenda inventore? Totam officiis sed saepe iste accusantium consequuntur placeat veritatis!</p>
          </div>
          <span className='border-[1px] w-[50%] rounded-lg overflow-hidden'>
            <img src='./project_img.svg' className='w-full h-auto object-cover' alt='Wild Oasis App preview' />
          </span>
        </div>
        <div className='flex gap-4'>
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
              <img src='./supabase-logo.svg' alt='supabase-logo' />
            </span>
            <p>Supabase</p>
          </TechPills>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
