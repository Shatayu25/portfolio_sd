function SubHeading({ children }) {
  return (
    <div className="flex items-center border-b-[1px] text-sm font-extrabold text-zinc-100 md:text-base lg:text-lg xl:gap-1">
      {children}
    </div>
  );
}

export default SubHeading;
