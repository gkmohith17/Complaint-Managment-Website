const express = require("express");
const multer = require("multer");
const router = express.Router();
const Complaint = require("../models/Complaint");

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// POST route to create a complaint
router.post(
  "/",
  upload.fields([{ name: "photo" }, { name: "video" }]),
  (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Request Files:", req.files);

    const newComplaint = new Complaint({
      category: req.body.category,
      othercategory: req.body.othercategory,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      comment: req.body.comment,
      photo: req.files["photo"] ? req.files["photo"][0].path : "",
      video: req.files["video"] ? req.files["video"][0].path : "",
      phoneId: req.body.phoneId,
    });

    newComplaint
      .save()
      .then(() => res.json({ message: "Complaint registered successfully" }))
      .catch((err) => {
        console.error("Error saving complaint:", err);
        res.status(400).json({ error: err.message });
      });
  }
);

// GET route to fetch complaints
router.get("/", (req, res) => {
  Complaint.find()
    .then((complaints) => res.json(complaints))
    .catch((err) => {
      console.error("Error fetching complaints:", err);
      res.status(400).json({ error: err.message });
    });
});

module.exports = router;
