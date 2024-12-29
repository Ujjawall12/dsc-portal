import MainLayout from 'Layout/MainLayout';
import Section from '@/Layout/Section';
import { useState, useEffect } from 'react';
import { Code, Smartphone, Brain, Cloud, Database, Palette } from 'lucide-react';
import logo from "../assets/logo.png";
import about from "../assets/about.png";

// Domain data structure for better organization
const DOMAIN_DATA = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using cutting-edge technologies like React, Next.js, and TailwindCSS.",
    icon: Code,
    gradient: "from-blue-500 to-blue-600",
    skills: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    projects: 15
  },
  {
    title: "Mobile Development",
    description: "Creating innovative mobile applications for Android and iOS platforms using Flutter and React Native.",
    icon: Smartphone,
    gradient: "from-red-500 to-red-600",
    skills: ["Flutter", "React Native", "Firebase", "REST APIs"],
    projects: 12
  },
  {
    title: "Machine Learning",
    description: "Implementing AI and machine learning solutions to solve real-world problems using Python and TensorFlow.",
    icon: Brain,
    gradient: "from-green-500 to-green-600",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    projects: 8
  },
  {
    title: "Cloud Computing",
    description: "Leveraging cloud technologies to create scalable and reliable applications and services.",
    icon: Cloud,
    gradient: "from-yellow-500 to-yellow-600",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    projects: 10
  },
  {
    title: "Blockchain",
    description: "Exploring decentralized technologies and their applications in modern software solutions.",
    icon: Database,
    gradient: "from-purple-500 to-purple-600",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    projects: 5
  },
  {
    title: "UI/UX Design",
    description: "Designing user-centric interfaces and experiences that delight and engage users.",
    icon: Palette,
    gradient: "from-indigo-500 to-indigo-600",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    projects: 20
  }
];

// Customizable Image Component
const CustomizableImage = ({ src, alt }) => {
  return (
    <div className="flex-1">
      <img 
        src={src} 
        alt={alt} 
        style={{
          width: '150%',
          height: '700px'
        }}
        className="rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
      />
    </div>
  );
};

// DomainCard component
const DomainCard = ({ domain }) => {
  const Icon = domain.icon;

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl transition-all duration-500 
      hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${domain.gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">{domain.title}</h3>
      </div>

      <p className="text-gray-600 mb-4">{domain.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {domain.skills.map((skill, index) => (
          <span
            key={index}
            className={`text-sm px-3 py-1 rounded-full bg-opacity-10
              ${domain.gradient.includes('blue') ? 'bg-blue-500 text-blue-700' :
              domain.gradient.includes('red') ? 'bg-red-500 text-red-700' :
              domain.gradient.includes('green') ? 'bg-green-500 text-green-700' :
              domain.gradient.includes('yellow') ? 'bg-yellow-500 text-yellow-700' :
              domain.gradient.includes('purple') ? 'bg-purple-500 text-purple-700' :
              'bg-indigo-500 text-indigo-700'}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="font-medium">{domain.projects}</span>
        <span>projects delivered</span>
      </div>

      <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} 
        opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
    </div>
  );
};

// Main AboutUs component
function AboutUs() {
  const [faqStates, setFaqStates] = useState([false, false, false]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'stats', 'domains', 'contact', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setFaqStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <MainLayout>
      <Section>
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg p-4 px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="GDSC Logo" className="w-12 h-12 transition-transform hover:scale-110" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                GDSC NIT Hamirpur
              </span>
            </div>

            <nav className="flex gap-8">
              {[
                { href: "#about", text: "About", color: "#4285F4" },
                { href: "#stats", text: "Stats", color: "#34A853" },
                { href: "#domains", text: "Domains", color: "#EA4335" },
                { href: "#contact", text: "Contact", color: "#FBBC05" },
                { href: "#faq", text: "FAQ", color: "#4285F4" }
              ].map(({ href, text, color }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 font-medium transition-colors duration-300
                    ${activeSection === href.slice(1) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  {text}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
                      ${activeSection === href.slice(1) ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ backgroundColor: color }}
                  />
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="about" className="pt-32 pb-16 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="block text-blue-600">Empowering</span>
                <span className="block text-green-500">the Innovators</span>
                <span className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  of Tomorrow
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-bold text-red-500">GDSC NIT Hamirpur</span>, 
                we are proud to be part of a global community supported by 
                <span className="font-semibold text-green-500"> Google Developers</span>. 
                Our mission is to bridge the gap between theory and practice, enabling 
                students to create impactful solutions for real-world challenges.
              </p>
            </div>

            <CustomizableImage 
              src={about} 
              alt="About GDSC"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-16 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "3+ Years", subtitle: "Community Experience", gradient: "from-blue-500 to-blue-600" },
                { title: "20+", subtitle: "Projects Delivered", gradient: "from-red-500 to-red-600" },
                { title: "1000+", subtitle: "Positive Reviews", gradient: "from-yellow-500 to-yellow-600" },
                { title: "10K+", subtitle: "Global Members", gradient: "from-green-500 to-green-600" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${stat.gradient} p-8 rounded-xl text-white shadow-xl
                    transform transition-all duration-300 hover:-translate-y-2`}
                >
                  <h3 className="text-4xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-white/90">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section id="domains" className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 
                to-green-500 bg-clip-text text-transparent">
                Our Domains
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our diverse range of technical domains where we excel and 
                innovate to create impactful solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOMAIN_DATA.map((domain, index) => (
                <DomainCard key={index} domain={domain} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with Floating Cards */}
        <section id="contact" className="py-16 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Instagram", description: "Stay updated with events and projects", link: "https://www.instagram.com/dsc_nith?igsh=MWQ5dXdreG5hbnlvMw==", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", gradient: "from-pink-500 to-red-500" },
                { title: "LinkedIn", description: "Join our professional network", link: "https://www.linkedin.com/company/dsc-nit-hamirpur/", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", gradient: "from-blue-500 to-blue-600" },
                { title: "Email", description: "Reach out for inquiries", link: "mailto:gdscnith@gmail.com", logo: "https://tse1.mm.bing.net/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&pid=Api&P=0&h=180", gradient: "from-red-500 to-red-600" }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2
                    group relative overflow-hidden`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <img src={contact.logo} alt={contact.title} className="w-16 h-16 object-contain" />
                    <h3 className="text-xl font-bold">{contact.title}</h3>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient}
                    opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
          
          <section id="faq" className="py-16 px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { question: "What is GDSC?", answer: "GDSC stands for Google Developer Student Clubs, an initiative by Google to help students bridge the gap between theory and practice." },
                { question: "How can I join GDSC NIT Hamirpur?", answer: "You can join by filling out our application form and participating in our orientation event held at the beginning of the academic year." },
                { question: "Do I need prior experience to join?", answer: "No, GDSC is open to all students irrespective of their skill level. We believe in learning and growing together!" }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden
                    ${faqStates[index] ? 'bg-blue-50' : 'bg-white'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <span className={`transform transition-transform duration-300
                      ${faqStates[index] ? 'rotate-180' : 'rotate-0'}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`transition-all duration-300 px-6
                    ${faqStates[index] ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>
    </MainLayout>
  );
}

export default AboutUs;