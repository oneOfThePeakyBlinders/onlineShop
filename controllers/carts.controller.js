const Cart = require("../models/Cart.model")

module.exports.cartsController = {
  addCart: async (req, res) => {
    try {
      await Cart.create({
        user: req.body.user
      })
      res.json('Корзина создана')
    } catch (err) {
      res.json('Ошибка при добавлении корзины')
    }
  },

  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id)
      res.json('Корзина удалена')
    } catch (err) {
      res.json('Ошибка при удалении корзины')
    }
  }, 

  changeCart: async (req, res) => {
    try {
      await Cart.create({
        user: req.body.user
      })
      res.json('Корзина изменена')
    } catch (err) {
      res.json('Ошибка при изменении корзины')
    }
  },

  getCartById: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id)
      res.json(cart)
    } catch (err) {
      res.json('Ошибка при выводе корзины')
    }
  },

  addProductToCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        $push: {products: product}
      })
      res.json('Товар добавлен в корзину')
    } catch (err) {
      res.json('Ошибка при добавлении товара в корзину')
    }
  },

  deleteProductFromCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        $push: {products: product}
      })
      res.json('Товар добавлен в корзину')
    } catch (err) {
      res.json('Ошибка при добавлении товара в корзину')
    }
  },
};