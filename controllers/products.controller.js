const Product = require("../models/products.model");

module.exports.productsController = {
  addProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
      });
      res.json("Added");
    } catch (error) {
      res.json(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error);
    }
  },

  editProducts: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("edited");
    } catch (error) {
      res.json(error);
    }
  },
  getProductsByCategory: async (req, res) => {
    try {
      const getCategory = await Product.find(
        {},
        {
          category: req.body.category,
        }
      );
      res.json(getCategory);
    } catch (error) {
      res.json(error);
    }
  },
  allProducts: async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.json(allProducts);
    } catch (error) {
      res.json(error);
    }
  },
  getProductsByBrand: async (req, res) => {
    try {
      const getBrand = await Product.find(
        {},
        {
          brand: req.body.brand,
        }
      );
      res.json(getBrand);
    } catch (error) {
      res.json(error);
    }
  },
};
