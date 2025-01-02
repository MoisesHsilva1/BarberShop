const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error.message);
    return res.status(500).json({
      message: "Erro ao buscar agendamentos",
      error: error.message,
    });
  }
});

module.exports = router;
