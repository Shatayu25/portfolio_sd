import { HiOutlineArrowDownTray, HiPlay } from 'react-icons/hi2';
import Anchor from './anchor';

function HeroSection() {
  return (
    <section className='bg-slate-500 h-screen flex flex-col items-center py-20'>
      <div className='p-24 flex flex-col items-center'>
        <h1 className='font-poller text-5xl'>
          Hi,
          <span className='text-red-500 block'>I&apos;m Shatayu Deshpande</span>
        </h1>
        <div className='mt-5 text-lg flex items-center gap-1'>
          <HiPlay />
          <span className='font-roboto text-xl text-slate-200 italic font-medium'>
            Front-end Engineer
          </span>
        </div>
      </div>
      <div className='flex items-center gap-8 mt-15'>
        <div className='p-4 rounded-full flex gap-4 bg-slate-100 border-[0.5px] border-black'>
          <Anchor href='https://www.linkedin.com/in/shatayu-deshpande'>
            <img src='./linkedin_logo.svg' alt='linkedin-logo' />
          </Anchor>
          <Anchor href='https://github.com/Shatayu25'>
            <img src='./github_logo.svg' alt='github-logo' />
          </Anchor>
          <Anchor href='https://leetcode.com/u/Shatayu_25/'>
            <img src='./leetcode.svg' alt='leetcode-logo' />
          </Anchor>
        </div>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://drive.google.com/file/d/1m5h1uxWvLp-NEkX04kYuhqwxOpfqiAie/view?usp=drive_link'
          className='flex rounded-full items-center gap-2 border-[0.5px] border-black bg-red-500 hover:bg-red-600 text-black p-3 transition-all duration-[0.2s]'
        >
          <HiOutlineArrowDownTray />
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
