function Anchor({ href, children }) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      className='w-5 h-5 hover:translate-y-[-1px] transition-all duration-[0.3s]'
      href={href}
    >
      {children}
    </a>
  );
}

export default Anchor;
