const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
});

/* POST /api/food/  [Protected] */
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

/* GET /api/food/ [Protected] */
router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItems);

module.exports = router;
