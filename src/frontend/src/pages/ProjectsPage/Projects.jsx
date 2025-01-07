import MainLayout from "Layout/MainLayout";
import { useState, useEffect, useCallback } from "react";
import Section from "@/Layout/Section";
import ProjectSidebar from "@/components/Projects/ProjectSidebar";
import { ArrowLeft, ArrowRight, SlidersHorizontalIcon } from "lucide-react";
import ProjectInfoCard from "@/components/Projects/ProjectInfoCard";
import ProjectVaulDrawer from "@/components/Projects/ProjectVaulDrawer";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProjectInfoCardSkeleton from "@/components/Projects/skeletons/ProjectInfoCardSkeleton";
import { useDebouncedCallback } from "use-debounce";


function Projects() {
  const [searchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // eslint-disable-next-line no-unused-vars
  const [searchProject, setSearchProject] = useState(searchParams.get("search") || "");
  const navigate = useNavigate();
  const currentPage = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search");
  const page = searchParams.get("page");

  useEffect(() => {
    setSearchProject(searchParams.get("search") || "")
  }, [searchParams])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = useCallback(async() => {
    // limit = 7 -> thala for a reason change it after thala retirement <means never haha> 
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/api/v1/projects?page=${page}&limit=7`);
      const resData = await response.json();
      setProjects(resData.data);
      setMetaData(resData.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData])
  
 

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSearch = useDebouncedCallback((search) => {
    const params = new URLSearchParams(searchParams.toString())
    if(search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    navigate({
      pathname: "/projects",
      search: `?${params.toString()}`
    })
  }, 300)

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return navigate({
      pathname: "/projects",
      search: `?${params.toString()}`
    })
  }

  console.log(projects);
  const projectData = [
    {
      id: "677a018d4aff029b5d10ecb7",
      title: "Smart Campus Initiative",
      description:
        "Building IoT solutions for campus facilities management and automation.",
      status: "Active",
      category: "Technical Club",
      tags: ["IoT", "Web Dev", "Hardware"],
      teamSize: 5,
      duration: "6 months",
      image: "/projects/smart-campus.jpg",
    },
    {
      id: "2",
      title: "Digital Library System",
      description:
        "Creating a modern digital catalog and booking system for the campus library.",
      status: "Active",
      category: "Academic Project",
      tags: ["Web Dev", "Database", "UI/UX"],
      teamSize: 4,
      duration: "4 months",
      image: "/projects/digital-library.jpg",
    },
    {
      id: "3",
      title: "Green Energy Monitor",
      description:
        "Developing solar panel monitoring and optimization system for campus buildings.",
      status: "Planning",
      category: "Technical Club",
      tags: ["IoT", "Data Analysis", "Hardware"],
      teamSize: 6,
      duration: "8 months",
      image: "/projects/green-energy.jpg",
    },
    {
      id: "4",
      title: "Campus Navigation App",
      description:
        "Mobile application for indoor and outdoor campus navigation with AR features.",
      status: "In Progress",
      category: "Student Initiative",
      tags: ["Mobile Dev", "AR", "UI/UX"],
      teamSize: 3,
      duration: "5 months",
      image: "/projects/navigation-app.jpg",
    },
    {
      id: "5",
      title: "Smart Parking System",
      description:
        "Automated parking space detection and management system for campus lots.",
      status: "Active",
      category: "Technical Club",
      tags: ["IoT", "Mobile Dev", "Hardware"],
      teamSize: 4,
      duration: "3 months",
      image: "/projects/smart-parking.jpg",
    },
    {
      id: "6",
      title: "Student Collaboration Platform",
      description:
        "Web platform for student project collaboration and resource sharing.",
      status: "Completed",
      category: "Academic Project",
      tags: ["Web Dev", "Database", "Cloud"],
      teamSize: 5,
      duration: "7 months",
      image: "/projects/collab-platform.jpg",
    },
    {
      id: "7",
      title: "Campus Events App",
      description:
        "Real-time event management and notification system for campus activities.",
      status: "Active",
      category: "Student Initiative",
      tags: ["Mobile Dev", "Web Dev", "UI/UX"],
      teamSize: 4,
      duration: "4 months",
      image: "/projects/events-app.jpg",
    },
    {
      id: "8",
      title: "Lab Equipment Monitor",
      description:
        "IoT-based monitoring system for laboratory equipment and resources.",
      status: "Planning",
      category: "Technical Club",
      tags: ["IoT", "Hardware", "Data Analysis"],
      teamSize: 3,
      duration: "6 months",
      image: "/projects/lab-monitor.jpg",
    },
  ];
  return (
    <MainLayout>
      <Section>
        <div className="dark:text-white px-5">
          {/* rest of the code for the projects will go here */}
          <div className="min-h-[20vh]  w-full flex flex-col justify-center items-center p-5">
            <h2 className="font-bold text-neutral-700 dark:text-white text-5xl">
              Our{" "}
              <span className="px-2 py-2 pb-3 -rotate-3 bg-gradient-to-b from-orange-400  to-orange-600 text-white inline-block">
                Projects
              </span>
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 w-full max-w-xl text-center pt-2">
              Explore the innovative projects our developer community is working
              on
            </p>
          </div>
          <div className="space-y-6 w-full">
            <div className="flex justify-center items-center w-full">
              <form
                className="flex items-center justify-center gap-3 w-full"
              >
                <input
                  className="flex dark:border-neutral-700 foucus:outline-0 focus:outline-neutral-600 focus:ring-0 border h-9 w-full max-w-xl rounded-md bg-transparent px-3 py-1 text-base  transition-colorsmd:text-sm "
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={search}
                />
                {isMobile ? (
                  <ProjectVaulDrawer />
                ) : (
                  <div
                    className="h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700"
                    onClick={toggleSidebar}
                  >
                    <SlidersHorizontalIcon className="h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1" />
                    <span className="hidden sm:flex text-white">Filter</span>
                  </div>
                )}
              </form>
            </div>
            <div className="border dark:border-neutral-500 border-dashed" />
            {/* here mapping function will come to map project on the basis of details */}

                <div>
                  {
                    isLoading ? (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                        <ProjectInfoCardSkeleton />
                      </div>
                    ) : 
                    <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                        {projectData.map((project) => {
                          return (
                            <div className="flex justify-center" key={project.id}>
                              <ProjectInfoCard {...project} />
                            </div>
                          );
                        })}
                    </div>
                  }
                </div>
            {/* projects cards below */}
            {/* todo: add search bar with filter button on right : align these at center */}
            <div className="flex justify-end">
              <div className="flex gap-3">
                <button disabled={currentPage <= 1 || isLoading} onClick={() => createPageURL(currentPage - 1)} className="flex items-center justify-center text-sm font-medium disabled:text-neutral-500 dark:disabled:text-neutral-500 dark:disabled:border-neutral-500 text-neutral-700 dark:text-white px-3 py-2 border rounded-md">
                  <ArrowLeft className="w-4 h-4 sm:mr-1"/>
                  <span className="hidden sm:flex">
                    Previous
                  </span>
                </button>
                <button disabled={metaData?.isLastPage || isLoading} onClick={() => createPageURL(currentPage + 1)} className="flex items-center disabled:text-neutral-500 text-sm font-medium text-neutral-700 dark:text-white dark:disabled:text-neutral-500 dark:disabled:border-neutral-500 px-3 py-2 border rounded-md">
                  <span className="hidden sm:flex">
                    Next
                  </span>
                  <ArrowRight className="w-4 h-5 sm:ml-1"/>
                </button>
              </div>
            </div>
            {/* todo: render the project use project card component  */}
            {/* use vaul by eril god of ui design in my opinion */}
          </div>
        </div>
      </Section>
      <ProjectSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </MainLayout>
  );
}
export default Projects;
