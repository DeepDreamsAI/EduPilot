const express = require("express");
const router = express.Router();
const { careerRecommendations } = require("../controllers/career.controller");

// Define an endpoint to make the OpenAI API request
router.get("/career", careerRecommendations);

module.exports = router;
