import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.get("/users", adminController.getUsers);
adminRouter.get("/subscriptions", adminController.getSubscriptions);
adminRouter.delete("/users/:id", adminController.deleteUser);

export default adminRouter;
