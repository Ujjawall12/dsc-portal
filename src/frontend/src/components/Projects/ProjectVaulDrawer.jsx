import { Drawer } from "vaul";
import { SlidersHorizontalIcon } from "lucide-react";

function ProjectVaulDrawer() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = {
      year: formData.get('year'),
      category: formData.get('category'),
      projectStatus: formData.getAll('projectStatus')
    }
    console.log(formObj);
  }
  // todo: fetch these things from backend
  const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  const years = ["ALL", "2024", "2023", "2022"];


  const fieldClasses = "border dark:border-neutral-600 p-1 rounded-md dark:bg-neutral-700 dark:text-neutral-50 focus:outline-none focus:outline-4"

  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <div className='h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700'>
          <SlidersHorizontalIcon className='h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1'/>
          <span className='hidden sm:flex text-white'>Filter</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[50]" />
        <Drawer.Content className="bg-white dark:bg-neutral-800 rounded-t-xl px-5 pb-5 h-fit fixed bottom-0 left-0 right-0 outline-none z-[50]">
          <div className="p-4 w-full bg-white flex dark:bg-neutral-800 justify-center items-center">
            <div className="w-[3rem] p-[2px] bg-neutral-200 dark:bg-neutral-500 rounded-full"/>
          </div>
          <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div className="grid">
              <label htmlFor="year" className="text-neutral-700 dark:text-white">
                Year
              </label>
              <select id="year" name="year" className={fieldClasses}>
                {/* todo: fetch data from backend and set option using map here */}
                {years.map((year) => {
                  return <option value={year} key={year}>
                    {year}
                  </option>
                })}
              </select>
            </div>
            <div className="grid">
              <label htmlFor="category" className="text-neutral-700 dark:text-white">
                Category
              </label>
              <select id="category" name="category" className={fieldClasses}>
                {/* todo: fetch data from backend and set option using map here */}
                {categories.map((category) => {
                  return <option value={category} key={category}>
                    {category}
                  </option>
                })}
              </select>
            </div>
            <div className="grid">
              <label className="text-neutral-700 dark:text-white">
                Project Status
              </label>
              <div className="grid space-y-1 mt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="active" name="projectStatus"/>
                  <label className="text-neutral-600 dark:text-white text-sm">Active</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="upcoming" name="projectStatus"/>
                  <label htmlFor="upcoming" className="text-neutral-600 dark:text-white text-sm">Upcoming</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="completed" name="projectStatus"/>
                  <label htmlFor="completed" className="text-neutral-600 dark:text-white text-sm">Completed</label>
                </div>
              </div>
            </div>
              <Drawer.Close className="w-full">
            <div className="w-full">
              <button className="w-full text-white rounded-md transition-all hover:opacity-90 duration-150 ease-out bg-neutral-950 dark:bg-neutral-50  px-4 p-2 dark:text-neutral-900" type="submit">
                Apply
              </button>

            </div>
              </Drawer.Close>
          </div>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default ProjectVaulDrawer;