const asyncWrapper = require("../middlewares/asyncFunc");
const productSchema = require("../models/productSchema");

const getShowRowData = asyncWrapper(async (req, res, next) => {
  const product = await productSchema.find().skip(200).limit(10);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "No product found",
    });
  }
  const newProuct = product.map((item) => {
    return {
      id: item._id,
      name: item.name,
      price: item.price,
      thumbnail: item.thumbnail,
    };
  });
  res.status(200).json({
    success: true,
    data: newProuct,
    msg: "Data fetched successfully",
  });
  next();
});

module.exports = {
  getShowRowData,
};
