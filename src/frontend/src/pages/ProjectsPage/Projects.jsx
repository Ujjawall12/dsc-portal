import MainLayout from 'Layout/MainLayout';
import { useState, useEffect, useCallback } from 'react';
import Section from '@/Layout/Section';
import ProjectSidebar from '@/components/Projects/ProjectSidebar';
import { ArrowLeft, ArrowRight, SlidersHorizontalIcon } from 'lucide-react';
import ProjectInfoCard from '@/components/Projects/ProjectInfoCard';
import ProjectVaulDrawer from '@/components/Projects/ProjectVaulDrawer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProjectInfoCardSkeleton from '@/components/Projects/skeletons/ProjectInfoCardSkeleton';
import { useDebouncedCallback } from 'use-debounce';

function Projects() {
  const [searchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projectTechnologies, setProjectsTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search');
  const technology = searchParams.get('technology');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const baseUrl = `${import.meta.env.BACKEND_URL}/api/v1/projects`;
      const query = new URL(baseUrl);
      query.searchParams.append('page', currentPage);
      query.searchParams.append('limit', 7);
      if (search && search.trim()) {
        query.searchParams.append('search', search.trim());
      }
      if (technology) {
        query.searchParams.append('technology', technology);
      }

      const response = await fetch(query.toString());
      const resData = await response.json();

      setProjects(resData.data);

      // Remove duplication from technologies
      const technologies = [
        ...new Set(resData.data.flatMap((data) => data.technologies)),
      ];
      setProjectsTechnologies(technologies);

      setMetaData(resData.meta);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, search, technology]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSearch = useDebouncedCallback((search) => {
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    navigate({ pathname: '/projects', search: `?${params.toString()}` });
  }, 300);

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    navigate({ pathname: '/projects', search: `?${params.toString()}` });
  };
  return (
    <MainLayout>
      <Section>
        <div className='dark:text-white px-5'>
          {/* rest of the code for the projects will go here */}
          <div className='min-h-[20vh]  w-full flex flex-col justify-center items-center p-5'>
            <h2 className='font-bold text-neutral-700 dark:text-white text-5xl'>
              Our{' '}
              <span className='px-2 py-2 pb-3 -rotate-3 bg-gradient-to-b from-orange-400  to-orange-600 text-white inline-block'>
                Projects
              </span>
            </h2>
            <p className='text-neutral-700 dark:text-neutral-300 w-full max-w-xl text-center pt-2'>
              Explore the innovative projects our developer community is working
              on
            </p>
          </div>
          <div className='space-y-6 w-full'>
            <div className='flex justify-center items-center w-full'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='flex items-center justify-center gap-3 w-full'
              >
                <input
                  className='flex dark:border-neutral-700 focus:outline-0 focus:outline-neutral-600 focus:ring-0 border h-9 w-full max-w-xl rounded-md bg-transparent px-3 py-1 text-base transition-colors md:text-sm'
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={search}
                />
                {isMobile ? (
                  <ProjectVaulDrawer technologies={projectTechnologies} />
                ) : (
                  <div
                    className='h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700'
                    onClick={toggleSidebar}
                  >
                    <SlidersHorizontalIcon className='h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1' />
                    <span className='hidden sm:flex text-white'>Filter</span>
                  </div>
                )}
              </form>
            </div>
            <div className='border dark:border-neutral-500 border-dashed' />
            <div>
              {isLoading ? (
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7'>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <ProjectInfoCardSkeleton key={index} />
                  ))}
                </div>
              ) : projects.length ? (
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7'>
                  {projects.map((project) => (
                    <div className='flex justify-center' key={project.id}>
                      <ProjectInfoCard {...project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='flex justify-center items-center w-full min-h-[30vh]'>
                  <p className='text-lg text-neutral-500 dark:text-neutral-300'>
                    No projects found
                  </p>
                </div>
              )}
            </div>
            {projects.length > 0 && (
              <div className='flex justify-end'>
                <div className='flex gap-3'>
                  <button
                    disabled={currentPage <= 1 || isLoading}
                    onClick={() => createPageURL(currentPage - 1)}
                    className='flex items-center justify-center text-sm font-medium disabled:text-neutral-500 dark:disabled:text-neutral-500 dark:disabled:border-neutral-500 text-neutral-700 dark:text-white px-3 py-2 border rounded-md'
                  >
                    <ArrowLeft className='w-4 h-4 sm:mr-1' />
                    <span className='hidden sm:flex'>Previous</span>
                  </button>
                  <button
                    disabled={metaData?.isLastPage || isLoading}
                    onClick={() => createPageURL(currentPage + 1)}
                    className='flex items-center disabled:text-neutral-500 text-sm font-medium text-neutral-700 dark:text-white dark:disabled:text-neutral-500 dark:disabled:border-neutral-500 px-3 py-2 border rounded-md'
                  >
                    <span className='hidden sm:flex'>Next</span>
                    <ArrowRight className='w-4 h-5 sm:ml-1' />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        technologies={projectTechnologies}
      />
    </MainLayout>
  );
}

export default Projects;
