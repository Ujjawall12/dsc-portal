import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import caretRight from "assets/caretRight.svg";

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default function Card({
  className = "",
  title = "Card Title",
  description = "Lorem",
  link = "",
}) {
  return (
    <div
      className={`flex flex-row gap-2 items-start justify-center flex-1 bg-white dark:bg-neutral-900 rounded-md h-full px-12 py-12 ${className}`}
    >
      <div className="h-8 w-8">
        <img src="/knight.png" alt="arrow" />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex flex-row gap-2 items-center">
          <span className="font-Tektur font-medium text-lg text-neutral-700 dark:text-neutral-300">
            {title}
          </span>
          <Link to={link} className="w-5 h-5">
            <img src={caretRight} alt="arrow" />
          </Link>
        </div>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </span>
      </div>
    </div>
  );
}
