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
