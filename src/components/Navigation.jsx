function Navigation() {
  return (
    <nav>
      <ul className='flex font-roboto gap-8'>
        <li>
          <a
            className='hover:text-red-500 transition-all duration-200'
            href='#about'
          >
            About
          </a>
        </li>
        <li>
          <a
            className='hover:text-red-500 transition-all duration-200'
            href='#work'
          >
            Work
          </a>
        </li>
        <li>
          <a
            className='hover:text-red-500 transition-all duration-200'
            href='#connect'
          >
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
