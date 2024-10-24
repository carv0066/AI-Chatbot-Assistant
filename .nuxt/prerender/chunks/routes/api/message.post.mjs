import { defineEventHandler, getCookie, getQuery } from 'file://D:/Coding%20Projects/ai-chatbot-assistant/ai-chatbot-assistant/node_modules/h3/dist/index.mjs';
import { c as client, a as assistant } from '../../_/openai.mjs';
import { g as getLatestMessages } from '../../_/get-message.mjs';
import 'file://D:/Coding%20Projects/ai-chatbot-assistant/ai-chatbot-assistant/node_modules/openai/index.mjs';

const message_post = defineEventHandler(async (event) => {
  var _a, _b;
  const threadID = getCookie(event, "thread-id");
  if (!threadID) {
    return;
  }
  const queryParams = getQuery(event);
  await client.beta.threads.messages.create(threadID, {
    role: "user",
    content: (_b = (_a = queryParams.message) == null ? void 0 : _a.toString()) != null ? _b : ""
  });
  const run = await client.beta.threads.runs.create(threadID, {
    assistant_id: assistant
  });
  return await getLatestMessages(threadID, run.id);
});

export { message_post as default };
//# sourceMappingURL=message.post.mjs.map
