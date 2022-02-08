const User = require("../models/User.model")

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      const { name, cart } = req.body
      await User.create({
        name,
        cart,
      })
      res.json('Клиент добавлени')
    } catch (err) {
      res.json('Ошибка при добавлении клиента')
    }
  },

  changeUser: async (req, res) => {
    try {
      const { name, cart } = req.body
      await User.findByIdAndUpdate({
        name,
        cart,
      })
    } catch (err) {
      res.json('Ошибка при изменении')
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.json('Клиент удален')
    } catch (err) {
      res.json('Ошибка при удалении клиента')
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch (err) {
      res.json('Ошибка при выводе клиента по ID')
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.json('Ошибка при выводе всех клиентов')
    }
  },
};