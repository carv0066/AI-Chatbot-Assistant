import { defineEventHandler, getCookie } from 'file://D:/Coding%20Projects/ai-chatbot-assistant/ai-chatbot-assistant/node_modules/h3/dist/index.mjs';
import { g as getLatestMessages } from '../../_/get-message.mjs';
import '../../_/openai.mjs';
import 'file://D:/Coding%20Projects/ai-chatbot-assistant/ai-chatbot-assistant/node_modules/openai/index.mjs';

const message_get = defineEventHandler(async (event) => {
  const threadID = getCookie(event, "thread-id");
  const runID = getCookie(event, "run-id");
  if (!threadID || !runID) {
    return;
  }
  return await getLatestMessages(threadID, runID);
});

export { message_get as default };
//# sourceMappingURL=message.get.mjs.map
