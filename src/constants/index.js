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
  {
    title: "Software Engineer",
    company_name: "HoffTech Solutions",
    icon: hoffLogo,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers and other developers to create high-quality applications",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Develop integrated administrator panels to track employee and client data, greatly increasing productivity",
    ],
  },
  {
    title: "Shift Manager",
    company_name: "Monarch Casino",
    icon: monarch,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Helped design and open brand-new poker room in the Monarch Casino",
      "Built 65-person team from scratch, developing all SOPs in compliance with Colorado Gaming Law.",
      "Implemented strategies to overtake long-standing businesses to become the number one poker room in the state of Colorado in less than a year",
      "Daily interaction with guests and team conflict resolution",
    ],
  },

  {
    title: "Web Development Tutor",
    company_name: "Self-Employed",
    icon: tutor,
    iconBg: "#f1f1f1",
    date: "2022 - Present",
    points: [
      "Tutoring students from full stack web development bootcamps as they work through learning the MERN Stack",
      "Quickly and effectively troubleshoot code that when students are stuck with implementing projects and assignments",
      "Use effecctive tutoring to generate word-of-mouth referrals to gain additional students to assist",
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
    company: "Comprhensive Recruiting",
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
    name: "AI Photo Sharing",
    description:
      "I developed this app due to a fascination with AI technology and wanting to gain some experience using OpenAI APIs. App utilizes MERN stack with Tailwind CSS and Vite. Image storage is done on Cloudinary and deployed using Render and Hostinger.",
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
    source_code_link: "https://github.com/Hoffalypse/AI-Photo-Booth",
    live_link: "https://www.hoffai.com",
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
  {
    name: "Band Search App",
    description:
      "This app is a one-stop shop for all band information, biographies, album data and upcoming concerts. Frontend application using Javascript, CSS and HTML. Recieves API data from Ticketmsater and theAudioDB.",
    tags: [
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
    ],
    image: bando,
    source_code_link: "https://github.com/joseeenrique/Music-App",
    live_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
