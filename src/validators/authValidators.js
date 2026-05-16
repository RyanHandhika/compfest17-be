import Joi from "joi";

const registerSchema = Joi.object({
  full_name: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.empty": "Full name cannot be empty",
    "string.alphanum": "Full name must only contain letters and numbers",
    "string.min": "Full name must be at least 3 characters long",
    "string.max": "Full name must be at most 30 characters long",
    "any.required": "Full name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password cannot be empty",
    "string.min": "Password must be at least 8 characters",
    "any.required": "Password is required",
  }),
  role: Joi.string().valid("USER", "OPERATOR", "ADMIN").required().messages({
    "string.empty": "Role cannot be empty",
    "any.only": "Role must be one of USER, OPERATOR, or ADMIN",
    "any.required": "Role is required",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required",
  }),
});

export default { registerSchema, loginSchema };
