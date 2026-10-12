import { handleTranslationRequest } from "../../translation-handler.mjs";

export default async function handler(request, context) {
  return handleTranslationRequest(request, { clientId: context.ip });
}
