import { Drawer } from "vaul";
import { SlidersHorizontalIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function ProjectVaulDrawer({ technologies }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const formData = new FormData(e.currentTarget);
    const formObj = {
      year: formData.get("year"),
      category: formData.get("category"),
      projectStatus: formData.getAll("projectStatus"),
    };
    if (formObj.category) {
      params.set("technology", encodeURIComponent(formObj.category));
    } else {
      params.delete("technology");
    }
    navigate({ pathname: "/projects", search: `?${params.toString()}` });
  };
  // todo: fetch these things from backend
  // const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  const years = ["ALL", "2024", "2023", "2022"];

  const fieldClasses =
    "border dark:border-neutral-600 p-1 rounded-md dark:bg-neutral-700 dark:text-neutral-50 focus:outline-none focus:outline-4";

  return (
    <Drawer.Root>
      <Drawer.Trigger className="font-Exo">
        <div className="h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700">
          <SlidersHorizontalIcon className="h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1" />
          <span className="hidden sm:flex text-white">Filter</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[50]" />
        <Drawer.Content className="bg-white font-Exo dark:bg-neutral-800 rounded-t-xl px-5 pb-5 h-fit fixed bottom-0 left-0 right-0 outline-none z-[50]">
          <div className="p-4 w-full bg-white flex dark:bg-neutral-800 justify-center items-center">
            <div className="w-[3rem] p-[2px] bg-neutral-200 dark:bg-neutral-500 rounded-full" />
          </div>
          {/* todo: change this condition from todo here */}
          {technologies.length > 0 ? (
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="space-y-3">
                {/* <div className="grid">
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
                </div> */}
                <div className="grid">
                  <label
                    htmlFor="category"
                    className="text-neutral-700 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className={fieldClasses}
                  >
                    {technologies?.map((category) => {
                      return (
                        <option value={category} key={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* <div className="grid">
                  <label className="text-neutral-700 dark:text-white">
                    Project Status
                  </label>
                  <div className="grid space-y-1 mt-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="active" name="projectStatus" />
                      <label className="text-neutral-600 dark:text-white text-sm">
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
                      <input
                        type="checkbox"
                        id="completed"
                        name="projectStatus"
                      />
                      <label
                        htmlFor="completed"
                        className="text-neutral-600 dark:text-white text-sm"
                      >
                        Completed
                      </label>
                    </div>
                  </div>
                </div> */}
                <Drawer.Close className="w-full">
                  <div className="w-full">
                    <button
                      className="w-full text-white rounded-md transition-all hover:opacity-90 duration-150 ease-out bg-gradient-to-b from-orange-400  to-orange-600 px-4 p-2 "
                      type="submit"
                    >
                      Apply
                    </button>
                  </div>
                </Drawer.Close>
              </div>
            </form>
          ) : (
            <div className="h-44 dark:text-white text-neutral-800 w-full flex justify-center items-center">
              No Filter found
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default ProjectVaulDrawer;
