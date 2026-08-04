function Footer() {
  return (
    <footer className=' bg-slate-800 text-sm flex justify-between text-slate-100 p-8 border-t-[0.5px]'>
      <p>&copy; 2026, Shatayu Deshpande. All rights reserved.</p>
      <p className='flex items-center gap-1'>
        Made with
        <span className='w-5 h-5'>
          <img src='./react_logo.svg' alt='react-logo' />
        </span>
        and
        <span className='w-5 h-5'>
          <img src='./tailwind_logo.svg' alt='tailwind-logo' />
        </span>
      </p>
    </footer>
  );
}

export default Footer;
