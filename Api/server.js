const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/connect");
const appointmentRoutes = require("./routes/appointmentRoutes");
const createUserRoutes = require("./routes/createUserRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

app.use("/barberShop", appointmentRoutes);
app.use("/barberShop", createUserRoutes);

app.listen(3030, () => {
  console.log("Server On");
});
