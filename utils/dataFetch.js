import { API_URL, COC_TOKEN } from "./env.js";
import log from "./log.js";
import { reply, sendMessage } from "./whatsappConfig.js";

async function fetchData(url, errorMessage) {
  try {

    const response = await fetch(API_URL + url, {
      headers: {
        Authorization: `Bearer ${COC_TOKEN}`,
      },
    });

    const result = await response.json();

    if (result?.status !== 200) {
      throw new Error(result?.message);
    }

    return result;
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
