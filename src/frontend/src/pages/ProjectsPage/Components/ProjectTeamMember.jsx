import { Card, CardContent } from "@/components/Projectutils/card";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "FOUNDER",
      image: "/sample-image.jpg",
      social: {
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        email: "mailto:sarah@company.com",
      },
    },
    {
      name: "Michael Chen",
      role: "DEVELOPER",
      image: "/sample-image.jpg",
      social: {
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen",
        email: "mailto:michael@company.com",
      },
    },
    {
      name: "Emily Parker",
      role: "DESIGNER",
      image: "/sample-image.jpg",
      social: {
        twitter: "https://twitter.com/emilyparker",
        linkedin: "https://linkedin.com/in/emilyparker",
        github: "https://github.com/emilyparker",
        email: "mailto:emily@company.com",
      },
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm hover:shadow-md hover:scale-105 transform transition-transform duration-300 bg-gray-100 dark:bg-[#3C3D37]"
          >
            <CardContent className="flex flex-col items-center p-8">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-500 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wider mb-6">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                <a
                  href={member.social.twitter}
                  className="text-purple-900 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-purple-900 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="text-purple-900 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.social.email}
                  className="text-purple-900 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  aria-label={`${member.name}'s Email`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
