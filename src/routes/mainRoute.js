import { Router } from "express";
import authRouter from "./authRoute.js";
import mealPlanRouter from "./mealPlanRoute.js";
// import subscriptionRouter from "./subscriptionRoute.js";
import testimonialRouter from "./testimonialRoute.js";
import adminRouter from "./adminRoute.js";

const router = Router();

// Auth Route
router.use("/auth", authRouter);
router.use("/meal-plans", mealPlanRouter);
// router.use("/subscriptions", subscriptionRouter);
router.use("/testimonials", testimonialRouter);
router.use("/admin", adminRouter);

export default router;
