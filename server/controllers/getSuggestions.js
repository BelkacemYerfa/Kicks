const asyncWraper = require("../middlewares/asyncFunc");
const productSchema = require("../models/productSchema");

const getSuggestions = asyncWraper(async (req, res, next) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ success: false, message: "id is required" });
  const product = await productSchema.findById(id);
  if (!product)
    return res
      .status(404)
      .json({ success: false, message: "product not found" });
  const fetchedSuggestions = await productSchema
    .find({
      brand: product.brand,
      _id: { $ne: id }, //$ne means not equal
    })
    .skip(Math.floor(Math.random * 100))
    .limit(16);
  if (!fetchedSuggestions)
    return res
      .status(404)
      .json({ success: false, message: "suggestions not found" });
  const fetchedProducts = fetchedSuggestions.map((item) => {
    return {
      id: item._id,
      name: item.name,
      price: item.price,
      thumbnail: item.thumbnail,
    };
  });

  res.status(200).json({
    success: true,
    data: fetchedProducts,
    message: "fetching suggestions",
  });
  next();
});

module.exports = {
  getSuggestions,
};
