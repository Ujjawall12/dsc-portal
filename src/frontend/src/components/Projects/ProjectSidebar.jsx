import { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { X, Filter } from "lucide-react";

ProjectSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function ProjectSidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      const target = event.target;
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(target)) {
        onClose();
      }
    },
    [isOpen, onClose]
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

  const fieldClasses = `
    w-full px-3 py-2 rounded-lg border transition-all duration-200bg-white dark:bg-neutral-800 border-indigo-100 dark:border-neutral-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 focus:outline-none  text-neutral-800 dark:text-neutral-100
  `;

  const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  const years = ["ALL", "2024", "2023", "2022"];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-end sm:items-center justify-end">
      <div className="w-full sm:w-[400px] h-[90vh] sm:h-[85vh] sm:mr-4 sm:rounded-2xl overflow-hidden shadow-2xl">
        <form
          className="h-full bg-gradient-to-b from-white to-indigo-50 dark:from-neutral-900 dark:to-neutral-900 flex flex-col"
          ref={sidebarRef}
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-indigo-100 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
                Filters
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {/* Year Selection */}
            <div className="space-y-2">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Year
              </label>
              <select id="year" name="year" className={fieldClasses}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Category
              </label>
              <select id="category" name="category" className={fieldClasses}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Status */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Project Status
              </label>
              <div className="space-y-3 pt-2">
                {['Active', 'Upcoming', 'Completed'].map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={status.toLowerCase()}
                        name="projectStatus"
                        className="w-5 h-5 border-2 rounded-md border-indigo-200 dark:border-neutral-700 text-indigo-600 dark:text-indigo-400  focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800   bg-white dark:bg-neutral-800  cursor-pointer"   
                      />
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-white transition-colors">
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with Apply Button */}
          <div className="px-6 py-4 border-t border-indigo-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg font-medium text-white dark:text-white  bg-gradient-to-r from-indigo-600 to-indigo-500  hover:from-indigo-500 hover:to-indigo-400  dark:from-indigo-500 dark:to-indigo-600 dark:hover:from-indigo-400 dark:hover:to-indigo-500
                hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectSidebar;