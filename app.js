const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const authRoutes = require("./routes/auth");
const chatRoutes = require("./routes/chat.routes");

require("dotenv").config();

const URI = process.env.MONGOURL;
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/", authRoutes);
app.use("/", chatRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
  console.log(message);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);

  mongoose
    .connect(URI)
    .then((result) => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
