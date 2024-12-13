import ProjectCard from '@/components/ProjectCard/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import CurrentProjectCard from '@/components/CurrentProjectCard';
import ViewAllProjectCard from '@/components/ViewAllProjectCard';

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
          <CurrentProjectCard />
          <ViewAllProjectCard />
        </div>
      </div>
    </div>
  );
}
