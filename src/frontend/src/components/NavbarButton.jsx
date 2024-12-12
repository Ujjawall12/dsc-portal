import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

NavbarButton.propTypes = {
  type: PropTypes.oneOf(["default", "black"]),
  text: PropTypes.string,
  to: PropTypes.string,
};

export default function NavbarButton({
  type = "default",
  text = "Button",
  to = "/",
}) {
  const location = useLocation();
  const isActiveLink = location.pathname === to;
  if (type == "default")
    return (
      <NavLink
        to={to}
        className={`flex flex-row gap-2 px-4 py-[2px] min-w-24 rounded-full outline outline-1 ${
          isActiveLink ? "outline-neutral-800" : "outline-neutral-300"
        } items-center justify-center hover:bg-neutral-100 transition-colors`}
      >
        <div
          className={`rounded-full w-2 h-2 ${
            isActiveLink
              ? "bg-black outline-none"
              : "bg-transparent outline outline-1 outline-neutral-400"
          }`}
        ></div>
        <span
          className={`h-[1.4rem] text-neutral-700 text-sm ${
            isActiveLink && "font-semibold"
          }`}
        >
          {text}
        </span>
      </NavLink>
    );
  else if (type == "black")
    return (
      <NavLink
        to={to}
        className="flex flex-row gap-2 px-4 py-1 min-w-24 rounded-full bg-black items-center justify-center hover:bg-neutral-800 transition-colors"
      >
        <span
          className={`font-Exo tracking-widest text-white text-sm ${
            isActiveLink && "font-semibold"
          }`}
        >
          {text}
        </span>
      </NavLink>
    );
}
