function Navigation() {
  return (
    <nav>
      <ul className='flex gap-5 cursor-pointer'>
        <li className='hover:text-red-500 transition-all duration-200'>About</li>
        <li className='hover:text-red-500 transition-all duration-200'>Work</li>
        <li className='hover:text-red-500 transition-all duration-200'>Connect  </li>
      </ul>
    </nav>
  );
}

export default Navigation;