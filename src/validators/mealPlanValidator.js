import joi from "joi";

const mealPlanSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "Name cannot be empty",
    "any.required": "Name is required",
  }),
  price: joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  description: joi.string().required().messages({
    "string.empty": "Description cannot be empty",
    "any.required": "Description is required",
  }),
  imageUrl: joi.string().uri().messages({
    "string.empty": "Image URL cannot be empty",
    "string.uri": "Image URL must be a valid URI",
  }),
});

export default { mealPlanSchema };
