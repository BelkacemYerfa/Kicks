const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  url: String,
  name: String,
  description: String,
  price: String,
  stock: Number,
  brand: String,
  features: Array,
  thumbnail: String,
  images: Array,
  date: {
    type: Date,
    default: Date.now(),
  },
});
//check the needed from the design config
//notes for products :
/*
 add category , 
 add images array , 
 add shoes sizes , 
 add the release date , 
 add the description
*/
module.exports = mongoose.model(
  "productSchema",
  productSchema,
  "productDetails"
);
