const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    // if tours url skip auth
    if (req.url === "/tours") {
      return next();
    }
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
