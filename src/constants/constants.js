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
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
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
    // Update the image path to the public folder
    image: "/Perplexity-AI-Partnership-with-SoftBank-for-Japan-Expansion.jpg",
    source_code_link: "https://github.com/girihaha/port",
    live_link: "https://t.me/girishfr",
  }
];

export {
  services,
  projects,
};