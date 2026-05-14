import subscriptionService from "../services/subscriptionService.js";

const createSubscription = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.createSubscription(req.body);

    res.status(201).json(subscription);
  } catch (error) {
    next(error);
  }
};

const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await subscriptionService.getAllSubscriptions();

    res.status(200).json(subscriptions);
  } catch (error) {
    next(error);
  }
};

const getDetailSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.getDetailSubscriptionById(
      req.params.id,
    );

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json(subscription);
  } catch (error) {
    next(error);
  }
};

const updateSubscription = async (req, res, next) => {
  try {
    const updatedSubscription = await subscriptionService.updateSubscription(
      req.params.id,
      req.body,
    );

    if (!updatedSubscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json(updatedSubscription);
  } catch (error) {
    next(error);
  }
};

const deleteSubscription = async (req, res, next) => {
  try {
    const deletedSubscription = await subscriptionService.deleteSubscription(
      req.params.id,
    );

    if (!deletedSubscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default {
  createSubscription,
  getAllSubscriptions,
  getDetailSubscriptionById,
  updateSubscription,
  deleteSubscription,
};
