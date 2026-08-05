function Footer() {
  return (
    <footer className="flex font-roboto flex-wrap items-center justify-between gap-1 border-t-[0.5px] bg-zinc-950 p-4 text-xs sm:text-sm md:text-sm lg:text-base">
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
    </footer>
  );
}

export default Footer;
