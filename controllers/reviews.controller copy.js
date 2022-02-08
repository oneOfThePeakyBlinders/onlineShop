const Review = require("../models/Review.model");

module.exports.reviewController = {
  createReview: async (req, res) => {
    try {
      const { user, text, product } = req.body;
      await Review.create({
        user,
        text,
        product
      });
      res.json("added");
    } catch (e) {
      res.json(e);
    }
  },
  editReview: async (req, res) => {
    try {
      const { user, text, product } = req.body;
      await Review.findByIdAndUpdate(req.params.id, {
        user,
        text,
        product
      });
      res.json("Edited");
    } catch (e) {
      res.json(e);
    }
  },
  getOneReviewById: async (req, res) => {
    try {
      const getOne = await Review.findById(req.params.id);
      res.json(getOne);
    } catch (e) {
      res.json(e);
    }
  },
  getAllReviews: async (req, res) => {
    try {
      const getAll = await Review.find();
      res.json(getAll);
    } catch (e) {
      res.json(e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (e) {
      res.json(e);
    }
  }
};
