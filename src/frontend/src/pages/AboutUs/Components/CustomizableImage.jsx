import PropTypes from "prop-types";

CustomizableImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Customizable Image Component
function CustomizableImage({ src, alt }) {
  return (
    <div className="flex-1">
      <img
        src={src}
        alt={alt}
        style={{ width: "150%", height: "700px" }}
        className="rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
      />
    </div>
  );
}

export default CustomizableImage;
