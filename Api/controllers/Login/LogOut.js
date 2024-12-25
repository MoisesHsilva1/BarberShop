async function logOutUser(res) {
  res.clearCookie("Token");
  res.status(200).json({ message: "Logout realizado com sucesso" });
}

module.exports = logOutUser;
