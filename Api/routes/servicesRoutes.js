const express = require("express");
const router = express.Router();
const ServiceModel = require("../models/Service.model");

router.get("/services", async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;