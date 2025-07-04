// src/constants/index.js

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate Full Stack Developer and community builder with hands-on experience in building production-grade web applications and AI-powered solutions. My expertise lies in JavaScript, TypeScript, React, Node.js, and cloud-native services like Firebase and Google Cloud.

From crafting clean UI components to architecting backend systems, I take pride in delivering maintainable and performant solutions. I'm also enthusiastic about DevOps, automation, and integrating AI into real-world products.`;

export const ABOUT_TEXT = `I am a detail-oriented software engineer with a focus on full-stack web development. My expertise includes modern frontend frameworks like React, backend services with Node.js and Express, and cloud platforms such as GCP and Firebase.  I’m a full-stack developer who loves turning complex ideas into clean, cloud-powered code. I’m constantly evolving with the tech landscape, keeping up with DevOps, Docker, and serverless functions.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 – Dec 2023",
    role: "Contributor (Cloud-Native Project)",
    company: "Buildspace",
    description: `Contributed to a community-driven open-source project focused on cloud-native tooling and backend services. Assisted in setting up serverless functions, refactoring API endpoints, and improving developer experience within the codebase.`,
    technologies: ["Node.js", "Firebase", "Cloud Functions", "TypeScript", "GitHub"],
  },
  {
    year: "Dec 2024",
    role: "Finalist – Build & Blog Marathon",
    company: "Code Vipasana x Google Cloud",
    description: `Selected as a finalist in a competitive nationwide challenge to build, deploy, and document a production-grade GenAI application using Google Cloud services. Presented end-to-end solution including AI agent flows, cloud orchestration, and blogging pipelines.`,
    technologies: ["GenAI", "Google Cloud", "Next.js", "Docker", "Firestore"],
  },
];

export const PROJECTS = [
  {
    title: "AI Portfolio Chatbot",
    image: project1,
    description:
      "An interactive developer portfolio integrated with a Gemini-powered chatbot that answers questions about skills, projects, and experience using Firebase Functions and Firestore as knowledge base.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Gemini API"],
  },
  {
    title: "BlogAI - YouTube to Blog Generator",
    image: project2,
    description:
      "A full-stack platform that converts YouTube videos into SEO-optimized blog posts using modular AI flows, a monorepo architecture, and a modern dashboard with user auth and content management.",
    technologies: ["Next.js", "Node.js", "Genkit", "Prisma", "Docker", "Python"],
  },
  {
    title: "Prescripto - Appointment Booking System",
    image: project3,
    description:
      "A role-based appointment management system for doctors, patients, and admins. Patients can book appointments, doctors manage schedules and earnings, while admins control platform operations.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth"],
  },
  {
    title: "Flavour Forage - AI Recipe Generator",
    image: project4,
    description:
      "A fun AI tool that creates custom recipes based on ingredients provided by the user. Powered by Gemini AI to generate unique and tasty cooking instructions in real time.",
    technologies: ["React", "Firebase", "Gemini API"],
  },
];


export const CONTACT = {
  address: "Knowledge Park-2, Greater Noida, Delhi NCR",
  email: "shikharsingh0712@gmail.com",
};
