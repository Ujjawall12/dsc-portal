import PropTypes from "prop-types";

const TextHighlighter = ({ text, className }) => {
  const highlightedText = {
    padding: "0 0.2em",
    borderRadius: "0.3em",
    margin: "0 0.2em",
  };

  return (
    <span className={className} style={highlightedText}>
      {text}
    </span>
  );
};

TextHighlighter.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextHighlighter;
