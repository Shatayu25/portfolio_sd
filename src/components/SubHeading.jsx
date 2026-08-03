import PropTypes from 'prop-types';

function SubHeading({ children }) {
  return (
    <div className='flex gap-1 text-lg items-center font-extrabold text-slate-900 border-b-[1px]'>
      {children}
    </div>
  );
}

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
