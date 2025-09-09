const foodModel = require("../models/food.model");
const { authFoodPartnerMiddleware } = require("../middlewares/auth.middleware");

// Create new food item

async function createFood(req , res) {
    const { name, video, description } = req.body;
    
}

module.exports = { createFood };
