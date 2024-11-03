import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "COC API",
  });
});


export default router;
