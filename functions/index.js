const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const admin = require("firebase-admin");
const {GoogleGenerativeAI} = require("@google/generative-ai");
const cors = require("cors");

const corsHandler = cors({
    origin: "*",
});

admin.initializeApp();
const db = admin.firestore();

// Securely access the secret from environment
// (Create a .secret.local file to store the gemini key)
const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

exports.chatWithBot = onRequest({secrets: [GEMINI_API_KEY], region: "us-central1"}, (req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const {query, history} = req.body.data;

    if (!query) {
      res.status(400).send("Missing query input.");
      return;
    }

    try {
      // Use Gemini API with secret key
      console.log("request received");
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY.value());
      const model = genAI.getGenerativeModel({model: "gemini-1.5-flash-latest"});

      // Fetch portfolio info
      const aboutDoc = await db.collection("portfolio").doc("about").get();
      const skillsDoc = await db.collection("portfolio").doc("skills").get();
      const personasDoc = await db.collection("portfolio").doc("personas").get();
      const projectsSnapshot = await db.collection("projects").get();
      const experienceSnapshot = await db.collection("experience").get();

      const projects = projectsSnapshot.docs.map((doc) => doc.data());
      const experience = experienceSnapshot.docs.map((doc) => doc.data());

      const knowledgeBase = {
        about: aboutDoc.data(),
        skills: skillsDoc.data(),
        projects,
        experience,
        personas: personasDoc.data(),
      };

      const prompt = `
You are JD Mate, a helpful and motivational chatbot on a portfolio website.
Your responses must be concise and use markdown for formatting. Use headings, bold text, and bullet points to structure your advice.
Do not use long paragraphs. Keep the tone encouraging.

The user's question is: "${query}"

Here is the portfolio data to inform your answer:
${JSON.stringify(knowledgeBase, null, 2)}

Here is the recent chat history:
${JSON.stringify(history, null, 2)}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      res.status(200).send({data: {response: text}});
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).send({data: {response: "Sorry, I'm having trouble answering right now."}});
    }
  });
});
