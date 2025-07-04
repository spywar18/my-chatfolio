
// seed.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';


// PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "AIzaSyARLdYq8PG-hMMUIrsnVzNjaJzUmRoP7UU",
    authDomain: "chatfoliov2-ff406.firebaseapp.com",
    projectId: "chatfoliov2-ff406",
    storageBucket: "chatfoliov2-ff406.firebasestorage.app",
    messagingSenderId: "900109528882",
    appId: "1:900109528882:web:aa98bd42edb2e994c7b12b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const portfolioData = {
  about: {
    bio: "I'm a passionate Full Stack Developer with experience in creating dynamic and scalable web applications using React, Node.js, Firebase, and modern JavaScript frameworks. I love solving real-world problems—from building AI-powered portfolios and SEO blog generators to healthcare dashboards and serverless utilities. I thrive in cloud-native environments and enjoy crafting intuitive, maintainable UIs backed by strong backend logic.",
    name: "Shikhar"
  },
  projects: [
    {
      id: "proj1",
      title: "AI Portfolio Chatbot",
      description:
        "My personal portfolio integrated with a Gemini-powered AI chatbot that answers questions about my skills, projects, and experience using Firebase Functions and Firestore as a knowledge base.",
      tech: ["React", "Tailwind CSS", "Firebase", "Gemini API"],
      url: "https://my-chatfolio-34fu63sdt-shikhar-s-projects.vercel.app/"
    },
    {
      id: "proj2",
      title: "BlogAI - YouTube to Blog Generator",
      description:
        "A full-stack platform that transforms YouTube videos into SEO-optimized blog posts using modular AI flows and monorepo architecture. Features include AI orchestration, user dashboard, and Dockerized services.",
      tech: ["Next.js", "Node.js", "Genkit", "Prisma", "Docker", "Python"],
      url: "https://github.com/spywar18/blog-generator"
    },
    {
      id: "proj3",
      title: "Prescripto - Doctor Appointment System",
      description:
        "Built a full-stack booking platform with multi-role login (Patient, Doctor, Admin). Enables appointment management, profile updates, and admin-side analytics and moderation.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
      url: "https://prescripto.vercel.app/"
    },
    {
      id: "proj4",
      title: "Flavour Forage - AI Recipe Generator",
      description:
        "Fun AI utility that turns your ingredients into creative recipes using Gemini API. Users input available items and get custom cooking steps in seconds.",
      tech: ["React", "Firebase", "Gemini API"],
      url: "https://github.com/spywar18/Flavour-forage"
    },
    {
      id: "proj5",
      title: "Firebase Contact App",
      description:
        "A basic CRUD contact manager built using React and Firebase. Demonstrates form handling, real-time database integration, and modular state management.",
      tech: ["React", "Firebase", "JavaScript"],
      url: "vite-contact-4c491.web.app/"
    }
  ],
  experience: [
    {
      id: "exp1",
      company: "Buildspace (Community Contribution)",
      role: "Contributor – Cloud Native Project",
      duration: "Sep 2023 – Dec 2023",
      responsibilities:
        "Contributed to a collaborative cloud-native backend service. Assisted with serverless API integrations, improved Firebase functions, and enhanced project structure and dev experience.",
    },
    {
      id: "exp2",
      company: "Build & Blog Marathon (Code Vipasana x Google Cloud)",
      role: "Finalist",
      duration: "Dec 2024",
      responsibilities:
        "Finalist in a nationwide developer marathon. Built and deployed an AI + cloud-powered application using Google Cloud and documented the journey via blogs and open-source repositories.",
    }
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    databases: ["MongoDB", "Firestore"],
    tools: ["Git", "Docker", "Figma", "Firebase", "Prisma", "Genkit"]
  },
  personas: {
    student: {
      motivation: [
        "Every expert was once a beginner. Keep learning and don't be afraid to fail!",
        "The journey of a thousand miles begins with a single step. You've already taken the first one by starting.",
        "Stuck on a problem? Take a break, walk away, and come back with a fresh perspective. You'll be surprised what you can solve."
      ],
      guidance:
        "Focus on building strong fundamentals in HTML, CSS, and JavaScript. Then, pick a framework like React and build projects. Real-world projects are the best way to learn and showcase your skills."
    },
    recruiter: {
      pitch:
        "I specialize in building performant and scalable web applications with a focus on user experience. My expertise in the MERN stack, Next.js, Firebase, and Google Cloud allows me to deliver full-stack solutions, integrate AI, and deploy them with modern DevOps practices. I'm actively seeking roles where I can contribute to impactful products and continue growing as an engineer."
    }
  }
};


async function seedDatabase() {
  console.log('Starting to seed database...');
  try {
    await setDoc(doc(db, "portfolio", "about"), portfolioData.about);
    await setDoc(doc(db, "portfolio", "skills"), portfolioData.skills);
    await setDoc(doc(db, "portfolio", "personas"), portfolioData.personas);

    for (const project of portfolioData.projects) {
      await setDoc(doc(db, "projects", project.id), project);
    }

    for (const exp of portfolioData.experience) {
      await setDoc(doc(db, "experience", exp.id), exp);
    }

    console.log('Successfully seeded database!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();