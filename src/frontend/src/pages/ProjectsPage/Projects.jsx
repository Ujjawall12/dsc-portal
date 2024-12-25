import MainLayout from 'Layout/MainLayout';
import { useState, useEffect } from 'react';
import Section from '@/Layout/Section';
import ProjectSidebar from '@/components/Projects/ProjectSidebar';
import { SlidersHorizontalIcon } from 'lucide-react';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';
import ProjectVaulDrawer from '@/components/Projects/ProjectVaulDrawer';
import { useSearchParams } from 'react-router-dom';

function Projects() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setSearchParams({search: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchValue });

    // while making the request to the backend create a useDebounce hook
  }
  return <MainLayout>
    <Section>
      <div className='dark:text-white px-5'>
        {/* rest of the code for the projects will go here */}
        <div className='space-y-6 w-full'>
          <div className='flex justify-center items-center w-full'>
            <form className='flex items-center justify-center gap-3 w-full' onSubmit={handleSubmit}>
              <input className='flex dark:border-neutral-700 foucus:outline-0 focus:outline-neutral-600 focus:ring-0 border h-9 w-full max-w-xl rounded-md bg-transparent px-3 py-1 text-base  transition-colorsmd:text-sm ' value={searchValue} onChange={handleInputChange}/>
              {
                isMobile ? <ProjectVaulDrawer /> : 
                <div className='h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700' onClick={toggleSidebar}>
                  <SlidersHorizontalIcon className='h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1'/>
                  <span className='hidden sm:flex text-white'>Filter</span>
                </div>
              }
            </form>
          </div>
          <div className='border dark:border-neutral-500 border-dashed'/>
          {/* here mapping function will come to map project on the basis of details */}
          <div className='grid lg:grid-cols-2 gap-5'>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
            <div className='flex justify-center'>
              <ProjectCard />
            </div>
          </div>
          {/* projects cards below */}
          {/* todo: add search bar with filter button on right : align these at center */}
      
            {/* todo: render the project use project card component  */}
            {/* use vaul by eril god of ui design in my opinion */}
        </div>
      </div>
    </Section>
    <ProjectSidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
  </MainLayout>;
}
export default Projects;
