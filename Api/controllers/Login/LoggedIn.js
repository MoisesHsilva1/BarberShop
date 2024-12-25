const jsonwebtoken = require("jsonwebtoken");

async function loggedInUser(req, res, next) {
  Auth = req.cookie.Token || null;

  if (typeof Auth === "undefined" || Auth == "" || Auth == null) {
    return res.send({ error: { login: "Não Autorizado." } });
  } else {
    try {
      Token = await jsonwebtoken.verify(Auth, "PasswordToken");
      next();
    } catch (err) {
      return res.send({ error: { login: "Não Autorizado" } });
    }
  }
}
module.exports = loggedInUser;
