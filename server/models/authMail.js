const mongoose = require("mongoose");

const UserMail = new mongoose.Schema({
  id: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "email already registered"],
  },
  firstName: String,
  lastName: String,
  profilePhoto: String,
  password: String,
  source: {
    type: String,
    required: [true, "source not specified"],
  },
  lastVisited: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("UserMail", UserMail, "userMail");
