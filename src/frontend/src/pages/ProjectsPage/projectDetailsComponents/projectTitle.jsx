import React from "react";
import { Card, CardContent } from "@/components/Projectutils/card";
import { Badge } from "@/components/Projectutils/badge";
import { Users, Calendar, Tag, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProjectHeroSection = ({ projectData }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const statusColors = {
    "Completed": "bg-emerald-500",
    "In Progress": "bg-blue-500",
    "Planned": "bg-amber-500"
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background with Image and Gradient */}
      <div className="absolute inset-0">
        <img
          src="/sample-image.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="w-full lg:w-2/3 space-y-12">
          {/* Header Section */}
          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-500/20 text-white hover:bg-blue-500/30">
                {projectData.category}
              </Badge>
              <Badge variant="secondary" className={`${statusColors[projectData.status]} text-white`}>
                {projectData.status}
              </Badge>
            </div>
            
            <h1 className="text-6xl font-bold text-white leading-tight">
              {projectData.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              {projectData.description}
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Card className="bg-white/10 backdrop-blur-md border-0">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-300" />
                  <span className="text-gray-200">
                    {new Date(projectData.startDate).toLocaleDateString('en-US', { 
                      month: 'long',
                      year: 'numeric'
                    })} - {new Date(projectData.endDate).toLocaleDateString('en-US', { 
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-blue-300" />
                  <span className="text-gray-200">{projectData.category}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-300" />
                    <span className="text-gray-200 font-medium">Contributors</span>
                  </div>
                  <div className="ml-8 space-y-2">
                    {projectData.contributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img
                          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${contributor.name}`}
                          alt={contributor.name}
                          className="w-6 h-6 rounded-full bg-gray-700"
                        />
                        <a
                          href={contributor.profileUrl}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {contributor.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div 
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Total Downloads",
                value: `${projectData.statistics.dailyActivity}K+`,
                icon: <ExternalLink className="w-5 h-5 text-blue-300" />
              },
              {
                label: "User Rating",
                value: projectData.statistics.userRating,
                icon: <Star className="w-5 h-5 text-yellow-300" />
              },
              {
                label: "Active Users",
                value: `${projectData.statistics.dailyUsers}K+`,
                icon: <Users className="w-5 h-5 text-green-300" />
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  {stat.icon}
                  <p className="text-gray-300">{stat.label}</p>
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Example usage with sample data
const ExampleProjectHeroSection = () => {
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

  return <ProjectHeroSection projectData={sampleProjectData} />;
};

export default ExampleProjectHeroSection;