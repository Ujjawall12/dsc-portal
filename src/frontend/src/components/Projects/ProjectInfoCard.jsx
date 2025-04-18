// import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

// ProjectInfoCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   status: PropTypes.oneOf(["Active", "Planning", "In Progress", "Completed"])
//     .isRequired,
//   category: PropTypes.string.isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string),
//   teamSize: PropTypes.number.isRequired,
//   duration: PropTypes.string.isRequired,
//   image: PropTypes.string,
// };

function ProjectInfoCard({ ...props }) {
  console.log(props);
  return (
    <Link
      to={`/projects/${props._id}`}
      className="dark:text-white rounded-lg w-full flex flex-col h-full"
    >
      <div className="min-h-48">
        <img
          // removed projectData.image for now
          src={props.images[0]}
          alt="Project"
          className="object-cover h-full w-full rounded-t-lg"
        />
      </div>
      <div className="p-2 pb-3 flex flex-col h-full bg-neutral-50 dark:bg-neutral-800 border dark:border-neutral-600 rounded-b-lg space-y-2">
        <div className="flex flex-col h-full flex-1 space-y-2">
          <h2 className="font-medium">{props.headline}</h2>
          <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-300">
            {props.description[0].description}
          </p>
        </div>
        {/* array of tech stack used todo: add this thing in backend project-schema */}
        <div className="flex items-center gap-3 flex-grow">
          {props.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="px-2 py-0.5 w-fit bg-neutral-200/60 dark:bg-neutral-100 dark:text-neutral-800 rounded-md text-xs"
              >
                {tag}
              </div>
            );
          })}
        </div>
        {/* adding status here todo: add this in backend projectData schema and remove other unnecessary fields */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div
            className={clsx("text-xs px-2 py-0.5 rounded-md w-fit", {
              "bg-red-200/60 dark:bg-red-100 text-red-800":
                typeof props.progress === "number" && props.progress <= 25,
              "bg-orange-200/60 dark:bg-orange-100 text-orange-800":
                typeof props.progress === "number" &&
                props.progress > 25 &&
                props.progress <= 50,
              "bg-yellow-200/60 dark:bg-yellow-100 text-yellow-800":
                typeof props.progress === "number" &&
                props.progress > 50 &&
                props.progress <= 75,
              "bg-green-200/60 dark:bg-green-100 text-green-800":
                typeof props.progress === "number" &&
                props.progress > 75 &&
                props.progress <= 100,
            })}
          >
            {props.progress} % completed
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {props.duration}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectInfoCard;
