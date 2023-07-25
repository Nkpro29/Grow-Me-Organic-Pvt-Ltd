const express = require("express");
const UserModel = require("./userModel");
const router = express.Router();  

router.post("/api/submit-form", async (req, res) => {
  try {
    const userData = req.body;
    const userEntry = new UserModel(userData);
    await userEntry.save();
    
    res.status(200).json({ message: "Form data submitted successfully!" });
  } catch (error) {
    console.error("Error submitting form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
