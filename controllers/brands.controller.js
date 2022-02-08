const Brand = require("../models/Brand.model");

module.exports.brandController = {
  createBrand: async (req, res) => {
    try {
      const { name } = req.body;
      await Brand.create({
        name
      });
      res.json("added");
    } catch (e) {
      res.json(e);
    }
  },
  editBrand: async (req, res) => {
    try {
      const { name } = req.body;
      await Brand.findByIdAndUpdate(req.params.id, {
        name
      });
      res.json("Edited");
    } catch (e) {
      res.json(e);
    }
  },
  getOneBrandById: async (req, res) => {
    try {
      const getOne = await Brand.findById(req.params.id);
      res.json(getOne);
    } catch (e) {
      res.json(e);
    }
  },
  getAllBrands: async (req, res) => {
    try {
      const getAll = await Brand.find();
      res.json(getAll);
    } catch (e) {
      res.json(e);
    }
  },
  deleteBrand: async (req, res) => {
    try {
      await Brand.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (e) {
      res.json(e);
    }
  }
};
