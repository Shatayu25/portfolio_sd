import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed z-50 w-full border-b-[0.5px] bg-zinc-950 p-3">
      <div className="relative flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
