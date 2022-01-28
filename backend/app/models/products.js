const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema for product
const productSchema = new Schema({

})

// creating model
const Product = mongoose.model('Product', productSchema)

module.exports = Product