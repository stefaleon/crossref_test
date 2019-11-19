const express = require("express");
const router = express.Router();

const Publication = require("../models/Publication");

// @route   GET /articles?offset=0&limit=10
// @desc    Get articles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);

    const articles = await Publication.find()
      .sort("doi")
      .skip(offset)
      .limit(limit);
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
