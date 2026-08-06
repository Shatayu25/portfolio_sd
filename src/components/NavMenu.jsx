import { useActiveSection } from "../contexts/ActiveSectionContext";

function NavMenu({ onClick }) {
  const { activeSection } = useActiveSection();
  return (
    <div className="absolute right-[0.1px] top-6 flex cursor-pointer flex-col items-end gap-2 border border-emerald-400 px-6 py-5 font-roboto text-zinc-300 sm:hidden">
      <a
        onClick={onClick}
        href="#about"
        className={
          activeSection === "about"
            ? "text-emerald-400 transition-all duration-200"
            : "transition-all duration-200 hover:text-emerald-400"
        }
      >
        About
      </a>
      <a
        onClick={onClick}
        href="#work"
        className={
          activeSection === "work"
            ? "text-emerald-400 transition-all duration-200"
            : "transition-all duration-200 hover:text-emerald-400"
        }
      >
        Work
      </a>
      <a
        onClick={onClick}
        href="#connect"
        className={
          activeSection === "connect"
            ? "text-emerald-400 transition-all duration-200"
            : "transition-all duration-200 hover:text-emerald-400"
        }
      >
        Connect
      </a>
    </div>
  );
}

export default NavMenu;
