import { HiArrowUpRight } from 'react-icons/hi2';

function ProjectSection() {
  return (
    <section className='bg-slate-200 py-20'>
      <div className='flex px-4 font-poller text-5xl'>
        <h1 className='text-red-500'>Featured Projects</h1>
        <span className='text-red-950'>&mdash;</span>
      </div>
      <div className='flex flex-col font-robot bg-slate-500 rounded-2xl p-10 m-4 gap-4 mt-12'>
        <div className='flex justify-between font-roboto'>
          <p className='font-bold'>Wild Oasis-- A hotel booking app</p>
          <div className='flex items-center gap-1 bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 p-1 cursor-pointer'>
            <span>
              <HiArrowUpRight />
            </span>
            <p>Live Demo</p>
          </div>
        </div>
        <div className='w-[40%] border-2'>
          <img src='./project_img.svg' alt='project_img' />
        </div>
        <div className='flex gap-4'>
          <div className='flex items-center gap-2 p-[3px] px-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
            <span className='w-4 h-4 inline-block'>
              <img src='./react_logo.svg' alt='react_logo' />
            </span>
            <p>React</p>
          </div>
          <div className='flex items-center gap-2 p-[3px] px-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
            <span className='w-4 h-4 inline-block'>
              <img src='./redux-logo.svg' alt='redux-logo' />
            </span>
            <p>Redux</p>
          </div>
          <div className='flex items-center gap-2 p-[3px] px-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
            <span className='w-4 h-4 inline-block'>
              <img src='./rq-logo.svg' alt='rq-logo' />
            </span>
            <p>React Query</p>
          </div>
          <div className='flex items-center gap-2 p-[3px] px-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
            <span className='w-4 h-4 inline-block'>
              <img src='./tailwind_logo.svg' alt='tailwind-logo' />
            </span>
            <p>Tailwind CSS</p>
          </div>
          <div className='flex items-center gap-2 p-[3px] px-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
            <span className='w-4 h-4 inline-block'>
              <img src='./supabase-logo.svg' alt='supabase-logo' />
            </span>
            <p>Supabase</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
