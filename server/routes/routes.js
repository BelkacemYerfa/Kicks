const express = require("express");
const { TestFunc } = require("../controllers/main");
const router = express.Router();

router.route("/").get(TestFunc);

module.exports = router;
