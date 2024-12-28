const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");

router.post("/users", async (req, res) => {
  const { name, email, telephone } = req.body;

  try {
    const user = new UserModel({
      name,
      email,
      telephone,
    });

    await user.save();

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
