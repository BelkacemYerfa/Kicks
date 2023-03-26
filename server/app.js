const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const ConnectDb = require("./db/connect");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const UserSchemaPassport = require("./models/passportUser");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
    secret: "nonesense",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "118172967565-eekgvocci2og4qi9ai1uem4329klo1c3.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/api/v1/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      }); for usersave */
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user); //for usersave
});

passport.deserializeUser(function (user, done) {
  done(null, user); //for usersave
});

passport.use(new passportLocal(UserSchemaPassport.authenticate()));

passport.serializeUser(UserSchemaPassport.serializeUser());
passport.deserializeUser(UserSchemaPassport.deserializeUser());

app.use(express.json());
app.use(bodyParser.json());

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
