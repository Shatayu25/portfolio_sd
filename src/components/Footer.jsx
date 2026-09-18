function Footer() {
  return (
    <footer className="font-cascadia border-t-[0.5px] bg-zinc-950 p-4">
      <div className="md:px mx-auto max-w-7xl bg-zinc-950 px-4 py-20">
        <div className="flex flex-col">
          <div className="font-dmserif my-10 flex flex-col">
            <h1 className="text-2xl text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s <span className="text-emerald-500">Connect!</span>
            </h1>
            <div className="font-cascadia flex flex-wrap items-center gap-1 text-base font-bold text-emerald-500 md:text-xl lg:text-2xl">
              <span></span>
              <span>And discuss potential opportunities.</span>
            </div>
          </div>
          <div className="flex">
            <p>email</p>
            <p>email</p>
            <p>email</p>
          </div>
          <div className="flex justify-between mt-8">
            <p>&copy;2026,Shatayu Deshpande. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with
              <span className="h-4 w-4 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6">
                <img src="./react_logo.svg" alt="react-logo" />
              </span>
              and
              <span className="h-4 w-4 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6">
                <img src="./tailwind_logo.svg" alt="tailwind-logo" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
