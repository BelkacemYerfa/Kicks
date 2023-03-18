const TestFunc = async (req, res) => {
  try {
    res.status(200).json({
      msg: "welcome",
    });
  } catch (error) {
    return res.status(200).json({
      msg: error.message,
    });
  }
};

module.exports = {
  TestFunc,
};
