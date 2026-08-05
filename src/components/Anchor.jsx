import PropTypes from "prop-types";

function Anchor({ link, children }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="inline-block h-4 w-4 transition-all duration-300 hover:translate-y-[-1px] hover:text-emerald-400 sm:h-5 sm:w-5 md:h-6 md:w-6"
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
