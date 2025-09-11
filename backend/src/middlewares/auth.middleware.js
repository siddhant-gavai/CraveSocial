const foodPartnerModel = require("../models/foodPartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: " Please log in to access this resource." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    if (!foodPartner) {
      return res.status(401).json({ message: "Please Login First." });
    }
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}

async function authUserMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: " Please login first ." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Please Login First." });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}

module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware,
};
