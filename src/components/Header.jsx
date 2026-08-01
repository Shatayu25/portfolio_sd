import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className='bg-slate-800 flex justify-between p-4 items-center border-b-[0.5px]'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;