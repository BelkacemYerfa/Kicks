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
  const isMatch = await UserSchema.findAndValidate(Email, Password);
  if (!isMatch[0]) {
    return res
      .status(401)
      .json({ message: "Password is incorrect , check your creditenls" });
  }
  const token = await isMatch[1].createJWT(); //refrer to findeduser in the method
  req.session.token = token;
  req.session.user_Id = isMatch[1]._id;
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
  const user = await UserSchema.create({
    userFirstName: FirstName,
    userLastName: LastName,
    Email: Email,
    Password,
  });
  const token = await user.createJWT();
  req.session.user_Id = user._id + " " + token;
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
