const asyncWraper = require("../middlewares/asyncFunc");
const productSchema = require("../models/productSchema");

const getSingelData = asyncWraper(async (req, res, next) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ success: false, message: "id is required" });
  console.log(id);
  const singleProductData = await productSchema.findById(id);
  if (!singleProductData)
    return res
      .status(404)
      .json({ success: false, message: "the product is not found" });
  res.status(200).json({
    success: true,
    data: singleProductData,
    message: "fetching single product data",
  });
  next();
});

module.exports = {
  getSingelData,
};
