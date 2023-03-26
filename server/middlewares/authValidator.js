const isLogged = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/auth");
  }
  next();
};

module.exports = isLogged;
