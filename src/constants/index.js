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
  python,
  tailwind,
  nodejs,
  mongodb,
  graph,
  mysql,
  git,
  figma,
  docker,
  threejs,
  hoffLogo,
  quorum,
  monarch,
  tutor,
  integral,
  earth,
  hoffai,
  wow,
  smokey,
  bando,
  meredith,
  chris,
  angela,
  carma,
  picknik,
  owl,
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
    title: "Backend Architect",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Git",
    icon: git,
  },
  {
    name: "GraphQL",
    icon: graph,
  },
  {
    name: "MySql",
    icon: mysql,
  },
];

const experiences = [


  {
    title: "Software Engineer",
    company_name: "PickNik Robotics",
    icon: picknik,
    iconBg: "black",
    date: "2023 - 2025",
    points: [
      "Developed the client-facing interface for unstructured robotic arm software using React/TypeScript, enabling operators to efficiently configure and control advanced robotic systems",
      "Implemented detailed 3D robot motion planning using Three.js, enhancing user clarity on complex kinematics and trajectory outcomes",
      "Collaborated with back-end robotics engineers, working with ROS, Python REST APIs, and WebSocket connections to ensure real-time system updates and responsive UIs",
      "Established robust unit test suites, driving code coverage up by 80% within six months and reducing regressions in newly deployed feature",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Unscrolled Inc",
    icon: owl,
    iconBg: "white",
    date: "2023(Contract)",
    points: [
      "Aligned UI/UX designs with a game-based learning platform, streamlining educational workflows",
      "Translated Figma designs into responsive user interfaces, achieving a 25% decrease in page load time",
      "Deployed AI-driven quiz functionality, cutting prep time by 60% for educators and boosting user engagement",
      "Designed and integrated a scalable Playfab/Unity-backed database for game analytics, improving stability and real-time data access",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AInnovations Inc",
    icon: hoffLogo,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies",
      "Collaborated with cross-functional teams including designers, product managers and other developers to create high-quality applications",
      "Implemented responsive design and ensuring cross-browser compatibility",
      "Developed integrated administrator panels to track employee and client data, greatly increasing productivity",
    ],
  },
  {
    title: "Web Development Tutor",
    company_name: "Self-Employed",
    icon: tutor,
    iconBg: "#f1f1f1",
    date: "2022 - Present",
    points: [
      "Tutored students from full stack web development bootcamps as they work through learning the MERN Stack",
      "Quickly and effectively troubleshoot code when students are stuck with implementing projects and assignments",
      "Use effective tutoring to generate word-of-mouth referrals to gain additional students to assist",
    ],
  },
  {
    title: "Project Manager",
    company_name: "Quorum Consulting Group",
    icon: quorum,
    iconBg: "#383E56",
    date: "2006 - 2021",
    points: [
      "Developed new performance metrics and accounting process improvements",
      "Oversaw over 100 projects across all phases of development",
      "Collaborated with Web and Database Managers to develop user-friendly investment data software",
      "Over my career at QCG, company grew from 6 employees to almost 50 and company revenue increased 15 fold",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Working with HoffTech Solutions was as smooth and painless as I could ever hope. Bryan is full of creative ideas.",
    name: "Meredith Tate",
    designation: "CEO",
    company: "Earthship Packaging",
    image: meredith,
  },
  {
    testimonial:
      "One of the most talented new engineers I have ever had the pleasure of working with, a true talent.",
    name: "John Wilday",
    designation: "Director",
    company: "Comprehensive Recruiting",
    image: chris,
  },
  {
    testimonial:
      "Bryan is a great problem solver. We couldn't have built our business to the scope it is today without him.",
    name: "Angela Davis",
    designation: "CEO",
    company: "Quorum Consulting Group",
    image: angela,
  },
];

const projects = [

  {
    name: "AI Applications",
    description:
      "I developed these apps due to a fascination with AI technology and wanting to gain some experience using OpenAI APIs. Apps utilize MERN stack with TailwindCSS, Threejs, Vite, Cloudinary, Motion Framer and Valtio. Deployed using Render and Hostinger.",
    tags: [
      {
        name: "ThreeJS",
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
    source_code_link: "https://github.com/Hoffalypse/AI-Photo-Booth",
    live_link: "https://www.hoffai.com",
  },
  {
    name: "Integral Solutions",
    description:
      "Enterprise Application built for Integral Solutions.  Robust employee and admin functionality, managing all their business needs. Built on MERN stack, incorporating GraphQL, Google API, React Bootstrap, JWT Decode and Full Calender NPM.",
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
    name: "Carma Car Rental",
    description:
      "Mock car rental application showcasing skills in Nextjs, TypeScript, Server-Side Redering, TailwindCSS and using HeadlessUI components. This app features a very modern UI/UX and completely responsive interface.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: carma,
    source_code_link: "https://github.com/Hoffalypse/carma-car-nextjs",
    live_link: "https://carma-car-rental.vercel.app/",
  },
  {
    name: "Earthship Packaging",
    description:
      "Full Stack E-Commerce Application built for Earthship Packaging, LLC. Frontend built with React and Redux. Node, Express and MongoDB on the backend. Full admin login capability, managing all users, products and orders. Checkout through Paypal.",
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
    name: "WOW Team Builder",
    description:
      "This app creates teams for World of Warcraft Mythic+ battles. Provides access to all Mythic+ data. Full Stack Application using Handlebars on the frontend. Node, Express, MySQL on backend utilizing multiple APIs.",
    tags: [
      {
        name: "Handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: wow,
    source_code_link: "https://github.com/Hoffalypse/mythic-plus-team",
    live_link: "https://mythic-plus-team.herokuapp.com/",
  },
  {
    name: "Forest Fire Fighter App",
    description:
      "No more carrying around a satchel full of forms and calendars. Full Stack Application using React, GraphQL, Node, Express, and MongoDB. This app utilizes calendar data, APIs, encrypted login and geolocation. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "GeoLocation",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: smokey,
    source_code_link: "https://github.com/moyuh/fire-fighter-tracking",
    live_link: "https://smokeys-helpers.herokuapp.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
