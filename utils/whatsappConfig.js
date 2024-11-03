import wwcli from "whatsapp-web.js";
import { ADMIN_CHAT_ID, CLIENT_ID } from "./env.js";
import log from "./log.js";
import generateQR from "./generateQR.js";
import commandConfig from "./commandConfig.js";

function sendMessage(message, to = ADMIN_CHAT_ID) {
  try {
    whatsapp.sendMessage(to, message);
  } catch (error) {
    console.error("Failed to send message to " + to + "\n\n" + error);
  }
}

function reply(msg, message) {
  try {
    msg.reply(message);
  } catch (error) {
    console.error("Failed to reply to message of " + msg.from + "\n\n" + error);
  }
}

const { Client, LocalAuth } = wwcli;

const whatsapp = new Client({
  puppeteer: {
    headless: true,
  },
  authStrategy: new LocalAuth({
    clientId: CLIENT_ID,
  }),
});

whatsapp.on("qr", (qr) => {
  generateQR(qr);
});

whatsapp.on("loading_screen", () => {
  log("Loading......");
});

whatsapp.on("ready", () => {
  log("Client is ready!");
  sendMessage("Client is ready!");
});

whatsapp.on("message_create", async (msg) => {
  const action = commandConfig[msg.body];
  if (action) {
    await action(msg);
  }
});

export { whatsapp, sendMessage, reply };
