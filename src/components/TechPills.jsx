import PropTypes from 'prop-types';

function TechPills({ children }) {
  return (
    <div className='flex items-center gap-2 p-[3px] w-fit bg-slate-800/40 rounded-2xl text-slate-200 hover:text-slate-800 hover:bg-slate-200 cursor-pointer transition-all duration-300'>
      {children}
    </div>
  );
}

TechPills.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TechPills;
