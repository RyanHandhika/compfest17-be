import joi from "joi";

const testimonialSchema = joi.object({
  userId: joi.number().required().messages({
    "any.required": "User ID is required",
  }),
  review: joi.string().required().messages({
    "any.required": "Review is required",
  }),
  rating: joi.number().min(1).max(5).required().messages({
    "any.required": "Rating is required",
    "number.min": "Rating must be between 1 and 5",
    "number.max": "Rating must be between 1 and 5",
  }),
});

export default { testimonialSchema };
