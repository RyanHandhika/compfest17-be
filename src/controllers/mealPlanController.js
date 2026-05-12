import mealPlanService from "../services/mealPlanService.js";

const createMealPlan = async (req, res, next) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    if (!name || !price || !description) {
      console.log("Please fill all field!");
    }

    const newMealPlan = await mealPlanService.createMealPlan(req.body);

    res.status(201).json({
      message: "Meal plan created successfully",
      data: newMealPlan,
    });
  } catch (error) {
    next(error);
  }
};

export default { createMealPlan };
