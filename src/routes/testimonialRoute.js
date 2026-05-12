import { Router } from "express";
import testimonialController from "../controllers/testimonialController.js";
import validate from "../middlewares/validate.js";
import testimonialValidator from "../validators/testimonialValidators.js";

const testimonialRouter = Router();

testimonialRouter.get("/", testimonialController.getAllTestimonials);

testimonialRouter.post(
  "/",
  validate(testimonialValidator.testimonialSchema),
  testimonialController.createTestimonial,
);

testimonialRouter.delete("/:id", testimonialController.deleteTestimonial);

export default testimonialRouter;
