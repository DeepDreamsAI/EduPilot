const express = require("express");
const router = express.Router();
const { storeChat } = require("../controllers/chat.controller");

// Define an endpoint to make the OpenAI API request
router.post("/chat", storeChat);

module.exports = router;