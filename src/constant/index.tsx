/**
 * @copyright 2025 fachrilfrmnsyh
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  Settings,
  Smartphone,
  User,
  Github,
  Linkedin,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'Resume', link: '#resume', icon: FileText },


  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/Fachrilfr', 
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/fchrlfr/', 
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/muhammad-fachril-firmansyah/', 
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/rekita.jpg',
    title: 'Rekita – Smart Waste Management App',
    tags: ['UI/UX Design'],
    projectLink: 'https://www.figma.com/deck/pVyBeXP80NBsWahPlVJhfG/Bismillah-PPT?node-id=5-3&t=hXjdeMJSmiCtFcxs-1',
    description: 'Rekita is a mobile app for smarter waste management using AI and Geo-Mapping, promoting efficient and eco-friendly habits.',
  },
  {
    imgSrc: '/images/shujia.jpg',
    title: 'Shujia - Book Home Service',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/ShujiaApp',
    description: 'Shujia is a web platform that simplifies booking trusted home services online. It offers various service categories with a responsive and user-friendly design. The platform provides a practical and efficient solution for everyday household needs.',
  },
  {
    imgSrc: '/images/tiket.jpg',
    title: 'Juaratiket – Ticket Booking Management System',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/juaratiket',
    description: 'Ticket booking app built with Laravel and Filament Admin Panel, featuring CRUD, search, and filtering for efficient event ticket management.',
  },
  {
    imgSrc: '/images/mountra.png',
    title: 'Mountra – Hiking Advisor Web App',
    tags: ['Frontend Web App'],
    projectLink: 'https://github.com/Fachrilfr/hiking-advisor',
    description: 'Mountra adalah website hiking berbasis ReactJS dengan fitur pencarian, filter, dan rating, serta UI responsif untuk pengalaman pengguna yang optimal.',
  },
  {
    imgSrc: '/images/estate.png',
    title: 'FchrlEstate – Real Estate App',
    tags: ['Frontend Web App'],
    projectLink: 'Link: https://github.com/Fachrilfr/react-realestate-ui/',
    description: 'React Real Estate App adalah proyek pembuatan UI aplikasi real estate berbasis ReactJS dengan desain responsif dan komponen reusable untuk memudahkan pengembangan.',
  },
];

const education: ExperienceType[] = [
  {
    year: '2020 – 2023',
    title: 'Student – Science Major',
    institute: 'SMA PRAMITA',
    desc: 'Actively participated in student council (OSIS) and Science Olympiads in Mathematics and Informatics.',
  },
  {
    year: '2023 – 2027',
    title: 'Student – Computer Science (Artificial Intelligence)',
    institute: 'Binus University',
    desc: 'Computer Science student specializing in Artificial Intelligence with a GPA of 3.85, focusing on software development, Machine Learning, and Computer Vision.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024 – 2025',
    title: 'Web Developer',
    institute: 'Pemoeda.idn',
    desc: 'Developed and optimized responsive and user-friendly websites, focusing on performance, speed, and SEO.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'HTML',
    imgSrc: '/images/tools/html.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/ts.png',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Laravel',
    imgSrc: '/images/tools/laravel.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.png',
  },
  {
    label: 'Python',
    imgSrc: '/images/tools/python.png',
  },
  {
    label: 'OpenCV',
    imgSrc: '/images/tools/opencv.png',
  },
];

const services: ServiceType[] = [
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '1 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '4 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  
];

const statsData: StatsType[] = [
  {
    number: '05+',
    label: 'Happy Clients',
  },
  {
    number: '01+',
    label: 'Years Of Experience',
  },
  {
    number: '10+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};