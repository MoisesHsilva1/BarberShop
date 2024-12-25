const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || password) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return res.status(400).json({ error: "E-email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar usuario" });
  }
}

module.exports = registerUser;
