import { prisma } from "../db/prisma.js";

const createTestimonial = async ({ userId, review, rating }) => {
  const newTestimonial = await prisma.testimonial.create({
    data: {
      userId,
      review,
      rating,
    },
  });

  return newTestimonial;
};

const getAllTestimonials = async () => {
  const testimonials = await prisma.testimonial.findMany({
    include: {
      user: {
        select: {
          fullName: true,
        },
      },
    },
  });

  return testimonials;
};

const deleteTestimonial = async (id) => {
  const idNumber = Number(id);
  await prisma.testimonial.delete({
    where: { id: idNumber },
  });
};

export default {
  createTestimonial,
  getAllTestimonials,
  deleteTestimonial,
};
