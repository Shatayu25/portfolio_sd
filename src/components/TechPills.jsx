import PropTypes from "prop-types";

function TechPills({ children }) {
  return (
    <div className="flex w-fit cursor-pointer content-center items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-800 p-[3px] text-xs text-zinc-300 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-600 hover:text-zinc-950 sm:p-1 sm:text-lg">
      {children}
    </div>
  );
}

TechPills.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TechPills;
