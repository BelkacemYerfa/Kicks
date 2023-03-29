const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
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
