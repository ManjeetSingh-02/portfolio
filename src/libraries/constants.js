import Home from "../pages/Home";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import DigitalClockPreview from "../assets/images/digital_clock.png";
import TodoListPreview from "../assets/images/todo_list.png";
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import HTML from "../assets/icons/html.svg";
import CSS from "../assets/icons/css.svg";
import TailwindCSS from "../assets/icons/tailwindcss.svg";
import JavaScript from "../assets/icons/javascript.svg";
import ReactJS from "../assets/icons/reactjs.svg";
import CPP from "../assets/icons/cpp.svg";
import ExpressJS from "../assets/icons/expressjs.svg";
import VSCode from "../assets/icons/vscode.svg";
import Git from "../assets/icons/git.svg";
import NPM from "../assets/icons/npm.svg";
import MySQL from "../assets/icons/mysql.svg";
import MongoDB from "../assets/icons/mongodb.svg";
import Windows from "../assets/icons/windows.svg";
import Linux from "../assets/icons/linux.svg";
import Ubuntu from "../assets/icons/ubuntu.svg";

export const pageDetails = {
  home: {
    name: "Home",
    title: "Home Page - Manjeet Singh",
    description: "Home page of Manjeet Singh's portfolio.",
    path: "/",
    component: Home,
  },
  techstack: {
    name: "Tech Stack",
    title: "Tech Stack - Manjeet Singh",
    description: "Tech Stack page of Manjeet Singh's portfolio.",
    path: "/techstack",
    component: TechStack,
  },
  projects: {
    name: "Projects",
    title: "Projects - Manjeet Singh",
    description: "Projects page of Manjeet Singh's portfolio.",
    path: "/projects",
    component: Projects,
  },
};

export const notFoundPageDetails = {
  name: "Not Found",
  title: "404 - Not Found",
  description: "Page not found.",
  path: "*",
  component: NotFound,
};

export const techstackLanguages = {
  html: {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    target: "_blank",
    icon: HTML,
  },
  css: {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    target: "_blank",
    icon: CSS,
  },
  javascript: {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    target: "_blank",
    icon: JavaScript,
  },
  cpp: {
    name: "C++",
    url: "https://en.cppreference.com/w/",
    target: "_blank",
    icon: CPP,
  },
};

export const techstackLibraries = {
  react: {
    name: "React JS",
    url: "https://reactjs.org/docs/getting-started.html",
    target: "_blank",
    icon: ReactJS,
  },
  tailwind: {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    target: "_blank",
    icon: TailwindCSS,
  },
};

export const techstackFrameworks = {
  expressjs: {
    name: "ExpressJS",
    url: "https://expressjs.com/",
    target: "_blank",
    icon: ExpressJS,
  },
};

export const techstackDevelopmentTools = {
  vscode: {
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    target: "_blank",
    icon: VSCode,
  },
  git: {
    name: "Git",
    url: "https://git-scm.com/doc",
    target: "_blank",
    icon: Git,
  },
  github: {
    name: "GitHub",
    url: "https://github.com/",
    target: "_blank",
    icon: GitHub,
  },
  npm: {
    name: "NPM",
    url: "https://docs.npmjs.com/",
    target: "_blank",
    icon: NPM,
  },
};

export const techstackDatabases = {
  mysql: {
    name: "MySQL",
    url: "https://dev.mysql.com/doc/",
    target: "_blank",
    icon: MySQL,
  },
  mongodb: {
    name: "MongoDB",
    url: "https://www.mongodb.com/docs/",
    target: "_blank",
    icon: MongoDB,
  },
};

export const techstackOS = {
  windows: {
    name: "Windows",
    url: "https://support.microsoft.com/en-us/windows",
    target: "_blank",
    icon: Windows,
  },
  linux: {
    name: "Linux",
    url: "https://www.linux.org/",
    target: "_blank",
    icon: Linux,
  },
};

export const techstackDistro = {
  ubuntu: {
    name: "Ubuntu",
    url: "https://ubuntu.com/",
    target: "_blank",
    icon: Ubuntu,
  },
};

export const projects = {
  digitalclock: {
    name: "Digital Clock",
    description: "A website to show current time and date in mordenized way.",
    previewImg: DigitalClockPreview,
    websiteUrl: "https://manjeetsingh-02.github.io/digital-clock/",
    githubUrl: "https://github.com/ManjeetSingh-02/digital-clock",
  },
  todolist: {
    name: "Todo List",
    description: "A website to show manage multiple todo's inside a todo list.",
    previewImg: TodoListPreview,
    websiteUrl: "https://manjeetsingh-02.github.io/todo-list/",
    githubUrl: "https://github.com/ManjeetSingh-02/todo-list",
  },
};

export const redirectUrls = {
  github: {
    name: "GitHub",
    url: "https://github.com/ManjeetSingh-02",
    target: "_blank",
    icon: GitHub,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manjeet-singh-7b2a32292/",
    target: "_blank",
    icon: LinkedIn,
  },
};

export const footerContact = {
  devname: "Manjeet Singh",
  devmail: "manjeetsingh.wrk@gmail.com",
};
