import { Router } from "express";
import log from "../../utils/log.js";

const router = Router();
var ping = 0;

router.get("/", (req, res) => {
  res.json({
    ping: ping,
  });
  log(`Ping : ${ping}`);
  ping++;
});


export default router;