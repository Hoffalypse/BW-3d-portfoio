import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  hoffLogo,
  quorum,
  monarch,
  tutor,
  integral,
  earth,
  hoffai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "VP Project Manager",
    company_name: "Quorum Consulting Group",
    icon: quorum,
    iconBg: "#383E56",
    date: "2006 - 2021",
    points: [
      "Developed New Performance Metrics and Accounting Process Improvements.",
      "Oversaw over 100 projects across all phases of development.",
      "Collaborated with Web and Database Managers to Develop User Friendly Investment Data Software.",
      "Over my career at QCG company grew from 6 employees to almost 50 and company revenue increased 15 fold.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "HoffTech Solutions",
    icon: hoffLogo,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop integrated administrator panels to track employee and client sata, greatly increasing productivity.",
    ],
  },
  {
    title: "Shift Manager",
    company_name: "Monarch Casino",
    icon: monarch,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Helped design and open brand new poker room in the Monarch Casino.",
      "Built 65-person team from scratch, developed all SOPs in compliance with Colorado Gaming Law.",
      "Implemented strategies to overtake long standing businesses to become number one poker room in the state of Colorado in less than a year.",
      "Daily interaction with guests and team conflict resolution.",
    ],
  },

  {
    title: "Web Development Tutor",
    company_name: "Self-Employed",
    icon: tutor,
    iconBg: "#f1f1f1",
    date: "2022 - Present",
    points: [
      "Tutoring students from full stack web development bootcamps as they work through learning the MERN Stack.",
      "Quickly and effectively troubleshoot code that have students stuck while implementing projects.",
      "Use great tutoring to develop word of mouth referrals to gain addition students to assist.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Integral Solutions",
    description:
      "Enterprise Application built for Integral Solutions,  Robust Employee and Admin Functionality managing all their bussiness needs. Built on MERN stack incorporating GrapgQL, Google API, React Bootstrap, JWT Decode and Full Calender NPM.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: integral,
    source_code_link: "https://github.com/stevecalla/integral-solutions-dev",
    live_link: "https://int-sol-dev.herokuapp.com/",
  },
  {
    name: "Earthship Packaging",
    description:
      "Full Stack E-Commerce Application built for Earthship Packaging LLC. Frontend built with React and Redux. Node, Express and MongoDB on the backend. Full admin Login capability managing all users, products and orders. Checkout through Paypal",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: earth,
    source_code_link: "https://github.com/Hoffalypse/earthship-packaging-dev",
    live_link: "https://earthship-packaging.herokuapp.com/",
  },
  {
    name: "AI Photo Sharing",
    description:
    'I developed this app due to a fascination with AI technology<br/> and wanting to gain some experience using OpenAI APIs.<br/><br/> App utilizes MERN stack with Tailwind CSS and Vite.<br/> Image storage is done on Cloudinary and deployed using<br/> Render and Hostinger',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: hoffai,
    source_code_link: 'https://github.com/Hoffalypse/AI-Photo-Booth',
    live_link: "https://www.hoffai.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
