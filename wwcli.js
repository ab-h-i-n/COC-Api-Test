import wwcli from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { getClanDetails } from "./coc.js";

const { Client, LocalAuth } = wwcli;

const client = new Client({
  puppeteer: {
    headless: true,
  },
  authStrategy: new LocalAuth({
    clientId: process.env.CLIENT_ID,
  }),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message_create", async (msg) => {
  if (msg.body == "#clan") {
    msg.reply("Fetching clan details...");
    await getClanDetails(msg);
  }
});

export default client;
