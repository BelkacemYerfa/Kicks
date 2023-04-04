const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  RegisterFunc,
  LoginFunc,
  LogoutFunc,
  RegisterUsePassport,
} = require("../controllers/auth");
const { LoggedSeccesfully } = require("../controllers/googleAuth");
const isLogged = require("../middlewares/authValidator");
const { getShowRowData } = require("../controllers/getShowRowData");
const { getSingelData } = require("../controllers/getSingelData");
/* const passportUser = require("../models/passportUser"); */

router.route("/register").post(RegisterFunc);
router.route("/login/:Email/:Password").get(LoginFunc);
router.route("/logout").get(LogoutFunc);
router.route("/registerPassport").post(RegisterUsePassport);
router.route("/loginGoogle").get(LoggedSeccesfully);
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "http://localhost:5173/auth",
  })
);
router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("http://localhost:5173/auth");
});

router.route("/newProduct").get(getShowRowData);
router.route("/product/:id").get(getSingelData);

passport.serializeUser(function (user, done) {
  done(null, user); //for usersave
});

passport.deserializeUser(function (user, done) {
  done(null, user); //for usersave
});

module.exports = router;
