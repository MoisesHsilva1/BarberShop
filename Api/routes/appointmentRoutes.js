const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment.model");

router.post("/", async (req, res) => {
  try {
    const { date, time, services, user } = req.body;

    const newAppointment = new Appointment({
      date,
      time,
      services,
      user,
    });

    await newAppointment.save();

    return res.status(200).json({
      message: "Agendamento salvo com sucesso",
      data: newAppointment,
    });
  } catch (error) {
    console.error("Erro ao salvar agendamento:", error.message);
    return res.status(500).json({
      message: "Erro ao salvar agendamento",
      error: error.message,
    });
  }
});

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
