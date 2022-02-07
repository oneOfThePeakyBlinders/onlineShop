const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: String
})

const Brand = mongoose.model('Brand', brandSchema)
