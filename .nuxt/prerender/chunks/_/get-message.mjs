import { c as client } from './openai.mjs';

const getLatestMessages = async (threadID, runID) => {
  let run = await client.beta.threads.runs.retrieve(threadID, runID);
  while (run.status != "completed") {
    await new Promise((resolve) => setTimeout(resolve, 500));
    run = await client.beta.threads.runs.retrieve(threadID, runID);
  }
  return await client.beta.threads.messages.list(threadID);
};

export { getLatestMessages as g };
//# sourceMappingURL=get-message.mjs.map
