const Category = require("../models/Сategory.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Added");
    } catch (error) {
      res.json(error);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error);
    }
  },
  editCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("edited");
    } catch (error) {
      res.json(error);
    }
  },
  allCategories: async (req, res) => {
    try {
      const getAllCategory = await Category.fing();
      res.json(getAllCategory);
    } catch (error) {
      res.json(error);
    }
  },
};
