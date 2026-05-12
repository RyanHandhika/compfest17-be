import { Router } from "express";
import mealPlanController from "../controllers/mealPlanController.js";
import validate from "../middlewares/validate.js";
import mealPlanValidator from "../validators/mealPlanValidator.js";

const mealPlanRouter = Router();

mealPlanRouter.get("/", (req, res) => {
  res.json({ message: "Get all meal plans" });
});

mealPlanRouter.post(
  "/",
  validate(mealPlanValidator.mealPlanSchema),
  mealPlanController.createMealPlan,
);

export default mealPlanRouter;
