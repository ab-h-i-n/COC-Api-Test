import wwcli from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { getClanDetails } from "./coc.js";
import dotenv from "dotenv";
dotenv.config();

const { Client, LocalAuth } = wwcli;

console.log(process.env.CLIENT_ID);

const client = new Client({
  puppeteer: {
    headless: true,
  },
  // authStrategy: new LocalAuth({
  //   clientId: process.env.CLIENT_ID,
  // }),
});

client.on("qr", (qr) => {
  console.log("QR loading....");

  if (process.env.ENV === "dev") {
    qrcode.generate(qr, { small: true });
  }
  const encodedQR = encodeURIComponent(qr);
  console.log(
    `https://api.qrserver.com/v1/create-qr-code/?data=${encodedQR}&size=500x500`
  );
});

client.on("loading_screen", () => {
  console.log("Loading......");
});

client.on("ready", () => {
  console.log("Client is ready!");
  // client.sendMessage(process.env.ADMIN_CHAT_ID, "Client is ready!");
});

client.on("message_create", async (msg) => {
  if (msg.body == "#clan") {
    console.log("Fetching clan details...");
    msg.reply("Fetching clan details...");
    // await getClanDetails(msg);
  }
});

export default client;
