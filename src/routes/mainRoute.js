import { Router } from "express";
import authRouter from "./authRoute.js";

const router = Router();

// Auth Route
router.use("/auth", authRouter);

export default router;
