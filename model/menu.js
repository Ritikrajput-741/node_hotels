const mongoose = require("mongoose");

//define the menu schema
const menuSchemaData = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    require: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredient: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const  menuItems = mongoose.model('menuItem', menuSchemaData);
module.exports = menuItems;
