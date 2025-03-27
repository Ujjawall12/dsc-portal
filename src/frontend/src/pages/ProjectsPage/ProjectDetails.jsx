/* eslint-disable no-unused-vars */
import MainLayout from "@/Layout/MainLayout";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Carousel from "./Components/ProjectCarousel";
import ProjectHeroSection from "./Components/ProjectTitle";
import ProjectDescription from "./Components/ProjectDescription";
import ProjectTeamSection from "./Components/ProjectTeamMember";
import ProjectHeroSkeleton from "@/components/Projects/skeletons/ProjectHeroSkeletion";
import ProjectCarouselSkeleton from "@/components/Projects/skeletons/ProjectCarouselSkeletion";
import ProjectTeamSectionSkeleton from "@/components/Projects/skeletons/ProjectTeamSectionSkeleton";
import ProjectDescriptionSkeleton from "@/components/Projects/skeletons/ProjectDescriptionSkeleton";

const sampleProjectData = {
  title: "Smart Irrigation System",
  description:
    "An IoT-based solution that automates irrigation using soil moisture sensors and weather data. It optimizes water usage, improves crop yields, and provides real-time monitoring through a mobile app, promoting sustainable farming.",
  startDate: "2024-01-01",
  endDate: "2024-06-30",
  status: "In Progress",
  category: "Web Development",
  contributors: [
    { name: "John Doe", profileUrl: "/sample-image.jpg" },
    { name: "Jane Smith", profileUrl: "/sample-image.jpg" },
    { name: "Mike Johnson", profileUrl: "/sample-image.jpg" },
  ],
  heroImage: "/",
  statistics: {
    dailyActivity: 20,
    dailyUsers: 10,
    userRating: 4.5,
  },
};

// todo: dark mode correction

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);

  const fetchProjectData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.BACKEND_URL}/api/v1/projects/${slug}`,
      );
      if (!response.ok) {
        navigate("/not-found");
      }
      const data = await response.json();
      setProject(data.data);
      if (!response.ok) navigate("/not-found");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [slug, navigate]);

  console.log(project);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  const technologies = project?.technologies ? project.technologies : [];

  return (
    <MainLayout>
      {isLoading ? (
        <>
          <ProjectHeroSkeleton />
          <ProjectDescriptionSkeleton />
          <ProjectCarouselSkeleton />
          <ProjectTeamSectionSkeleton />
        </>
      ) : (
        <>
          <ProjectHeroSection projectData={project} />
          <ProjectDescription
            description={project?.description}
            repositories={project?.repositories}
            technologies={technologies}
          />
          <Carousel />
          <ProjectTeamSection />
        </>
      )}
    </MainLayout>
  );
}

export default ProjectDetails;
