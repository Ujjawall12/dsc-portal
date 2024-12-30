import React from 'react';
import { Card, CardContent } from '@/components/Projectutils/card';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "FOUNDER",
      image: "/api/placeholder/150/150",
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
      image: "/api/placeholder/150/150",
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
      image: "/api/placeholder/150/150",
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
      <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm hover:shadow-md hover:scale-105 transform transition-transform duration-300"
          >
            <CardContent className="flex flex-col items-center p-8">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 tracking-wider mb-6">{member.role}</p>

              {/* Social Links */}
              <div className="flex gap-6">
                <a
                  href={member.social.twitter}
                  className="text-purple-900 hover:text-purple-700 transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-purple-900 hover:text-purple-700 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="text-purple-900 hover:text-purple-700 transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.social.email}
                  className="text-purple-900 hover:text-purple-700 transition-colors"
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
