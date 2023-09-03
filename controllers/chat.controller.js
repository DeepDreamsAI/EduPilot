require("dotenv").config();

const Chat = require("../models/chat.model");
const apiKey = process.env.OPENAI_API_KEY;
// Define the API endpoint URL
const apiUrl = "https://api.openai.com/v1/chat/completions";

exports.storeChat = async (req, res, next) => {
  const { content } = req.body;

  // Define your API request data
  const requestData = {
    model: "gpt-3.5-turbo", // Specify the appropriate model
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: content,
      },
    ],
  };

  // Define headers with your API key
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  // Make a POST request to the OpenAI API
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: headers,
    });

    const data = await response.json();

    if (!response) {
      throw new Error(data.messages || "something went wrong!");
    }

    console.log(data);

    // store into the database
    const storeMessage = {
      user: {
        role: "user",
        content: content,
      },
      assistance: {
        role: "assistance",
        content: data.choices[0].message.content,
      },
    };

    const chats = new Chat({
      messages: storeMessage,
    });

    await chats.save();
    console.log(chats);

    res.status(201).json({ message: "success!", data: chats });
  } catch (err) {
    res.status(500).json(err);
  }
};
