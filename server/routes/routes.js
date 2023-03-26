const express = require("express");
const {
  RegisterFunc,
  LoginFunc,
  LogoutFunc,
  RegisterUsePassport,
} = require("../controllers/auth");
const isLogged = require("../middlewares/authValidator");
const router = express.Router();
/* const passport = require("passport");
const passportUser = require("../models/passportUser"); */

router.route("/register").post(RegisterFunc);
router.route("/login/:Email/:Password").get(LoginFunc);
router.route("/logout").get(LogoutFunc);
router.route("/registerPassport").post(RegisterUsePassport);
router.get("/test", isLogged, (req, res) => {
  res.send("hello");
});
/* router.post("/loginPassport", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    const { Email, Password } = req.body;
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
}); */ //same concept as the loginFunc
module.exports = router;
