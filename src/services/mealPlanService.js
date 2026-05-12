import { prisma } from "../db/prisma.js";

const getAllMealPlans = async () => {
  const meatPlans = await prisma.mealPlan.findMany();

  return meatPlans;
};

const getMealPlanById = async (id) => {
  const idNumber = Number(id);
  const mealPlan = await prisma.mealPlan.findUnique({
    where: { id: idNumber },
  });

  return mealPlan;
};

const createMealPlan = async ({ name, price, description, imageUrl }) => {
  const newMealPlan = await prisma.mealPlan.create({
    data: {
      name,
      price,
      description,
      imageUrl,
    },
  });

  return newMealPlan;
};

const updateMealPlan = async (id, { name, price, description, imageUrl }) => {
  const idNumber = Number(id);
  const updatedMealPlan = await prisma.mealPlan.update({
    where: { id: idNumber },
    data: {
      name,
      price,
      description,
      imageUrl,
    },
  });

  return updatedMealPlan;
};

const deleteMealPlan = async (id) => {
  const idNumber = Number(id);
  const deletedMealPlan = await prisma.mealPlan.delete({
    where: { id: idNumber },
  });

  return deletedMealPlan;
};

export default {
  createMealPlan,
  getAllMealPlans,
  getMealPlanById,
  updateMealPlan,
  deleteMealPlan,
};
