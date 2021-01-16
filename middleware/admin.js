function admin(req, res, next) {
  if (req.user.role !== "admin") {
    return res
      .status(400)
      .json({ message: "Action not allowed , you are not an Admin" });
  }
  next();
}

module.exports = admin;
