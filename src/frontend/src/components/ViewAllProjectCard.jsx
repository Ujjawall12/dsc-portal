export default function ViewAllProjectCard() {
  return (
    <div
      id='view-all-projects-card'
      className='flex flex-col items-center px-4 py-6 gap-2 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-950 self-stretch w-72 flex-1'
    >
      <h1 className='text-xl font-bold text-neutral-200'>View All Projects</h1>
      <p className='text-white text-center'>
        Explore all the projects that we have been working on.
      </p>

      <button className='w-64 h-12 rounded-md mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-colors duration-300 ease-in-out'>
        View All Projects
      </button>
    </div>
  );
}
