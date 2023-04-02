const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const ConnectDb = require("./db/connect");
const session = require("express-session");
const sessions = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    secret: "nonesense",
  })
);

app.use(sessions());

app.use(passport.initialize());
app.use(passport.session());

/* passport.use(new passportLocal(UserSchemaPassport.authenticate()));

passport.serializeUser(UserSchemaPassport.serializeUser());
passport.deserializeUser(UserSchemaPassport.deserializeUser()); */

app.use(express.json());

app.use("/api/v1", router);

/* app.get("/Test", async (req, res) => {
  if (!req.session.user_Id) {
    return res.redirect("http://loaclhost:5173/auth");
  }
  res.render("Hello");
}); */

const Port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDb(process.env.MONGO_URI);
    app.listen(Port, () => {
      console.log(`server is runing on port ${Port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
