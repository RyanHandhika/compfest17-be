import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.order.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.user.deleteMany();

  // Create demo users
  const hashedPassword = await bcrypt.hash("Password123", 12);

  const operator = await prisma.user.create({
    data: {
      fullName: "Admin Operator",
      email: "operator@seacatering.com",
      passwordHash: hashedPassword,
      role: "operator",
    },
  });

  const user1 = await prisma.user.create({
    data: {
      fullName: "John Doe",
      email: "john@example.com",
      passwordHash: hashedPassword,
      role: "user",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      fullName: "Sarah Jenkins",
      email: "sarah@example.com",
      passwordHash: hashedPassword,
      role: "user",
    },
  });

  // Create subscriptions
  const sub1 = await prisma.subscription.create({
    data: {
      userId: user1.id,
      planType: "protein",
      mealTypes: ["Breakfast", "Lunch", "Dinner"],
      deliveryDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      mealsPerDelivery: 3,
      pricePerWeek: 315,
      totalMeals: 60,
      remainingMeals: 42,
      status: "active",
      nextDelivery: new Date(Date.now() + 86400000),
    },
  });

  const sub2 = await prisma.subscription.create({
    data: {
      userId: user2.id,
      planType: "diet",
      mealTypes: ["Breakfast", "Lunch"],
      deliveryDays: ["Mon", "Wed", "Fri"],
      mealsPerDelivery: 2,
      pricePerWeek: 72,
      totalMeals: 24,
      remainingMeals: 18,
      status: "active",
      nextDelivery: new Date(Date.now() + 172800000),
    },
  });

  // Create sample orders
  await prisma.order.createMany({
    data: [
      {
        userId: user1.id,
        subId: sub1.id,
        planType: "Protein Plan",
        amount: 315,
        status: "delivered",
      },
      {
        userId: user2.id,
        subId: sub2.id,
        planType: "Diet Plan",
        amount: 72,
        status: "pending",
      },
      {
        userId: user1.id,
        subId: sub1.id,
        planType: "Protein Plan",
        amount: 315,
        status: "delivered",
      },
    ],
  });

  console.log("✅ Seed complete!");
  console.log("\n📋 Demo accounts (password: Password123):");
  console.log("   Operator → operator@seacatering.com");
  console.log("   User     → john@example.com");
  console.log("   User     → sarah@example.com\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
