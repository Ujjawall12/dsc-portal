import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import GhostProjectCard from "./GhostProjectCard";

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
};

const sampleData = {
  part: "Complete Application",
  name: "Farmer App",
  subtitle: "Web",
  version: "v3.2.3",
  progress: 70,
  headline: "Making lives easier",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "/sample-image.jpg",
  link: "/projects/farmer-app",
};

export default function ProjectCard({ id }) {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(sampleData);

  useEffect(() => {
    async function fetchProjectData() {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }

    fetchProjectData();
  }, [id]);

  if (!projectData) {
    return <GhostProjectCard />;
  }

  return (
    <div className="flex flex-col md:flex-row h-fit self-stretch rounded-lg shadow-slate-300 dark:shadow-neutral-700 overflow-hidden max-w-xs min-w-xs md:max-w-5xl outline outline-1 outline-gray-100 dark:outline-gray-700">
      <div
        className="relative h-52 md:aspect-square aspect-auto"
        id="project-card-image"
      >
        <div className="-z-10 absolute h-full w-full bg-gradient-to-b from-neutral-800/80 via-gray-600/30 to-gray-800/40"></div>
        <img
          // removed projectData.image for now
          src={"/sample-image.jpg"}
          alt="Project"
          className="object-cover h-full w-full absolute -z-20"
        />
        <div className="h-full w-full flex flex-col px-3 py-4 gap-2 items-start justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-200">{projectData.part}</span>
            <span className="text-md font-semibold tracking-wider text-white">
              {projectData.name}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-md text-neutral-100">{projectData.subtitle}</h3>
          </div>
        </div>
      </div>
      <div
        className="flex bg-white flex-col gap-2 p-4 w-full dark:bg-neutral-900"
        id="project-card-details"
      >
        <div className="flex flex-row justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {projectData.version}
          </span>
          <div className="flex flex-col gap-1">
            <progress
              aria-busy="true"
              value={projectData.progress}
              max="100"
              className="w-full h-1 rounded-lg"
            ></progress>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {projectData.progress}%
            </span>
          </div>
        </div>
        <h2 className="text-lg font-semibold dark:text-white">
          {projectData.headline}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {projectData.description}
        </span>
        <button
          onClick={() => navigate(projectData.link)}
          className="btn-primary mt-auto dark:bg-neutral-800 dark:text-white"
        >
          View Project
        </button>
      </div>
    </div>
  );
}
