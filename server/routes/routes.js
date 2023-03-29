const express = require("express");
const {
  RegisterFunc,
  LoginFunc,
  LogoutFunc,
  RegisterUsePassport,
} = require("../controllers/auth");
const { LoggedSeccesfully } = require("../controllers/googleAuth");
const isLogged = require("../middlewares/authValidator");
const router = express.Router();
const passport = require("passport");
/* const passportUser = require("../models/passportUser"); */

router.route("/register").post(RegisterFunc);
router.route("/login/:Email/:Password").get(LoginFunc);
router.route("/logout").get(LogoutFunc);
router.route("/registerPassport").post(RegisterUsePassport);
router.route("/loginGoogle").get(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "successfull",
    user: req.user,
    session: req.sessionStore.sessions,
  });
  
});
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

passport.serializeUser(function (user, done) {
  done(null, user); //for usersave
});

passport.deserializeUser(function (user, done) {
  done(null, user); //for usersave
});

module.exports = router;
