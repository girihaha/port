import {
  mobile,
  backend,
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
  threejs,
  nextjs,
  express,
  java,
  perplexity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cracker",
    icon: web,
  },
  {
    title: "Carder",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: backend,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Perplexity AI Subscription",
    description:
      "Helping people with their studies and work by providing a 1-year Perplexity AI subscription at the lowest cost.",
    features: [
      "Users can access AI models such as GPT-4, Sonar, and Claude.",
      "Image generation tools like Playground V3 and DALL-E are included.",
    ],
    tags: [
      {
        name: "Perplexity",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Best GPT",
        color: "pink-text-gradient",
      },
      {
        name: "In budget",
        color: "orange-text-gradient",
      },
      {
        name: "Cheapest",
        color: "blue-text-gradient",
      },
    ],
    image: perplexity,
    source_code_link: "https://github.com/girihaha/port",
    live_link: "https://t.me/girishfr",
  },
];

export {
  services,
  technologies,
  projects,
};
