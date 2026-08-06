import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Nav from "./Nav";
import NavMenu from "./NavMenu";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  //event handler to toggle the NavMenu.
  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <nav>
      <HiBars3
        onClick={handleClick}
        className="h-6 w-6 cursor-pointer sm:hidden"
      />
      {isOpen ? <NavMenu onClick={handleClick} /> : ""}
      <Nav />
    </nav>
  );
}

export default Navigation;
