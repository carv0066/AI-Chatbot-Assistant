import { client, assistant } from "../utils/openai";

export default defineEventHandler(async (event) => {
    const queryParams = getQuery(event);

    if (!assistant || typeof assistant !== 'string') {
        throw new Error("Assistant ID is not defined or is invalid.");
    }

    const thread = await client.beta.threads.create();

    const run = await client.beta.threads.runs.create(thread.id, {
        assistant_id: assistant,
        additional_instructions: `The customer's name is ${queryParams.customer || 'Guest'}`,
    });

    return {
        thread: thread.id,
        run: run.id,
    };
});
