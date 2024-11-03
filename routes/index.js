import { Router } from "express";
import pingRouter from "./ping/index.js";
import cocRouter from "./coc/index.js";

const router = Router();

router.use('/ping' , pingRouter);
router.use('/coc' , cocRouter);

export default router;
