const express = require("express");
const { signUp,login } = require("../../controllers/auth/authController");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router; // Use CommonJS export