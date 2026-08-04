function Navigation() {
  return (
    <nav>
      <ul className="flex gap-2 font-roboto md:gap-8 lg:gap-10">
        <li>
          <a
            className="transition-all duration-200 hover:text-red-500"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-red-500"
            href="#work"
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-200 hover:text-red-500"
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
