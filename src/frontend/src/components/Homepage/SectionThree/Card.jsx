import PropTypes from "prop-types";

Card.propTypes = {
  parentClassName: PropTypes.string.isRequired,
  headingClassName: PropTypes.string,
  innerDivClassName: PropTypes.string,
  subheadingClassName: PropTypes.string,
  textClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  svgClassName: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  svgContent: PropTypes.element,
};

export default function Card({
  parentClassName,
  headingClassName,
  innerDivClassName,
  subheadingClassName,
  textClassName,
  imageClassName,
  svgClassName,
  contentType,
  heading,
  subheading,
  text,
  imageSrc,
  link,
  imageAlt,
  svgContent,
}) {
  return (
    <div className={parentClassName}>
      {contentType === "text" ? (
        <>
          <span className={headingClassName}>{heading}</span>
          <div className={innerDivClassName}>
            <span className={subheadingClassName}>{subheading}</span>
            <span className={textClassName}>{text}</span>
          </div>
        </>
      ) : contentType === "image" ? (
        <div className="flex items-center justify-center">
          <img src={imageSrc} alt={imageAlt} className={imageClassName} />
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          className="flex items-center justify-center"
        >
          <svg
            className={svgClassName}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            {svgContent}
          </svg>
        </a>
      )}
    </div>
  );
}
