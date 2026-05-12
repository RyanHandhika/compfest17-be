import adminService from "../services/adminService.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await adminService.getUsers();

    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await adminService.getSubscriptions();

    res.json(subscriptions);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await adminService.deleteUser(id);

    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getUsers,
  getSubscriptions,
  deleteUser,
};
