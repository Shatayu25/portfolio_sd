function Navigation() {
  return (
    <nav>
      <ul className="flex gap-2 font-roboto sm:gap-6 md:gap-8 lg:gap-10">
        <li>
          <a
            className="transition-all duration-200 hover:text-emerald-400"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-emerald-400"
            href="#work"
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-emerald-400"
            href="#connect"
          >
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
