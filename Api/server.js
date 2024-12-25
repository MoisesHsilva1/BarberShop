const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/connect");

const Login = require("./controllers/Login/Login");
const LoggedIn = require("./controllers/Login/LoggedIn");
const LogOut = require("./controllers/Login/LogOut");
const Register = require("./controllers/Register/Register");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();

connectToDatabase();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/login", LogOut, Login, (req, res) => {
  res.json({ message: "Essa é pagina principal" });
});

app.get("/register", Register, (req, res) => {
  res.json({ message: "Registro usuario" });
});

app.get("/registrationServices", LoggedIn, (req, res) => {
  res.json({ message: "Somente users logados pode ver isso", user: req.user });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(3030, () => {
  console.log("Server On");
});
