const requireLogin = (req, res, next) => {
  if (!req.session.user_Id) {
    return res.status(401).send({ error: "You must log in!" });
  }
  next();
};

module.exports = requireLogin;
