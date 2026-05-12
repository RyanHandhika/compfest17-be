import mealPlanService from "../services/mealPlanService.js";

const getAllMealPlans = async (req, res, next) => {
  try {
    const allMealPlans = await mealPlanService.getAllMealPlans();

    res.json(allMealPlans);
  } catch (error) {
    next(error);
  }
};

const getMealPlanById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mealPlan = await mealPlanService.getMealPlanById(id);

    if (!mealPlan) {
      console.log("Meal plan not found", "MEAL_PLAN_NOT_FOUND");
    }

    res.json(mealPlan);
  } catch (error) {
    next(error);
  }
};

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

const updateMealPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;

    const updatedMealPlan = await mealPlanService.updateMealPlan(id, req.body);

    res.json({
      message: "Meal plan updated successfully",
      data: updatedMealPlan,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMealPlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMealPlan = await mealPlanService.deleteMealPlan(id);

    res.json({
      message: "Meal plan deleted successfully",
      data: deletedMealPlan,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createMealPlan,
  getAllMealPlans,
  getMealPlanById,
  updateMealPlan,
  deleteMealPlan,
};
