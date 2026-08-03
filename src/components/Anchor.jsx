import PropTypes from 'prop-types';

function Anchor({ link, children}) {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      className='inline-block w-5 h-5 hover:translate-y-[-1px] transition-all duration-300'
      href={link}
    >
      {children}
    </a>
  );
}

// Done for props validation, to tell the props what data they can expect
Anchor.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
