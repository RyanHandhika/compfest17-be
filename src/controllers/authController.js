import authService from "../services/authService.js";

const registerUser = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || password) {
      console.log("Please fill all field!");
    }

    const newUser = await authService.registerUser(req.body);

    res.status(201).json({
      status: "Success",
      message: "Account Created",
      data: {
        user: {
          _id: newUser.id,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || password) {
      console.log("Please fill all field!");
    }

    const result = await authService.loginUser(req.body);

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

export default { registerUser, loginUser, logoutUser };
