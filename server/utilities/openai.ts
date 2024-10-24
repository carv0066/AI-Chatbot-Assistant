import openAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_KEY = process.env.ASSISTANT_KEY;

export const client = new openAI({
    apiKey: OPENAI_API_KEY,
});

export const assistant = ASSISTANT_KEY;
