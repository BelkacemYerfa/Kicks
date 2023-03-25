const express = require("express");
const { RegisterFunc, LoginFunc, LogoutFunc } = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(RegisterFunc);
router.route("/login/:Email/:Password").get(LoginFunc);
router.route("/logout").get(LogoutFunc);

module.exports = router;
