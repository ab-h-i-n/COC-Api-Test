import express from "express";
import { PORT } from "./utils/env.js";
import { whatsapp } from "./utils/whatsappConfig.js";
import ping from "./utils/ping.js";
import mainRouter from "./routes/index.js";

const app = express();

//initialize whatsapp
whatsapp.initialize();

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ping();
});

app.use("/api", mainRouter);
