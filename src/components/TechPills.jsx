function TechPills({ img, alt, children }) {
  return (
    <div className="flex w-fit cursor-pointer content-center items-center gap-2 whitespace-nowrap rounded-2xl border border-zinc-700 bg-zinc-800 p-[3px] text-xs text-zinc-300 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-zinc-950 sm:p-1 sm:text-lg">
      <span className="inline-block h-4 w-4">
        <img src={img} alt={alt} />
      </span>
      {children}
    </div>
  );
}

export default TechPills;
