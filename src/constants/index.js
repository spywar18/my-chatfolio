// src/constants/index.js

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm John Doe, a Senior Software Engineer passionate about building scalable, user-centric applications. With two years of hands-on experience, I specialize in full-stack development, working with technologies like React, Node.js, and cloud services.

From crafting clean UI components to architecting backend systems, I take pride in delivering maintainable and performant solutions. I'm also enthusiastic about DevOps, automation, and integrating AI into real-world products.`;

export const ABOUT_TEXT = `I am a detail-oriented software engineer with a focus on full-stack web development. My expertise includes modern frontend frameworks like React, backend services with Node.js and Express, and cloud platforms such as AWS and Firebase. Over the past two years, I've worked on projects ranging from healthcare analytics to task automation tools. I’m constantly evolving with the tech landscape, keeping up with DevOps, Docker, and serverless functions.`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Present",
    role: "Senior Software Engineer",
    company: "TechNova Solutions",
    description: `Leading the development of a cloud-native SaaS platform, enhancing scalability and security across services. Collaborated with cross-functional teams to optimize frontend performance and CI/CD pipelines. Integrated third-party APIs and used serverless architecture to reduce infrastructure overhead.`,
    technologies: ["React", "Node.js", "AWS", "Docker", "TailwindCSS"],
  },
  {
    year: "Jul 2022 - Jul 2023",
    role: "Software Engineer",
    company: "ByteBrew Technologies",
    description: `Built and maintained core features of a project management tool. Streamlined codebases using reusable React components and implemented RESTful APIs with Express.js. Participated in agile planning, code reviews, and mentored new joiners.`,
    technologies: ["React", "Express.js", "MongoDB", "Git", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "TaskPilot - Productivity Suite",
    image: project1,
    description:
      "A productivity web app that helps users manage daily tasks and goals. Features include drag-and-drop boards, calendar sync, and real-time collaboration using WebSockets.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "MediMetrics - Health Analytics",
    image: project2,
    description:
      "A platform for hospitals to track, analyze, and visualize patient vitals and diagnostics. Designed dashboards with D3.js and handled large datasets using AWS Lambda.",
    technologies: ["AWS", "D3.js", "Node.js", "React"],
  },
  {
    title: "DevBoard - Developer Portfolio Generator",
    image: project3,
    description:
      "Built a static site generator for developers to instantly deploy personal portfolios using markdown-based configuration and GitHub Actions.",
    technologies: ["Next.js", "TailwindCSS", "GitHub Actions"],
  },
  {
    title: "Image Classifier",
    image: project4,
    description:
      "Trained a convolutional neural network to classify object categories in real-time using TensorFlow. Created an interface to upload and preview predictions.",
    technologies: ["Python", "TensorFlow", "JavaScript"],
  },
];

export const CONTACT = {
  address: "San Francisco, CA",
  email: "johndoe@example.com",
};
