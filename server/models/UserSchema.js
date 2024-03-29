const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  userFirstName: {
    type: String,
    required: [true, "Please enter your first name"],
    minlength: [5, "First name must be at least 2 characters"],
    maxlength: [20, "First name must be at most 20 characters"],
    trim: true,
  },
  userLastName: {
    type: String,
    required: [true, "Please enter your first name"],
    minlength: [5, "First name must be at least 2 characters"],
    maxlength: [20, "First name must be at most 20 characters"],
    trim: true,
  },
  Email: {
    type: String,
    required: [true, "Please enter your email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
    trim: true,
  },
  Password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [10, "Password must be at least 10 characters"],
  },
  createdAccount: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(12);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
}); // Hash password before saving to database

UserSchema.statics.findAndValidate = async function (Email, Password) {
  const findUser = await this.findOne({ Email });
  if (!findUser) {
    return { message: "Email does not exist" };
  }
  const isMatch = await bcrypt.compare(Password, findUser.Password);
  return [isMatch, findUser];
};

UserSchema.methods.createJWT = async () => {
  const token = await JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

module.exports = mongoose.model("UserSchema", UserSchema, "users");
