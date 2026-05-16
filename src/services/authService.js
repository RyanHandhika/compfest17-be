import { prisma } from "../db/prisma.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

const registerUser = async ({ full_name, email, password }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    console.log("Email already registered", "AUTH_EMAIL_TAKEN");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      fullName: full_name,
      email,
      password: hashedPassword,
      role: "USER",
    },
  });

  return {
    id: newUser.id,
    email: newUser.email,
    full_name: newUser.full_name,
    role: "USER",
  };
};

const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.password) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
  });

  return {
    user: {
      id: user.id,
      full_Name: user.fullName,
      email: user.email,
      role: user.role.toLowerCase(),
    },
    token,
  };
};

export default { registerUser, loginUser };
