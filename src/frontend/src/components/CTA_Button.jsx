import PropTypes from "prop-types";

CTA_Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default function CTA_Button({
  className,
  text,
  onClick = () => {
    window.location.href = "/events";
  },
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black h-12 w-48 text-white font-Tektur tracking-wide rounded-full hover:opacity-90 dark:hover:opacity-80 duration-200 transition-all ${className}`}
    >
      {text || "View All Events"}
    </button>
  );
}
