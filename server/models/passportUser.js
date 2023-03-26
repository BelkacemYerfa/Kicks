const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchemaPassport = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
});

UserSchemaPassport.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchemaPassport, "userPassport");
