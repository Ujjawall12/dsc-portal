import { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";

ProjectSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
function ProjectSidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      const target = event.target;
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target)
      ) {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    onClose();
  };

  if (!isOpen) return null;

  const fieldClasses =
    "border dark:border-neutral-600 p-1 rounded-md dark:bg-neutral-700 dark:text-neutral-50 focus:outline-none focus:outline-4";

  // todo: fetch these things from backend
  const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  const years = ["ALL", "2024", "2023", "2022"];

  return (
    <div className="hidden sm:flex fixed inset-0 bg-black/40 z-[100]">
      <div className="right-0 top-0 bottom-0 fixed z-10 flex ">
        <form
          className="border-l border-l-bg-neutral-500 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-[260px] grow p-4 flex flex-col dark:text-white"
          ref={sidebarRef}
          onSubmit={handleSubmit}
        >
          <h3>Filter</h3>
          <div className="border dark:border-neutral-600 rounded-full mt-1" />
          <div className="space-y-3 mt-5">
            <div className="grid">
              <label
                htmlFor="year"
                className="text-neutral-700 dark:text-white"
              >
                Year
              </label>
              <select id="year" name="year" className={fieldClasses}>
                {years.map((year) => {
                  return (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid">
              <label
                htmlFor="category"
                className="text-neutral-700 dark:text-white"
              >
                Category
              </label>
              <select id="category" name="category" className={fieldClasses}>
                {categories.map((category) => {
                  return (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid">
              <label className="text-neutral-700 dark:text-white">
                Project Status
              </label>
              <div className="grid space-y-1 mt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="active" name="projectStatus" />
                  <label className="text-neutral-600  dark:text-white text-sm">
                    Active
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="upcoming" name="projectStatus" />
                  <label
                    htmlFor="upcoming"
                    className="text-neutral-600 dark:text-white text-sm"
                  >
                    Upcoming
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="completed" name="projectStatus" />
                  <label
                    htmlFor="completed"
                    className="text-neutral-600 dark:text-white text-sm"
                  >
                    Completed
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full text-white rounded-md transition-all hover:opacity-90 duration-150 ease-out bg-neutral-950 dark:bg-neutral-50  px-4 p-2 dark:text-neutral-900">
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectSidebar;
