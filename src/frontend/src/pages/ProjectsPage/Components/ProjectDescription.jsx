/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/Projectutils/card";
import {
  Code,
  GitBranch,
  Layers,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

function ProjectDescription () {
  const projectInfo = {
    description: {
      short:
        "A cutting-edge technical solution designed to revolutionize development workflows.",
      full: "Our comprehensive platform integrates advanced technologies with intuitive design, providing developers with powerful tools to streamline their workflow. Built with scalability and performance in mind, it offers seamless integration capabilities and robust security features.",
      highlights: [
        {
          icon: (
            <Zap className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
          ),
          title: "High Performance",
          detail: "Optimized for maximum speed and efficiency.",
        },
        {
          icon: (
            <Shield className="w-6 h-6 text-green-500 dark:text-green-300" />
          ),
          title: "Enterprise Security",
          detail: "Bank-grade security protocols and encryption.",
        },
        {
          icon: <Clock className="w-6 h-6 text-blue-500 dark:text-blue-300" />,
          title: "Real-time Updates",
          detail: "Instant synchronization across all platforms.",
        },
      ],
    },
    technologies: ["React.js", "Node.js", "MongoDB", "Docker", "AWS"],
    repository: "https://github.com/project/repository",
    additionalRepositories: [
      {
        name: "Documentation Repository",
        link: "https://github.com/project/documentation",
      },
      {
        name: "API Repository",
        link: "https://github.com/project/api",
      },
      {
        name: "Frontend Repository",
        link: "https://github.com/project/frontend",
      },
    ],
    features: [
      {
        title: "Architecture Overview",
        description:
          "Microservices-based architecture ensuring scalability and maintainability.",
        icon: <Layers className="w-8 h-8 text-blue-500 dark:text-blue-300" />,
      },
      {
        title: "Technical Stack",
        description:
          "Modern technology stack with industry-standard tools and frameworks.",
        icon: <Code className="w-8 h-8 text-blue-500 dark:text-blue-300" />,
      },
      {
        title: "Version Control",
        description:
          "Comprehensive version control system with detailed documentation.",
        icon: (
          <GitBranch className="w-8 h-8 text-blue-500 dark:text-blue-300" />
        ),
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white dark:bg-[rgb(23,23,23)]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Project Description
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A brief overview of the project and its key features to improve
          development efficiency.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {projectInfo.description.highlights.map((highlight, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-100 dark:bg-[#3C3D37]"
          >
            <CardContent className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-gray-200 dark:bg-gray-700">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {projectInfo.features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300 bg-gray-100 dark:bg-[#3C3D37]"
          >
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technologies and Repository */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-100 dark:bg-[#3C3D37]">
          <CardHeader className="pb-2 dark:bg-[rgb(53,52,52)]">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Technologies Used
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {projectInfo.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#536066] transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-100 dark:bg-[#3C3D37]">
          <CardHeader className="pb-2 dark:bg-[rgb(53,52,52)]">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Code Repositories
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#536066] transition-all duration-300">
                <GitBranch className="w-5 h-5" />
                <a
                  href={projectInfo.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Main Repository
                </a>
              </li>
              {projectInfo.additionalRepositories.map((repo, index) => (
                <li
                  key={index}
                  className="text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#536066] transition-all duration-300"
                >
                  <GitBranch className="w-5 h-5" />
                  <a href={repo.link} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDescription;
