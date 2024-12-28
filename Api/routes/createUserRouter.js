const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

router.post("/users", async (req, res) => {
  const { name, email, telephone } = req.body;

  try {
    const user = await createUser(name, email, telephone);
    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
