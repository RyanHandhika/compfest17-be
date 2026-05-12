import { Router } from "express";
import mealPlanController from "../controllers/mealPlanController.js";
import validate from "../middlewares/validate.js";
import mealPlanValidator from "../validators/mealPlanValidator.js";

const mealPlanRouter = Router();

mealPlanRouter.get("/", mealPlanController.getAllMealPlans);

mealPlanRouter.get("/:id", mealPlanController.getMealPlanById);

mealPlanRouter.post(
  "/",
  validate(mealPlanValidator.mealPlanSchema),
  mealPlanController.createMealPlan,
);

mealPlanRouter.put("/:id", mealPlanController.updateMealPlan);

mealPlanRouter.delete("/:id", mealPlanController.deleteMealPlan);

export default mealPlanRouter;
