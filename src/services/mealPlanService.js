import { prisma } from "../db/prisma.js";

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

export default { createMealPlan };
