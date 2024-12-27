import MainLayout from 'Layout/MainLayout';
import Section from '@/Layout/Section';
import { useState } from 'react';
import logo from "../assets/logo.png";
import about from "../assets/about.png";

function AboutUs() {
  // State to manage the visibility of FAQ answers
  const [faqStates, setFaqStates] = useState([false, false, false]);

  // Function to toggle FAQ answers visibility
  const toggleFaq = (index) => {
    setFaqStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <MainLayout>
      <Section>
        {/* Header Section */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img src={logo} alt="GDSC Logo" className="w-12 h-auto" />
            <span className="font-bold text-lg text-[#000000]">GDSC NIT Hamirpur</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            {/* Anchor links for navigation */}
            <a href="#about" className="font-medium text-gray-700 hover:text-[#4285F4] transition-all duration-300 hover:underline underline-offset-4">About</a>
            <a href="#stats" className="font-medium text-gray-700 hover:text-[#34A853] transition-all duration-300 hover:underline underline-offset-4">Stats</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-[#EA4335] transition-all duration-300 hover:underline underline-offset-4">Contact</a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-[#FBBC05] transition-all duration-300 hover:underline underline-offset-4">FAQ</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between bg-gray-50 shadow p-8 my-4 rounded-lg">
          <div className="flex-1 space-y-4">
            {/* Title and description for Hero Section */}
            <h1 className="text-5xl font-extrabold text-[#4285F4] leading-tight tracking-wide mb-6">Empowering the Innovators of Tomorrow</h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              At <span className="font-bold text-[#EA4335]">GDSC NIT Hamirpur</span>, we are proud to be part of a global community supported by <span className="font-semibold text-[#34A853]">Google Developers</span>. 
              Our mission is to bridge the gap between academic theory and practical application, enabling students to create impactful solutions for real-world challenges while fostering collaboration and innovation.
            </p>
          </div>
          <div className="flex-1">
            {/* Image for Hero Section */}
            <img src={about} alt="About GDSC" className="rounded-lg shadow-lg w-full md:w-[600px] lg:w-[700px] h-[700px] transform hover:scale-105 transition duration-500 ease-in-out" />
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-gray-100 rounded-lg my-8">
          {[ 
            { title: "3+ Years", subtitle: "Community Experience", color: "#4285F4" },
            { title: "20+", subtitle: "Projects Delivered", color: "#EA4335" },
            { title: "1000+", subtitle: "Positive Reviews", color: "#FBBC05" },
            { title: "10K+", subtitle: "Global Members", color: "#34A853" },
          ].map((stat, index) => (
            <div key={index} style={{ borderLeft: `4px solid ${stat.color}` }} className="text-center bg-white p-4 rounded-lg shadow transform transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] cursor-pointer">
              <h3 className="text-xl font-bold" style={{ color: stat.color }}>{stat.title}</h3>
              <p>{stat.subtitle}</p>
            </div>
          ))}
        </section>

        {/* Domain Section */}
        <section id="domains" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-lg my-8">
          {[ 
            { title: "Web Development", description: "Building responsive and modern websites using cutting-edge technologies.", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", bgColor: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
            { title: "Mobile Development", description: "Creating innovative mobile applications for Android and iOS platforms.", logo: "https://tse1.mm.bing.net/th?id=OIP.jK151BXi2ItrJCwMv1PCcAHaDn&pid=Api&P=0&h=180", bgColor: "bg-red-500", hoverColor: "hover:bg-red-600" },
            { title: "Machine Learning", description: "Implementing AI and machine learning solutions to solve real-world problems.", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", bgColor: "bg-green-500", hoverColor: "hover:bg-green-600" },
            { title: "Cloud Computing", description: "Leveraging cloud technologies to create scalable and efficient applications.", logo: "https://tse3.mm.bing.net/th?id=OIP.Sd4Hxz8_CqID29kyj5-k9wHaEc&pid=Api&P=0&h=180", bgColor: "bg-yellow-500", hoverColor: "hover:bg-yellow-600" },
            { title: "Blockchain", description: "Exploring decentralized technologies and their applications in various fields.", logo: "https://tse3.mm.bing.net/th?id=OIP.YY0LYfQmencm_fU82ufQTwHaEK&pid=Api&P=0&h=180", bgColor: "bg-indigo-500", hoverColor: "hover:bg-indigo-600" },
            { title: "UI/UX Design", description: "Designing user-centric interfaces and creating seamless user experiences.", logo: "https://tse4.mm.bing.net/th?id=OIP.JEKb3vltxtalPhYda59hNAHaHO&pid=Api&P=0&h=180", bgColor: "bg-purple-500", hoverColor: "hover:bg-purple-600" },
          ].map((domain, index) => (
            <div 
              key={index} 
              className={`p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] relative overflow-hidden ${domain.bgColor} ${domain.hoverColor}`}
            >
              <div className="flex items-center mb-4">
                <img src={domain.logo} alt={`${domain.title} Logo`} className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-bold text-white">{domain.title}</h3>
              </div>
              <p className="text-white opacity-0 transition-opacity duration-300 hover:opacity-100">{domain.description}</p>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-8 rounded-lg mb-4 shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Contact our friendly team</h1>
          <p className="text-center text-gray-600 mb-8">Let us know how we can help.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[ 
              { title: "Follow us on Instagram", description: "Stay updated with our latest events and projects.", link: "https://www.instagram.com/dsc_nith?igsh=MWQ5dXdreG5hbnlvMw==", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", color: "text-yellow-500" },
              { title: "Connect with us on LinkedIn", description: "Join our professional network and collaborations.", link: "https://www.linkedin.com/company/dsc-nit-hamirpur/", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", color: "text-blue-700" },
              { title: "Email Us", description: "For inquiries, feel free to reach out.", link: "mailto:gdscnith@gmail.com", logo: "https://tse1.mm.bing.net/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&pid=Api&P=0&h=180", color: "text-red-500" },
            ].map((contact, index) => (
              <div
                key={index}
                className="text-center p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-4">
                  <img src={contact.logo} alt={`${contact.title} Logo`} className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-black">{contact.title}</h3>
                <p className="text-gray-700">{contact.description}</p>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold hover:underline ${contact.color}`}
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="flex justify-center items-center min-h-screen bg-white mt-0">
  <div className="p-8 rounded-lg bg-white shadow-lg w-full max-w-4xl">
    <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
    <div className="space-y-4">
      {[
        {
          question: "What is GDSC?",
          answer: "GDSC stands for Google Developer Student Clubs, an initiative by Google to help students bridge the gap between theory and practice.",
        },
        {
          question: "How can I join GDSC NIT Hamirpur?",
          answer: "You can join by filling out our application form and participating in our orientation event held at the beginning of the academic year.",
        },
        {
          question: "Do I need prior experience to join?",
          answer: "No, GDSC is open to all students irrespective of their skill level. We believe in learning and growing together!",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className={`cursor-pointer p-4 border-l-4 rounded-lg transition-all ${
            faqStates[index] ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:bg-gray-50"
          }`}
          onClick={() => toggleFaq(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <span
              className={`text-xl font-bold transition-transform ${
                faqStates[index] ? "rotate-180" : "rotate-0"
              }`}
            >
              {faqStates[index] ? "▲" : "▼"}
            </span>
          </div>
          {faqStates[index] && (
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      </Section>
    </MainLayout>
  );
}

export default AboutUs;
