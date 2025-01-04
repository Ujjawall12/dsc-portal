import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Palette,
} from 'lucide-react';

// Domain data structure
const DOMAIN_DATA = [
  {
    title: 'Web Development',
    description:
      'Building responsive and modern websites using cutting-edge technologies like React, Next.js, and TailwindCSS.',
    icon: Code,
    gradient: 'from-blue-500 to-blue-600',
    skills: ['React', 'Node.js', 'TailwindCSS', 'MongoDB'],
    projects: 15,
  },
  {
    title: 'Mobile Development',
    description:
      'Creating innovative mobile applications for Android and iOS platforms using Flutter and React Native.',
    icon: Smartphone,
    gradient: 'from-red-500 to-red-600',
    skills: ['Flutter', 'React Native', 'Firebase', 'REST APIs'],
    projects: 12,
  },
  {
    title: 'Machine Learning',
    description:
      'Implementing AI and machine learning solutions to solve real-world problems using Python and TensorFlow.',
    icon: Brain,
    gradient: 'from-green-500 to-green-600',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    projects: 8,
  },
  {
    title: 'Cloud Computing',
    description:
      'Leveraging cloud technologies to create scalable and reliable applications and services.',
    icon: Cloud,
    gradient: 'from-yellow-500 to-yellow-600',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    projects: 10,
  },
  {
    title: 'Blockchain',
    description:
      'Exploring decentralized technologies and their applications in modern software solutions.',
    icon: Database,
    gradient: 'from-purple-500 to-purple-600',
    skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    projects: 5,
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user-centric interfaces and experiences that delight and engage users.',
    icon: Palette,
    gradient: 'from-indigo-500 to-indigo-600',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    projects: 20,
  },
];

export default DOMAIN_DATA;
