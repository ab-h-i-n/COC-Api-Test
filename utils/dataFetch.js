import { API_URL, COC_TOKEN } from "./env.js";
import { reply, sendMessage } from "./whatsappConfig.js";

async function fetchData(url, errorMessage) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000); // 1 minute timeout

  try {
    const response = await fetch(API_URL + url, {
      headers: {
        Authorization: `Bearer ${COC_TOKEN}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    sendMessage(`${errorMessage}:\n\n${error}`);
    throw error;
  }
}

function handleError(msg, userMessage) {
  reply(msg, userMessage);
}

export { fetchData, handleError };
