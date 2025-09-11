const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

// Create new food item

async function createFood(req, res) {
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    video: fileUploadResult.url,
    description: req.body.description,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "Food item created successfully",
    food: foodItem,
  });
}

async function getFoodItems(req, res) {
  try {
    const foodItems = await foodModel.find();
    res.status(200).json({
      message: "Food items fetched successfully",
      foodItems,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { createFood, getFoodItems };
