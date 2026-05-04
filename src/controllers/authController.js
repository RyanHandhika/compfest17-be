import authService from "../services/authService.js";

const registerUser = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;

    if (!full_name || !email || password) {
      alert("Please fill all field!");
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

export default { registerUser };
