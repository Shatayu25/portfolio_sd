import PropTypes from "prop-types";

function TechPills({ children }) {
  return (
    <div className="flex w-fit cursor-pointer content-center items-center gap-2 rounded-2xl bg-slate-800/40 text-xs text-slate-50 transition-all duration-300 hover:bg-slate-200 hover:text-slate-800 p-[3px] sm:p-1 sm:text-lg md:p-1 md:text-lg lg:p-1 lg:text-lg">
      {children}
    </div>
  );
}

TechPills.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TechPills;
