import { handleChatRequest } from "../../chat-handler.mjs";

export default async function handler(request, context) {
  return handleChatRequest(request, { clientId: context.ip });
}
