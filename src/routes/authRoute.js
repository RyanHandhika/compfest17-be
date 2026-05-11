import { Router } from "express";
import authController from "../controllers/authController.js";
import validate from "../middlewares/validate.js";
import authValidator from "../validators/authValidators.js";

const authRouter = Router();

// Register & Login
authRouter.post(
  "/register",
  validate(authValidator.registerSchema),
  authController.registerUser,
);

authRouter.post(
  "/login",
  validate(authValidator.loginSchema),
  authController.loginUser,
);

authRouter.post("/logout", authController.logoutUser);

export default authRouter;
