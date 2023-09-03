const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  messages: [
    {
      user: {
        role: String,
        content: String,
      },
      assistance: {
        role: String,
        content: String,
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
