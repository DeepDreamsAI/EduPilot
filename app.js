const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth");

const MONGOURL =
	"mongodb+srv://tempacc_26:toor@cluster0.hclx7.mongodb.net/EduPilot";

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"OPTIONS, GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});
app.use(bodyParser.json());
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message, data });
	console.log(message);
});

mongoose
	.connect(MONGOURL)
	.then((result) => {
		const server = app.listen(8080);
		console.log("DB Connected");
	})
	.catch((err) => {
		console.log(err);
	});
