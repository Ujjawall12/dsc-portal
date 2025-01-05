/* eslint-disable no-unused-vars */
import MainLayout from "@/Layout/MainLayout";

import { useParams } from "react-router-dom";
import React from "react";
import TechnicalFeaturesSection from "./Components/ProjectDescription";
import TeamSection from "./Components/ProjectTeamMember";
import Carousel from "./Components/ProjectCarousel";
import ProjectHeroSection from "./Components/ProjectTitle";

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

function ProjectDetails() {
  return (
    <MainLayout>
      <ProjectHeroSection projectData={sampleProjectData} />
      <TechnicalFeaturesSection />
      <Carousel />
      <TeamSection />
    </MainLayout>
  );
}

export default ProjectDetails;
