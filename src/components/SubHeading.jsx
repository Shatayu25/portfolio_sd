import PropTypes from 'prop-types';

function SubHeading({ children }) {
  return (
    <div className="flex items-center border-b-[1px] font-extrabold text-slate-900 text-sm md:text-base lg:text-lg xl:gap-1">
      {children}
    </div>
  );
}

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
