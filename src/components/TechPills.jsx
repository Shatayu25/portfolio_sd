function TechPills({ img, alt, children }) {
  return (
    <div className="lg:text-md mt-3 flex w-fit cursor-pointer content-center items-center gap-2 whitespace-nowrap rounded-2xl border border-zinc-700 bg-zinc-800 p-1 text-[11px] text-zinc-300 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-zinc-950 md:mt-0 xl:text-lg">
      <span className="inline-block h-3 w-3 md:h-4 md:w-4">
        <img src={img} alt={alt} />
      </span>
      {children}
    </div>
  );
}

export default TechPills;
