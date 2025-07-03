
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
    bio: "I'm a passionate Full Stack Developer with experience in creating dynamic and responsive web applications using React, Node.js, and modern JavaScript frameworks. I thrive on solving complex problems and building beautiful, intuitive user interfaces. My goal is to leverage technology to create meaningful and impactful digital experiences.",
    name: "JD" // Replace with your name if different
  },
  projects: [
    { id: "proj1", title: "Portfolio Website", description: "My personal portfolio built with React, Next.js, and Tailwind CSS, showcasing my skills and projects. Deployed on Vercel.", tech: ["React", "Next.js", "Tailwind CSS", "Vercel"], url: "https://si-portfolio.vercel.app/" },
    { id: "proj2", title: "Another Cool Project", description: "Describe another one of your key projects here.", tech: ["Node.js", "Express", "MongoDB"], url: "https://example.com" }
    // Add more projects
  ],
  experience: [
    { id: "exp1", company: "Company A", role: "Frontend Developer", duration: "Jan 2023 - Present", responsibilities: "Developed and maintained user-facing features using React.js, collaborated with designers and backend developers, and optimized applications for speed and scalability." }
    // Add more experience
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    databases: ["MongoDB", "Firestore"],
    tools: ["Git", "Webpack", "Docker", "Figma"]
  },
  personas: {
    student: {
      motivation: [
        "Every expert was once a beginner. Keep learning and don't be afraid to fail!",
        "The journey of a thousand miles begins with a single step. You've already taken the first one by starting.",
        "Stuck on a problem? Take a break, walk away, and come back with a fresh perspective. You'll be surprised what you can solve."
      ],
      guidance: "Focus on building strong fundamentals in HTML, CSS, and JavaScript. Then, pick a framework like React and build projects. Real-world projects are the best way to learn and showcase your skills."
    },
    recruiter: {
      pitch: "I specialize in building performant and scalable web applications with a focus on user experience. My expertise in the MERN stack and Next.js allows me to deliver end-to-end solutions. I'm actively looking for roles where I can contribute to impactful projects and continue to grow as a developer."
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