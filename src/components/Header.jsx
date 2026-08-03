import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='bg-slate-800 fixed w-full flex justify-between p-4 items-center border-b-[0.5px] z-50'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;