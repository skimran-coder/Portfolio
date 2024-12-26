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

const PROJECT_1_DESC =
  "A full-stack EdTech platform providing educational resources with video streaming and course management features.";

const PROJECT_2_DESC =
  "The Weather App is a simple web application that allows users to check the weather for their current location or search for the weather in a specific city.";

const PROJECT_3_DESC =
  "Welcome to the Tic Tac Toe game project! This classic game allows two players to compete in a fun and strategic battle of Xs and Os.";

export const PROJECT_DATA = [
  {
    title: "Knowledge Nation",
    description: PROJECT_1_DESC,
    imgName: "project_1.png",
    githubUrl: "https://github.com/skimran-coder/Knowledge-Nation",
    liveUrl: "https://knowledgenation.web.app/",
  },
  {
    title: "Weather App",
    description: PROJECT_2_DESC,
    imgName: "project_2.png",
    githubUrl: "https://github.com/skimran-coder/Weather_App",
    liveUrl: "https://skimran-coder.github.io/Weather_App/",
  },
  {
    title: "Tic Tac Toe",
    description: PROJECT_3_DESC,
    imgName: "project_3.png",
    githubUrl: "https://github.com/skimran-coder/TicTacToe",
    liveUrl: "https://skimran-coder.github.io/TicTacToe/",
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
