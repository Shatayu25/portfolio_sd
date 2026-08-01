import { FaRegHandshake } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

function ConnectSection() {
  return (
    <section className='bg-slate-950 py-20'>
      <div className='flex flex-col px-4 font-poller'>
        <h1 className='text-red-500 text-5xl'>Let&apos;s Connect!</h1>
        <div className='flex items-center gap-2 text-xl'>
          <span className='text-red-500'>
            <FaRegHandshake />
          </span>
          <h2 className='text-red-400 font-roboto font-bold'>
            And discuss potential opportunities.
          </h2>
        </div>
      </div>
      <div className='bg-slate-400 font-roboto p-10 mt-4 w-[30%] mx-auto rounded-2xl'>
        <form className='text-slate-800 flex flex-col gap-3'>
          <label htmlFor='name' className='font-bold'>
            Name:-&nbsp;
          </label>
          <input
            type='text'
            id='name'
            className='rounded-2xl p-1'
            placeholder='Please enter your name'
            required
          />
          <label htmlFor='email' className='font-bold'>
            Email:-&nbsp;
          </label>
          <input
            type='email'
            id='email'
            className='rounded-2xl p-1'
            placeholder='Please enter your email'
            required
          />
          <label htmlFor='subject' className='font-bold'>
            Subject:-&nbsp;
          </label>
          <input
            type='text'
            id='subject'
            className='rounded-2xl p-1'
            placeholder='Subject'
          />
          <label htmlFor='message' className='font-bold'>
            Message:-&nbsp;
          </label>
          <input
            type='text'
            id='message'
            className='rounded-2xl p-1 pb-20'
            placeholder='Please enter your message'
          />
            <button className='rounded-full flex w-fit items-center gap-1 border-[0.5px] border-black bg-red-500 hover:bg-red-600 text-black p-3 transition-all duration-[0.2s]'>
              <span>
                <IoIosSend />
              </span>
              <p>Send Message</p>
            </button>
        </form>
      </div>
    </section>
  );
}

export default ConnectSection;
