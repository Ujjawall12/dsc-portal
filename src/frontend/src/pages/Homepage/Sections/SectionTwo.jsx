import computer from 'assets/computer.jpg';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function SectionTwo() {
  return (
    <div className='flex flex-col gap-4 px-8'>
      <SectionHeading
        title={'FEATURED PROJECTS'}
        description={
          'Explore some of the projects that we have been working on.'
        }
      />
      <div className='flex flex-row gap-4 p-6'>
        <div
          className='flex flex-col items-center gap-4 flex-1'
          id='project-card-container'
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div
          className='flex flex-col items-center gap-4 w-fit'
          id='project-view-card-container'
        >
          <div
            id='current-project-card'
            style={{
              backgroundImage: `url(${computer})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backdropFilter: 'blur(10px)',
            }}
            className='relative overflow-hidden flex flex-col gap-4 rounded-xl self-stretch w-72 h-96 p-4 group'
          >
            <div className='-z-10 absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-t from-transparent to-neutral-900'></div>
            <div className='grid grid-cols-2 w-[52rem] group-hover:-translate-x-1/2 transition-transform'>
              <h1 className='text-2xl font-bold text-neutral-200'>
                Current Project
              </h1>
              <h1 className='text-2xl font-bold text-green-500'>
                Project Name
              </h1>
            </div>
            <p className='text-white'>
              Currently we are working on a project that aims to solve the issue
              present in the current system.
            </p>
            <button className='btn btn-primary bg-green-700 mt-auto'>
              View Project
            </button>
          </div>
          {/* view all projects heading desction and button */}
          <div className='flex flex-col items-center px-4 py-6 gap-2 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-950 self-stretch w-72 flex-1'>
            <h1 className='text-xl font-bold text-neutral-200'>
              View All Projects
            </h1>
            <p className='text-white text-center'>
              Explore all the projects that we have been working on.
            </p>

            <button className='w-64 h-12 rounded-md mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-colors duration-300 ease-in-out'>
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
