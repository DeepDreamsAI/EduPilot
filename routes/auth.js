const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { body } = require("express-validator");
const User = require("../models/user");
const isAuth = require("../middleware/is-auth");

router.post(
	"/signup",
	[
		body("email")
			.trim()
			.isEmail()
			.withMessage("Please enter a valid email.")
			.custom((value, { req }) => {
				return User.findOne({ email: value }).then((userDoc) => {
					if (userDoc) return Promise.reject("E-Mail address already exists!");
				});
			})
			.normalizeEmail(),
		body("password").isLength({ min: 5 }),
		body("name").trim().not().isEmpty(),
	],
	authController.postSignup
);

router.post(
	"/login",
	[
		body("email")
			.trim()
			.isEmail()
			.withMessage("Please enter a valid email.")
			.normalizeEmail(),
		body("password").isLength({ min: 5 }),
	],
	authController.postLogin
);

router.get("/status", isAuth, authController.getUserStatus);

router.patch(
	"/status",
	isAuth,
	[body("status").trim().not().isEmpty()],
	authController.updateUserStatus
);

module.exports = router;
