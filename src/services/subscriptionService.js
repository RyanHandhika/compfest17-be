import { prisma } from "../db/prisma.js";

const createSubscription = async (data) => {
  const subscription = await prisma.subscription.create({
    data,
  });

  return subscription;
};

const getAllSubscriptions = async () => {
  const subscriptions = await prisma.subscription.findMany();

  return subscriptions;
};

const getDetailSubscriptionById = async (id) => {
  const subscription = await prisma.subscription.findUnique({
    where: { id },
  });

  return subscription;
};

const updateSubscription = async (id, data) => {
  try {
    const updatedSubscription = await prisma.subscription.update({
      where: { id },
      data,
    });

    return updatedSubscription;
  } catch (error) {
    if (error.code === "P2025") {
      return null; // Subscription not found
    }
    throw error; // Rethrow other errors
  }
};

const deleteSubscription = async (id) => {
  try {
    const idSub = Number(id); // Ensure id is a number
    const deletedSubscription = await prisma.subscription.delete({
      where: { id: idSub },
    });

    return deletedSubscription;
  } catch (error) {
    if (error.code === "P2025") {
      return null; // Subscription not found
    }
    throw error; // Rethrow other errors
  }
};

export default {
  createSubscription,
  getAllSubscriptions,
  getDetailSubscriptionById,
  updateSubscription,
  deleteSubscription,
};
