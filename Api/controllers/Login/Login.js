const jsonwebtoken = require("jsonwebtoken");
const User = require("../../models/user.model");

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Dados insuficientes" });
  }

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "E-mail ou senha incorretos" });
    }

    const token = jsonwebtoken.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      "PasswordToken",
      { expiresIn: "1h" }
    );

    res.cookie("Token", token, { httpOnly: true, secure: true });
    return res.status(200).json({ message: "Login realizado com sucesso" });
  } catch (err) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
}

module.exports = loginUser;
