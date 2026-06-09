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
  Brain,
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
    imgSrc: '/images/asphalteye.png',
    title: 'AsphaltEye – Road Damage Detection',
    tags: ['AI & Full-Stack'],
    projectLink: 'https://github.com/Fachrilfr/Road-Damage-Detection',
    description: 'An AI-powered road damage detection and community reporting platform using YOLOv11 and computer vision to improve Indonesian road safety.',
    tech: ['YOLOv11', 'PyTorch', 'OpenCV', 'Python', 'Flask', 'React.js', 'Vite', 'Tailwind CSS'],
    role: 'Full-Stack & AI Engineer',
    purpose: 'This project was driven by the critical need for road safety in Indonesia. According to 2023 data from the National Criminal Information Center (Pusiknas) of the Indonesian National Police, over 1,200 traffic accidents were caused by damaged road conditions. Traditional road inspections are manual, slow, and high-risk. To address this, AsphaltEye was created to automate the early detection of potholes and cracks using computer vision. Additionally, it empowers the public to submit GPS-tagged reports, enabling authorities to perform faster, targeted repairs.',
    process: 'As a solo developer, I handled the end-to-end full-stack and AI lifecycle: preparing datasets, training the computer vision model, building a Flask API for automated inference, and creating a responsive React UI. The codebase was structured using Git with clean commit conventions to ensure long-term maintainability. The primary challenge was balancing the AI model\'s accuracy in detecting hairline cracks under various lighting conditions with optimizing the Flask API latency to prevent delays during real-time media inference.',
    outcome: 'The project successfully delivered a functional web application capable of real-time road damage detection and defect counting, complemented by a production-ready community reporting system that allows citizens to submit verified reports with photos and precise GPS coordinates. Through this experience, I gained invaluable lessons in bridging deep learning models with production-ready web applications. I learned the importance of optimizing AI model weights for computational efficiency and mastered how to architect a full-stack system that handles heavy media processing asynchronously.'
  },
  {
    imgSrc: '/images/tanara.png',
    title: 'Tanara – SIBI Sign Language Detector',
    tags: ['AI & Full-Stack'],
    projectLink: 'https://github.com/Fachrilfr/SIBI-Sign-Language-Detector',
    description: 'A real-time SIBI sign language translator and learning application leveraging computer vision, MediaPipe, and MobileNetV2.',
    tech: ['TensorFlow', 'Keras', 'MediaPipe', 'OpenCV', 'Python', 'Flask', 'React.js', 'Vite', 'Vanilla CSS'],
    role: 'Full-Stack & AI Engineer',
    purpose: 'Communication is a fundamental human right, yet the deaf and hard-of-hearing community faces significant communication barriers in daily life. Although SIBI (Sistem Isyarat Bahasa Indonesia) is the standard system for spelling, it remains unfamiliar to the general public. Tanara (Teman Bicara) was created to bridge this gap. By leveraging computer vision and deep learning, Tanara acts as an interactive companion that translates SIBI fingerspelling and numbers into readable text in real-time, making learning and understanding sign language accessible, inclusive, and engaging for everyone.',
    process: 'As a solo developer, I handled the end-to-end full-stack and AI development: integrating MediaPipe Hands for hand tracking, training a MobileNetV2 model in TensorFlow/Keras to classify 36 SIBI gestures (A–Y and 0–9), building a Flask API for real-time inference, and creating a React + Vite frontend using Vanilla CSS. The primary challenge was training the AI model to remain robust against varied backgrounds and lighting conditions during dynamic hand movements, while simultaneously optimizing the Flask inference pipeline to ensure a smooth, lag-free live webcam translation experience.',
    outcome: 'The project delivered a fully functional web application for SIBI translation and learning that recognizes gestures from live webcams or media uploads, complete with a text-to-sign visualizer and a gamified 60-second quiz engine. Through this experience, I gained invaluable lessons in optimizing lightweight deep learning architectures (MobileNetV2) for resource-constrained environments. I also mastered how to seamlessly synchronize frontend state management with real-time video streaming data from the backend to create a highly responsive and engaging user experience.'
  },
  {
    imgSrc: '/images/hema.png',
    title: 'HemaVision – Automated Blood Cell Analyzer',
    tags: ['AI & Full-Stack'],
    projectLink: 'https://github.com/Fachrilfr/Blood-Analyzer',
    description: 'An AI-powered automated blood smear analysis system using YOLOv11 to detect and count red blood cells, white blood cells, and platelets.',
    tech: ['YOLOv11', 'PyTorch', 'OpenCV', 'Python', 'Flask', 'React.js', 'Vite', 'Matplotlib', 'ReportLab'],
    role: 'Full-Stack & AI Engineer',
    purpose: 'To automate the manual analysis of blood smear slides (counting RBC, WBC, and platelets) using artificial intelligence to accelerate laboratory workflows and detect potential blood disorders like Anemia, Leukopenia, and Thrombocytopenia.',
    process: 'Involved training a YOLOv11 model with data.yaml, building a Flask backend API for single and batch image inference, synchronizing React frontend state for interactive visual data representation (SVG-based donut and bar charts), and dynamically generating PDF medical reports.',
    outcome: 'Successfully delivered a functional web application capable of processing microscopic blood samples (individually or in batches), visualizing cell count statistics, and generating standardized medical PDF reports for download.'
  },
  {
    imgSrc: '/images/sistemku.png',
    title: 'Sistemku – School Attendance & DSS',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/smkspenerbangandirghantara-hub/absensi_siswa-main',
    description: 'A school attendance and decision support system (DSS) for SMK Penerbangan Dirghantara using the Simple Additive Weighting (SAW) method.',
    tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Turso', 'Better Auth', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    purpose: 'As a Mathematics teacher at SMK Penerbangan Dirghantara (SMKPD), I designed this application to resolve inefficient paper-based attendance prone to data loss and subjectivity in selecting top students. To eliminate these slow and biased workflows, this system acts as an objective Decision Support System (DSS) integrating real-time attendance, academic scores, and disciplinary metrics. Leveraging the mathematical precision of the Simple Additive Weighting (SAW) method, it transforms school administration into a transparent, fast, and accurate ranking process.',
    process: 'Developed using Agile-Scrum, the project began by aligning system criteria with school standards alongside the Vice Principal of Curriculum. As the sole Full-Stack Developer, I executed the entire lifecycle across structured sprints: building the Next.js/Tailwind UI, managing the Drizzle ORM and Turso (SQLite) database, and implementing the SAW algorithm under Git control. The main challenge was mapping dynamic, qualitative school criteria into a rigid mathematical formula while optimizing database queries to calculate SAW normalization matrices on the fly for hundreds of records.',
    outcome: 'The project successfully delivered a cloud-ready platform that replaces manual paper tracking with real-time digital attendance, automates rankings via the SAW algorithm, and includes Excel/PDF exports to accelerate administrative reporting. Through this experience, I learned to translate pure mathematical theories into practical code that solves real-world problems. I also deepened my expertise in architecting high-performance Next.js applications and realized the vital importance of continuous stakeholder alignment to deliver an impactful solution.'
  },
  {
    imgSrc: '/images/fitsync.png',
    title: 'FitSync – Fitness Workout App',
    tags: ['Mobile App'],
    projectLink: 'https://github.com/Fachrilfr/fitness_workout_app',
    description: 'A premium, responsive mobile UI kit and prototype built in Flutter for workout, meal, and sleep tracking.',
    tech: ['Flutter', 'Kotlin', 'Dart', 'fl_chart', 'Git', 'Android Studio'],
    role: 'Mobile Developer',
    purpose: 'FitSync Fitness Workout App was designed to resolve common bottlenecks in existing fitness tools: cluttered user interfaces, rigid data visualization, and tedious logging workflows that quickly drain user motivation. To eliminate these barriers, this application unifies guided workout tracking, meal planning, and sleep analysis into a single platform. Its purpose is to deliver a modern, premium, and highly intuitive user interface that transforms the daily hassle of health tracking into an engaging and effortless habit.',
    process: 'I developed this application as a personal project to build a pixel-perfect mobile UI kit in Flutter. The process began with designing a consistent custom style sheet containing tailored color schemas and Poppins typography, followed by structuring the app into modular features like workout, meal, and sleep logs. The primary challenge was ensuring the responsiveness of complex widgets and multi-dimensional charts using fl_chart, keeping them clean, uniform, and visually precise across various Android and iOS screen sizes.',
    outcome: 'The project successfully delivered a fully interactive and responsive frontend prototype covering the entire UI flow for both Android and iOS. The codebase is cleanly structured with separate directories for reusable widgets and view models, making it production-ready for future state management (such as Bloc or Provider) and backend integration. Through this experience, I gained invaluable lessons in optimizing mobile graphic rendering and learned how to architect a scalable, highly maintainable frontend codebase.'
  },
  {
    imgSrc: '/images/rekita.jpg',
    title: 'Rekita – Smart Waste Management App',
    tags: ['UI/UX Design'],
    projectLink: 'https://www.figma.com/deck/pVyBeXP80NBsWahPlVJhfG/Bismillah-PPT?node-id=5-3&t=hXjdeMJSmiCtFcxs-1',
    description: 'An AI-powered mobile UI/UX design project bridging communities with recycling facilities via image recognition, geo-mapping, and gamification.',
    tech: ['Figma', 'FigJam', 'Adobe Illustrator', 'User Research'],
    role: 'UI/UX Designer',
    purpose: 'Rekita is an AI-powered mobile UI/UX design project created to resolve critical bottlenecks in Indonesia\'s waste management: widespread public confusion over waste sorting, lack of accessible geo-mapping for recycling centers, and low recycling motivation. To eliminate these conventional and discouraging workflows, Rekita directly bridges eco-conscious communities with local recycling facilities. By leveraging an AI Image Recognition Scan, an interactive GPS-based location finder, and a gamified Eco-Points reward system, the application transforms daily recycling into an effortless, fast, and educational habit.',
    process: 'The design strictly followed the Design Thinking methodology: Empathize, Define, Ideate, Prototype, and Test. The process began by mapping user needs using personas, then synthesizing findings into an Affinity Diagram and Prioritization Matrix. The primary challenge was formulating 6 How-Might-We (HMW) questions and conducting a Crazy-8s session to seamlessly integrate complex features like real-time AI scanning, live GPS routing, and a character evolution game into a clean, minimalist, and accessible mobile interface.',
    outcome: 'The project successfully delivered a mature, scalable, and intuitive digital blueprint ready for full-scale development. The finalized user interface eliminated navigation friction, creating a seamless flow from the instant AI camera scan directly to finding the closest drop-off point. Through this experience, I gained invaluable lessons in iteratively validating information architecture to align advanced AI features with user psychology. I also mastered how personalized dashboard visualizations—tracking Eco-Points and environmental metrics like estimated CO2 reduction—can effectively foster long-term sustainable habits.'
  },
  {
    imgSrc: '/images/shujia.jpg',
    title: 'Shujia - Book Home Service',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/ShujiaApp',
    description: 'Shujia is a web platform that simplifies booking trusted home services online. It offers various service categories with a responsive and user-friendly design. The platform provides a practical and efficient solution for everyday household needs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    role: 'Fullstack Developer',
    purpose: 'To provide a secure, responsive, and easily accessible online booking platform for cleaning and home maintenance services to resolve daily household needs.',
    process: 'Built a RESTful API server using Node.js and Express, designed MongoDB document schemas, integrated JWT-based security authentication, and developed an interactive web interface using React and Tailwind CSS.',
    outcome: 'A fully functional real-time home service booking platform, complete with booking management, user booking history, and an administrative control panel.'
  },
  {
    imgSrc: '/images/tiket.jpg',
    title: 'Juaratiket – Ticket Booking Management System',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/juaratiket',
    description: 'Ticket booking app built with Laravel and Filament Admin Panel, featuring CRUD, search, and filtering for efficient event ticket management.',
    tech: ['Laravel', 'Filament Admin', 'PHP', 'MySQL', 'Tailwind CSS'],
    role: 'Backend Developer',
    purpose: 'To build a large-scale event ticketing and booking management system with a robust admin panel for organizers to manage tickets, schedules, and transactions.',
    process: 'Designed a relational MySQL database, configured database relationships in Laravel ORM models, integrated Filament Admin Panel for rapid CRUD data management, and implemented advanced search and filter features for ticket bookings.',
    outcome: 'A stable, secure, and easily manageable e-ticketing system complete with a concise analytical dashboard for administrators.'
  },
  {
    imgSrc: '/images/mountra.png',
    title: 'Mountra – Hiking Advisor Web App',
    tags: ['Frontend Web App'],
    projectLink: 'https://github.com/Fachrilfr/hiking-advisor',
    description: 'Mountra is a ReactJS-based hiking website featuring search, filtering, and rating features, with a responsive UI for an optimal user experience.',
    tech: ['React.js', 'Vite.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    role: 'Frontend Developer',
    purpose: 'To build a hiking guide application for Indonesian mountains, featuring difficulty filters, mountain location searches, and instant climber ratings.',
    process: 'Designed a clean and interactive interface layout using Tailwind CSS, implemented client-side search logic in React, and added smooth component transition animations using Framer Motion.',
    outcome: 'An interactive, fast, and responsive hiking website with dynamic visual navigation for outdoor enthusiasts.'
  },
  {
    imgSrc: '/images/estate.png',
    title: 'FchrlEstate – Real Estate App',
    tags: ['Frontend Web App'],
    projectLink: 'https://github.com/Fachrilfr/react-realestate-ui/',
    description: 'FchrlEstate is a ReactJS real estate UI project featuring responsive layouts and reusable components to facilitate property listing exploration.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'CSS Grid/Flexbox'],
    role: 'Frontend Developer',
    purpose: 'To build a modern real estate frontend prototype for searching property agents, apartment rentals, and house sales using highly modular and user-friendly components.',
    process: 'Developed modular components with TypeScript for type safety, implemented interactive filters (price, bedrooms, property type), and structured responsive grid layouts for both mobile and desktop screen sizes.',
    outcome: 'A high-performance property frontend prototype with intuitive hover animations and structured code ready for production integration.'
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
    year: '2025 – 2026',
    title: 'Mathematics Teacher',
    institute: 'SMK Penerbangan Dirghantara',
    desc: 'Worked as a mathematics teacher while developing and managing the school profile website for SMKPD. Built responsive web pages, managed content updates, and optimized performance to deliver information effectively.',
  },
  {
    year: '2025 – 2026',
    title: 'Informatics Teacher',
    institute: 'SMA Pramita',
    desc: 'Worked as an Informatics teacher at SMA Pramita, focusing on teaching programming fundamentals and guiding students in coding, problem-solving, and developing basic software projects.',
  },
  {
    year: '2024 – 2025',
    title: 'Web Developer',
    institute: 'Pemoeda.idn',
    desc: 'Designed and developed responsive web applications with a focus on performance, scalability, and user-friendly design. Optimized speed, usability, and SEO while delivering reliable and maintainable solutions.',
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
    label: 'Next.js',
    imgSrc: '/images/tools/nextjs.svg',
  },
  {
    label: 'Vite',
    imgSrc: '/images/tools/vite.svg',
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
    label: 'PHP',
    imgSrc: '/images/tools/php.svg',
  },
  {
    label: 'MySQL',
    imgSrc: '/images/tools/mysql.png',
  },
  {
    label: 'SQLite',
    imgSrc: '/images/tools/sqlite.svg',
  },
  {
    label: 'Python',
    imgSrc: '/images/tools/python.png',
  },
  {
    label: 'Flask',
    imgSrc: '/images/tools/flask.svg',
  },
  {
    label: 'PyTorch',
    imgSrc: '/images/tools/pytorch.svg',
  },
  {
    label: 'TensorFlow',
    imgSrc: '/images/tools/tensorflow.svg',
  },
  {
    label: 'Keras',
    imgSrc: '/images/tools/keras.svg',
  },
  {
    label: 'OpenCV',
    imgSrc: '/images/tools/opencv.png',
  },
  {
    label: 'Flutter',
    imgSrc: '/images/tools/flutter.svg',
  },
  {
    label: 'Dart',
    imgSrc: '/images/tools/dart.svg',
  },
  {
    label: 'Kotlin',
    imgSrc: '/images/tools/kotlin.svg',
  },
  {
    label: 'Android Studio',
    imgSrc: '/images/tools/androidstudio.svg',
  },
  {
    label: 'Git',
    imgSrc: '/images/tools/git.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '1 Project',
    icon: <Layers className='h-6 w-6 text-[#a855f7]' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '4 Projects',
    icon: <Globe className='h-6 w-6 text-[#e8445a]' />,
  },
  {
    title: 'Mobile App',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '2 Projects',
    icon: <Smartphone className='h-6 w-6 text-[#f57f42]' />,
  },
  {
    title: 'Machine Learning',
    desc: 'Developing and deploying intelligent models, computer vision systems, and deep learning solutions.',
    projects: '2 Projects',
    icon: <Brain className='h-6 w-6 text-[#f5c542]' />,
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
    text: 'Working with Fachril was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Fachril brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, Fachril handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
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