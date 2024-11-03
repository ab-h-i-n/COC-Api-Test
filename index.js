import dotenv from "dotenv";
import express from "express";
import client from "./wwcli.js";
import Ping from "./Ping.js";

dotenv.config();
const app = express();
const router = express.Router();

app.use("/", router);
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  client?.initialize();

  setInterval(() => {
    Ping();
  }, 30000);
});

router.get("/", (req, res) => {
  res.send("Hello Barberiens!");
});

//clear all cache auth

router.get("/clear", (req, res) => {
  client.logout();
  res.send("Auth cleared");
});

//send ping every 30 seconds

var ping = 0;

router.get("/ping", (req, res) => {
  console.log(`Ping : ${ping}`);
  res.send("Ping : " + ping);
  ping++;
});
