import joi from "joi";

const subscriptionSchema = joi.object({
  userId: joi.number().required(),
  phoneNumber: joi.string().required(),
  planId: joi.number().required(),
  mealType: joi.string().valid("breakfast", "lunch", "dinner").required(),
  deliveryDays: joi
    .string()
    .valid("monday", "tuesday", "wednesday", "thursday", "friday")
    .required(),
  allergies: joi.string().allow(null),
  status: joi.string().valid("ACTIVE", "PAUSED", "CANCEL").required(),
});

export default {
  subscriptionSchema,
};
