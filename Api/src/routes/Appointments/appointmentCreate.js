const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

router.post("/", async (req, res) => {
  try {
    const { date, time, services, user } = req.body;

    const existingAppointment = await Appointment.findOne({ date, time, user });

    if (existingAppointment) {
      return res.status(400).json({
        message: "Este agendamento já existe para este usuário na mesma data e hora.",
      });
    }

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

module.exports = router;
