import { configDotenv } from "dotenv";
configDotenv();

const CLAN_TAG = encodeURIComponent(process.env.CLAN_TAG);
const CLAN_TAG_RAW = process.env.CLAN_TAG;
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL;
const COC_TOKEN = process.env.COC_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID || "wizard";
const ENV = process.env.ENV || "dev";
const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

export {
  CLAN_TAG,
  CLAN_TAG_RAW,
  PORT,
  API_URL,
  COC_TOKEN,
  CLIENT_ID,
  ENV,
  SERVER_URL,
  ADMIN_CHAT_ID,
};
