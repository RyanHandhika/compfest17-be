import { Router } from "express";
import subscriptionController from "../controllers/subscriptionController.js";
import validate from "../middlewares/validate.js";
import subscriptionValidator from "../validators/subscriptionValidator.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", subscriptionController.getAllSubscriptions);

subscriptionRouter.get(
  "/:id",
  subscriptionController.getDetailSubscriptionById,
);

subscriptionRouter.post(
  "/",
  validate(subscriptionValidator.subscriptionSchema),
  subscriptionController.createSubscription,
);

subscriptionRouter.put("/:id", subscriptionController.updateSubscription);

subscriptionRouter.delete("/:id", subscriptionController.deleteSubscription);

export default subscriptionRouter;
