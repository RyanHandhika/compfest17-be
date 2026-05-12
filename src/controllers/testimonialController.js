import testimonialService from "../services/testimonialService.js";

const createTestimonial = async (req, res, next) => {
  try {
    const { userId, review, rating } = req.body;

    if (!userId || !review || !rating) {
      return res.status(400).json({
        message: "Please fill all fields!",
      });
    }

    const newTestimonial = await testimonialService.createTestimonial(req.body);

    res.status(201).json({
      message: "Testimonial created successfully",
      data: newTestimonial,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTestimonials = async (req, res, next) => {
  try {
    const allTestimonials = await testimonialService.getAllTestimonials();

    res.json(allTestimonials);
  } catch (error) {
    next(error);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const { id } = req.params;

    await testimonialService.deleteTestimonial(id);

    res.json({
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createTestimonial,
  getAllTestimonials,
  deleteTestimonial,
};
