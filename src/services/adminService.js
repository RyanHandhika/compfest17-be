import { prisma } from "../db/prisma.js";

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getSubscriptions = async () => {
  const subscriptions = await prisma.subscription.findMany();
  return subscriptions;
};

const deleteUser = async (id) => {
  const userId = Number(id);

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

export default {
  getUsers,
  getSubscriptions,
  deleteUser,
};
