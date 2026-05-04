import { prisma } from "../db/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async ({ full_name, email, password }) => {
  const existingUser = await tx.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new BadRequestError("Email already registered", "AUTH_EMAIL_TAKEN");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await tx.user.create({
    data: {
      fullName,
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

export default { registerUser };
