const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const apiKey = process.env.OPENAI_API_KEY;
const apiUrl = "https://api.openai.com/v1/chat/completions";

// Define rate limit parameters
const maxRequestsPerMinute = 60; // Adjust as needed
const maxConcurrentRequests = 5; // Adjust as needed
const maxRecommendations = 10; // Minimum of 10 recommendations

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.careerRecommendations = async (req, res) => {
  const results = [];

  try {
    const filePath = path.join(__dirname, "../data", "popular_jobs.csv");
    const stream = fs.createReadStream(filePath).pipe(csv());

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const userMessages = [];
    let requestsThisMinute = 0;

    for await (const data of stream) {
      const userMessage = `I am interested in a career as a ${data.job_title}. What are the requirements for this role?`;
      userMessages.push(userMessage);

      if (
        userMessages.length >= maxRecommendations ||
        requestsThisMinute >= maxRequestsPerMinute
      ) {
        await processBatch(userMessages, headers, results);
        userMessages.length = 0; // Clear user messages
        requestsThisMinute = 0;
      } else {
        requestsThisMinute++;
      }
    }

    // Process any remaining user messages
    if (userMessages.length > 0) {
      await processBatch(userMessages, headers, results);
    }

    res.status(200).json({ message: "success", results });
  } catch (error) {
    console.error("Error reading or parsing CSV file:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  async function processBatch(userMessages, headers, results) {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant and you will respond.",
        },
        ...userMessages.map((content) => ({
          role: "user",
          content,
        })),
      ],
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: headers,
    });

    if (response.status === 429) {
      // Handle rate limit exceeded error
      console.error("Rate limit exceeded. Waiting and retrying...");
      await delay(5000); // Wait for 5 seconds before retrying (adjust as needed)
      await processBatch(userMessages, headers, results);
      return;
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    const assistantReplies = responseData.choices.map(
      (choice) => choice.message.content
    );

    for (let i = 0; i < userMessages.length; i++) {
      results.push({
        job_title: data.job_title,
        user_message: userMessages[i],
        assistant_reply: assistantReplies[i],
      });
    }
  }
};
