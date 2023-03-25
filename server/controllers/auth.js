const asyncWraper = require("../middlewares/asyncFunc");
const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");

const LoginFunc = asyncWraper(async (req, res, next) => {
  const { Email, Password } = req.params;
  if (!Email || !Password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password" });
  }
  const findUser = await UserSchema.findOne({ Email: Email });
  if (!findUser) {
    return res.status(400).json({ message: "Email does not exist" });
  }
  const isMatch = await bcrypt.compare(Password, findUser.Password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Password is incorrect , check your creditenls" });
  }
  const token = await findUser.createJWT();
  req.session.user_Id = findUser._id + " " + token;
  res.status(200).json({ message: "Login successful" });
  next();
});

const RegisterFunc = asyncWraper(async (req, res, next) => {
  const { FirstName, LastName, Email, Password } = req.body;
  if (!Email || !Password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password" });
  }
  const findUser = await UserSchema.findOne({ Email: Email });
  if (findUser) {
    return res.status(400).json({ message: "Email already exist" });
  }
  const salt = await bcrypt.genSalt(12);
  const newPassword = await bcrypt.hash(Password, salt);
  const user = await UserSchema.create({
    userFirstName: FirstName,
    userLastName: LastName,
    Email: Email,
    Password: newPassword,
  });
  const token = await user.createJWT();
  req.session.user_Id = findUser._id + " " + token;
  res.redirect("/");
  next();
});

const LogoutFunc = asyncWraper(async (req, res, next) => {
  res.redirect("/auth");
});

module.exports = {
  RegisterFunc,
  LoginFunc,
  LogoutFunc,
};
