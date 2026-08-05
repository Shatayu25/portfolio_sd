import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between border-b-[0.5px] bg-zinc-950 p-3">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
