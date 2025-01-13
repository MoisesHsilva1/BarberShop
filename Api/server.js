const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/connect");
const appointmentCreateRoutes = require("./src/routes/Appointments/appointmentCreate");
const appointmentReadRoutes = require("./src/routes/Appointments/appointmentRead");
const appointmentGetByDate = require("./src/routes/Appointments/appointmentGetByDate");
const appointmentGetByHour = require("./src/routes/Appointments/appointmentGetByHour");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

app.use("/createAppointment", appointmentCreateRoutes);
app.use("/readAppointment", appointmentReadRoutes);
app.use("/getByDateAppointment", appointmentGetByDate);
app.use("/getByHourAppointment", appointmentGetByHour);

module.exports = app;
