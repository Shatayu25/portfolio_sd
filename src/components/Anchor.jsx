import PropTypes from "prop-types";

function Anchor({ link, children }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="inline-block h-6 w-6 transition-all duration-300 hover:translate-y-[-1px]"
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
