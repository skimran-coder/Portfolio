import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faDesktop,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const KNOWLEDGE_NATION_DESC =
  "A full-stack EdTech platform providing educational resources with video streaming and course management features.";

const BRAINLY_DESC =
  "Second Brain is a full-stack app for saving and organizing links. Users can manage personal collections or share them publicly, keeping resources and ideas easily accessible.";

const FOOD_APP_DESC =
  "A dynamic food delivery app inspired by Swiggy, featuring location-based browsing, live search, and restaurant sorting with a sleek UI. Built with React, Tailwind CSS, and a TypeScript backend for seamless API integration.";

export const PROJECT_DATA = [
  {
    title: "Food App",
    description: FOOD_APP_DESC,
    imgName: "foodapp.png",
    githubUrl: "https://github.com/skimran-coder/Food-App",
    liveUrl: "https://food-store-online.vercel.app/",
    techIcons: [
      "React",
      "Redux",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Brainly",
    description: BRAINLY_DESC,
    imgName: "brainly.png",
    githubUrl: "https://github.com/skimran-coder/brainly",
    liveUrl: "https://brainly-notes.vercel.app/",
    techIcons: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Knowledge Nation",
    description: KNOWLEDGE_NATION_DESC,
    imgName: "project_1.png",
    githubUrl: "https://github.com/skimran-coder/Knowledge-Nation",
    liveUrl: "https://knowledgenation.web.app/",
    techIcons: ["React", "Redux", "Firebase", "Tailwind CSS"],
  },
];

export const MY_INTRO = `Hi, I am Sk Imran Hussain!
          I am a MERN stack developer with a love for creating responsive websites and building efficient RESTful APIs. I focus on writing clear, maintainable code that follows industry best practices. I aim to make every project scalable and easy to manage over time. Beyond coding, I enjoy reading and writing to explore ideas in my free time.`;

export const SKILL_ICONS_NAME = [
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "React",
  "Redux",
  "Node.js",
  "JavaScript",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
  "Firebase",
  "Postman",
];

export const SOCIAL_ICONS_URL = [
  {
    name: "Github",
    url: "https://github.com/skimran-coder",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sk-imran-hussain/",
    icon: faLinkedin,
  },
  {
    name: "X/Twitter",
    url: "https://x.com/skimranhussain",
    icon: faXTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/skimranhussain4/",
    icon: faInstagram,
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive and engaging user interfaces using HTML, CSS, JavaScript, and modern libraries like React.",
    icon: faDesktop,
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js and Express, focusing on scalability and performance.",
    icon: faServer,
  },
  {
    title: "API Integration",
    description:
      "Designing and implementing RESTful APIs to enable seamless communication between different parts of an application.",
    icon: faCode,
  },
  {
    title: "Database Management",
    description:
      "Efficiently managing data using MongoDB and other databases, ensuring data integrity and security.",
    icon: faDatabase,
  },
];
