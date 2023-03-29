const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const UserMail = require("../models/googleUserSchema");
const { response } = require("express");

const GoogleStrategyConfig = {
  clientID:
    "118172967565-eekgvocci2og4qi9ai1uem4329klo1c3.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "/api/v1/auth/google/callback",
  passReqToCallback: true,
};

const GoogleAuthFunction = async (
  request,
  accessToken,
  refreshToken,
  profile,
  done , 
) => {
  const id = profile.id;
  const email = profile.email;
  const firstName = profile.family_name;
  const lastName = profile.given_name;
  const profilePhoto = profile.picture;
  const currentUser = await UserMail.findOne({
    email,
  });
  if (currentUser) {
    request.session.user_Id = currentUser._id;
    return done(null, currentUser);
  }
  const user = await UserMail.create({
    id,
    email,
    firstName,
    lastName,
    profilePhoto,
    source: "google",
  });
  request.session.user_Id = user._id;
  return done(null, user);
};

passport.use(new GoogleStrategy(GoogleStrategyConfig, GoogleAuthFunction));

const LoggedSeccesfully = (req, res) => {
  res.status(200).json({
    success: true,
    message: "successfull",
    user: req.user,
    session: req.sessionID,
  });
};

module.exports = {
  LoggedSeccesfully,
};
