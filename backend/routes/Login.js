// routes/LoginRoute.js
const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

// Login Route
router.post("/", async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Check if user with provided phone number exists
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password (assuming plain text comparison for simplicity)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Respond with a simple success message
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
