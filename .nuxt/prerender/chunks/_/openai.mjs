import openAI from 'file://D:/Coding%20Projects/ai-chatbot-assistant/ai-chatbot-assistant/node_modules/openai/index.mjs';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_KEY = process.env.ASSISTANT_KEY;
const client = new openAI({
  apiKey: OPENAI_API_KEY
});
const assistant = ASSISTANT_KEY;

export { assistant as a, client as c };
//# sourceMappingURL=openai.mjs.map
