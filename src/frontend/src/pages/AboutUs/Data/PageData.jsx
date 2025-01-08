import { Star,
  Terminal,
  Globe,
  Zap } from "lucide-react"

const achievements = [
  {
    title: "Projects Completed",
    count: "50+",
    description: "Successful projects across various domains.",
    gradient: "from-blue-500 to-green-500",
  },
  {
    title: "Total Members Associated",
    count: "500+",
    description: "Members who have been part of our community.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Experience",
    count: "3+ Years",
    description:
      "Experience and growth within the prestigious NIT Hamirpur.",
    gradient: "from-yellow-500 to-red-500",
  },
]
const headerCards = [
  {
    icon: <Terminal className="w-8 h-8" />,
    title: "Code & Create",
    description:
      "Build innovative solutions with cutting-edge tech",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Network",
    description: "Connect with developers worldwide",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Growth",
    description: "Accelerate your tech journey",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Excellence",
    description: "Achieve technical mastery",
    gradient: "from-red-500 to-red-600",
  },
]

const socialLinks = [
  {
    title: "Instagram",
    description: "Stay updated with events and projects",
    link: "https://www.instagram.com/dsc_nith?igsh=MWQ5dXdreG5hbnlvMw==",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "LinkedIn",
    description: "Join our professional network",
    link: "https://www.linkedin.com/company/dsc-nit-hamirpur/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Email",
    description: "Reach out for inquiries",
    link: "mailto:gdscnith@gmail.com",
    logo: "https://tse1.mm.bing.net/th?id=OIP.IpB5yPUkCFHOzlmM-O7ncAHaFW&pid=Api&P=0&h=180",
    gradient: "from-red-500 to-red-600",
  },
]

const faq = [
  {
    question: "What is GDSC?",
    answer:
      "GDSC stands for Google Developer Student Clubs, an initiative by Google to help students bridge the gap between theory and practice.",
  },
  {
    question: "How can I join GDSC NIT Hamirpur?",
    answer:
      "You can join by filling out our application form and participating in our orientation event held at the beginning of the academic year.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No, GDSC is open to all students irrespective of their skill level. We believe in learning and growing together!",
  },
]

export { achievements, headerCards, socialLinks, faq }