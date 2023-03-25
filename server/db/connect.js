const { connect } = require("mongoose");

const ConnectDb = async (Url) => {
  return await connect(Url);
};

module.exports = ConnectDb;
