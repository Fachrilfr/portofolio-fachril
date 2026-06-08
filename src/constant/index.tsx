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
    imgSrc: '/images/asphalteye.png',
    title: 'AsphaltEye – Road Damage Detection',
    tags: ['Machine Learning'],
    projectLink: 'https://github.com/Fachrilfr/Road-Damage-Detection',
    description: 'Sistem deteksi kerusakan jalan otomatis berbasis Computer Vision dan Machine Learning.',
    tech: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'Roboflow'],
    role: 'Machine Learning Engineer',
    purpose: 'Mengotomatisasi proses identifikasi kerusakan jalan raya seperti lubang (potholes) dan retakan secara real-time demi keselamatan pengendara dan mempermudah dinas pekerjaan umum.',
    process: 'Melakukan pengumpulan dataset gambar jalan raya dari berbagai sumber, melakukan pelabelan (labeling) objek menggunakan Roboflow, melatih model klasifikasi dan deteksi objek YOLOv8 dengan framework PyTorch, serta mengintegrasikan pemrosesan video dan citra menggunakan OpenCV.',
    outcome: 'Model klasifikasi berhasil mendeteksi kerusakan jalan dengan akurasi rata-rata (mAP50) mencapai 89%, memangkas waktu survei jalan manual secara signifikan.'
  },
  {
    imgSrc: '/images/rekita.jpg',
    title: 'Rekita – Smart Waste Management App',
    tags: ['UI/UX Design'],
    projectLink: 'https://www.figma.com/deck/pVyBeXP80NBsWahPlVJhfG/Bismillah-PPT?node-id=5-3&t=hXjdeMJSmiCtFcxs-1',
    description: 'Rekita is a mobile app for smarter waste management using AI and Geo-Mapping, promoting efficient and eco-friendly habits.',
    tech: ['Figma', 'FigJam', 'Adobe Illustrator', 'User Research'],
    role: 'UI/UX Designer',
    purpose: 'Mendesain purwarupa aplikasi pengelolaan sampah cerdas yang memudahkan penjemputan sampah terpilah oleh pengepul secara terjadwal untuk meningkatkan kesadaran daur ulang di masyarakat.',
    process: 'Melakukan riset wawancara dengan pengguna, menyusun peta empati (empathy maps), merancang arsitektur informasi, membuat wireframe low-fidelity hingga high-fidelity mockup, serta menyusun prototype interaktif di Figma beserta presentasi deck.',
    outcome: 'Menghasilkan desain antarmuka aplikasi seluler yang modern, bersih, intuitif, dan siap diserahkan ke tim frontend developer.'
  },
  {
    imgSrc: '/images/shujia.jpg',
    title: 'Shujia - Book Home Service',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/ShujiaApp',
    description: 'Shujia is a web platform that simplifies booking trusted home services online. It offers various service categories with a responsive and user-friendly design. The platform provides a practical and efficient solution for everyday household needs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    role: 'Fullstack Developer',
    purpose: 'Menyediakan platform pemesanan jasa kebersihan dan perawatan rumah secara online yang aman, responsif, dan mudah diakses untuk menyelesaikan kebutuhan rumah tangga harian.',
    process: 'Membangun API server RESTful menggunakan Node.js dan Express, merancang skema relasi dokumen MongoDB, mengintegrasikan sistem autentikasi keamanan berbasis JSON Web Token (JWT), serta membangun antarmuka web interaktif menggunakan React dan Tailwind CSS.',
    outcome: 'Platform pemesanan jasa yang berfungsi penuh secara real-time, lengkap dengan manajemen pemesanan, riwayat pemesanan pengguna, dan integrasi admin.'
  },
  {
    imgSrc: '/images/tiket.jpg',
    title: 'Juaratiket – Ticket Booking Management System',
    tags: ['Fullstack Web Application'],
    projectLink: 'https://github.com/Fachrilfr/juaratiket',
    description: 'Ticket booking app built with Laravel and Filament Admin Panel, featuring CRUD, search, and filtering for efficient event ticket management.',
    tech: ['Laravel', 'Filament Admin', 'PHP', 'MySQL', 'Tailwind CSS'],
    role: 'Backend Developer',
    purpose: 'Membuat sistem manajemen pemesanan tiket acara (event ticketing) berskala besar dengan panel admin yang tangguh bagi penyelenggara untuk mengelola tiket, jadwal, dan transaksi.',
    process: 'Merancang database relasional MySQL, menyusun relasi database pada model ORM Laravel, mengintegrasikan Filament Admin Panel untuk manajemen CRUD data master yang cepat, serta menerapkan fitur pencarian dan filter pemesanan tiket.',
    outcome: 'Sistem e-ticketing yang stabil, aman, dan mudah dikelola oleh administrator dengan dasbor analitik ringkas.'
  },
  {
    imgSrc: '/images/mountra.png',
    title: 'Mountra – Hiking Advisor Web App',
    tags: ['Frontend Web App'],
    projectLink: 'https://github.com/Fachrilfr/hiking-advisor',
    description: 'Mountra adalah website hiking berbasis ReactJS dengan fitur pencarian, filter, dan rating, serta UI responsif untuk pengalaman pengguna yang optimal.',
    tech: ['React.js', 'Vite.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    role: 'Frontend Developer',
    purpose: 'Membangun aplikasi panduan mendaki gunung di Indonesia dengan fitur filter tingkat kesulitan, pencarian lokasi gunung, dan ulasan rating pendaki secara instan.',
    process: 'Merancang layout antarmuka yang bersih dan interaktif menggunakan Tailwind CSS, mengimplementasikan logika pencarian client-side di React, serta menambahkan animasi transisi perpindahan komponen yang mulus dengan Framer Motion.',
    outcome: 'Situs web pendakian yang interaktif, cepat, dan responsif dengan navigasi visual yang dinamis bagi para pendaki gunung.'
  },
  {
    imgSrc: '/images/estate.png',
    title: 'FchrlEstate – Real Estate App',
    tags: ['Frontend Web App'],
    projectLink: 'https://github.com/Fachrilfr/react-realestate-ui/',
    description: 'React Real Estate App adalah proyek pembuatan UI aplikasi real estate berbasis ReactJS dengan desain responsif dan komponen reusable untuk memudahkan pengembangan.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'CSS Grid/Flexbox'],
    role: 'Frontend Developer',
    purpose: 'Membangun prototipe antarmuka pencarian agen properti, persewaan apartemen, dan penjualan rumah modern dengan komponen yang sangat modular dan ramah pengguna.',
    process: 'Menyusun komponen modular menggunakan TypeScript untuk keamanan tipe data, menerapkan filter interaktif (harga, kamar tidur, tipe properti), serta menyusun layout grid yang responsif untuk berbagai ukuran perangkat seluler dan desktop.',
    outcome: 'Prototipe antarmuka frontend properti yang memiliki performa tinggi, animasi hover yang intuitif, dan siap dikembangkan lebih lanjut.'
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
    projects: '1 Project',
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
    projects: '2 Projects',
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