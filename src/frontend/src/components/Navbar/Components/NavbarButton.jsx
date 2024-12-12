import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

NavbarButton.propTypes = {
  type: PropTypes.oneOf(["default", "black", "red"]),
  text: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function NavbarButton({
  type = "default",
  text = "Button",
  to = "/",
  button = false,
  onClick,
}) {
  const location = useLocation();
  const isActiveLink = location.pathname === to;

  const baseClasses =
    "flex flex-row gap-2 px-4 py-1 min-w-24 rounded-full items-center justify-center transition-colors sm:px-2 sm:py-0.5 sm:text-xs lg:py-1.5";
  const defaultClasses = `outline outline-1 ${
    isActiveLink
      ? "outline-neutral-800 dark:outline-neutral-200"
      : "outline-neutral-300 dark:outline-neutral-600"
  } hover:bg-neutral-100 dark:hover:bg-neutral-800`;
  const blackClasses =
    "bg-black hover:bg-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-700";
  const redClasses =
    "bg-red-500 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-800";

  const content = (
    <>
      {type === "default" && (
        <div
          className={`rounded-full w-2 h-2 ${
            isActiveLink
              ? "bg-black dark:bg-neutral-200 outline-none"
              : "bg-transparent outline outline-1 outline-neutral-400 dark:outline-neutral-600"
          }`}
        ></div>
      )}
      <span
        className={`${
          type === "default"
            ? "text-neutral-700 dark:text-neutral-200"
            : "text-white"
        } text-sm ${isActiveLink && "font-semibold"} ${
          type === "black" && "font-Exo tracking-widest"
        }`}
      >
        {text}
      </span>
    </>
  );

  return button ? (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        type === "default"
          ? defaultClasses
          : type === "black"
          ? blackClasses
          : redClasses
      }`}
    >
      {content}
    </button>
  ) : (
    <NavLink
      to={to}
      className={`${baseClasses} ${
        type === "default"
          ? defaultClasses
          : type === "black"
          ? blackClasses
          : redClasses
      }`}
    >
      {content}
    </NavLink>
  );
}
