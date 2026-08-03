import { HiOutlineArrowDownTray, HiPlay } from 'react-icons/hi2';
import Anchor from './Anchor';

function HeroSection() {
  return (
    <section className='bg-slate-500 min-h-screen flex flex-col justify-center items-center py-20'>
      <div className='p-24 flex flex-col items-center'>
        <h1 className='font-poller animate-move-in-right  text-5xl'>
          Hi,
          <span className='text-red-500 block'>I&apos;m Shatayu Deshpande</span>
        </h1>
        <div className='mt-5 text-lg flex items-center gap-1'>
          <HiPlay />
          <span className='font-roboto animate-move-in-left text-xl text-slate-200 italic font-medium'>
            Front-end Engineer
          </span>
        </div>
      </div>
      <div className='flex items-center gap-8 mt-16'>
        <div className='p-4 animate-move-in-right rounded-full flex gap-4 bg-slate-100 border-[0.5px] border-black'>
          <Anchor link='https://www.linkedin.com/in/shatayu-deshpande'>
            <img src='./linkedin_logo.svg' alt='LinkedIn' />
          </Anchor>
          <Anchor link='https://github.com/Shatayu25'>
            <img src='./github_logo.svg' alt='Github' />
          </Anchor>
          <Anchor link='https://leetcode.com/u/Shatayu_25/'>
            <img src='./leetcode.svg' alt='Leetcode' />
          </Anchor>
        </div>
        <a
          className='flex animate-move-in-left font-roboto rounded-full items-center gap-2 border-[0.5px] border-black bg-red-500 hover:bg-red-600 text-black p-3 transition-all duration-[0.2s]'
          target='_blank'
          rel='noreferrer'
          href='https://drive.google.com/file/d/1m5h1uxWvLp-NEkX04kYuhqwxOpfqiAie/view?usp=drive_link'
        >
          <HiOutlineArrowDownTray />
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
