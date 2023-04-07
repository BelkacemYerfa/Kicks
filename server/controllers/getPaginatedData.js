const asynWraper = require("../middlewares/asyncFunc");
const productSchema = require("../models/productSchema.js");

const getPaginatedData = asynWraper(async (req, res, next) => {
  const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.page);
  if (!limit) {
    return res.status(400).json({
      msg: "please provide a limit",
    });
  }
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let results = {};
  const fetchedProducts = await productSchema
    .find({})
    .skip(startIndex)
    .limit(limit);
  if (!fetchedProducts) {
    return res.status(404).json({
      success: true,
      msg: "no element found in the db with those queries",
    });
  }
  results.findedResult = fetchedProducts;
  if (endIndex < (await productSchema.countDocuments())) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  res.status(200).json({
    success: true,
    data: results,
  });
  next();
});

module.exports = {
  getPaginatedData,
};
