const asyncWraper = require("../middlewares/asyncFunc");
const UserSchema = require("../models/UserSchema");
const UserSchemaPassport = require("../models/passportUser");

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
  res.status(200).json({
    message: "Login successful",
    user: isMatch[1],
    session: req.sessionStore.sessions,
  });
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
  res.status(201).json({
    message: "Register successful",
    user: user,
    session: req.sessionStore.sessions,
  });
  next();
});

const LogoutFunc = asyncWraper(async (req, res, next) => {
  req.session = null;
  res.redirect("/auth");
});

const RegisterUsePassport = asyncWraper(async (req, res, next) => {
  const { Email, FirstName, LastName, Password } = req.body;
  if (!Email || !FirstName || !LastName || !Password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password" });
  }
  const findUser = await UserSchemaPassport.findOne({ Email: Email });
  if (findUser) {
    return res.status(400).json({ message: "Email already exist" });
  }
  const user = await UserSchemaPassport({
    Email: Email,
    username: FirstName + " " + LastName,
  });
  const newUser = await UserSchemaPassport.register(user, Password);
  res.status(200).json({ message: "Register successful", newUser: newUser });
  next();
});

module.exports = {
  RegisterFunc,
  LoginFunc,
  LogoutFunc,
  RegisterUsePassport,
};
