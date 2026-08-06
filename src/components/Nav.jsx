import { useActiveSection } from "../contexts/ActiveSectionContext";

function Nav() {
  const { activeSection } = useActiveSection();

  return (
    <ul className="hidden gap-2 font-roboto sm:flex sm:gap-6 md:gap-8 lg:gap-10">
      <li>
        <a
          className={
            activeSection === "about"
              ? "text-emerald-400 transition-all duration-200"
              : "transition-all duration-200 hover:text-emerald-400"
          }
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          className={
            activeSection === "work"
              ? "text-emerald-400 transition-all duration-200"
              : "transition-all duration-200 hover:text-emerald-400"
          }
          href="#work"
        >
          Work
        </a>
      </li>
      <li>
        <a
          className={
            activeSection === "connect"
              ? "text-emerald-400 transition-all duration-200"
              : "transition-all duration-200 hover:text-emerald-400"
          }
          href="#connect"
        >
          Connect
        </a>
      </li>
    </ul>
  );
}

export default Nav;
