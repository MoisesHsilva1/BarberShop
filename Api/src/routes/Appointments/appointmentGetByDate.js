const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

router.get("/", async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Data é obrigatória" });
    }

    const appointments = await Appointment.find({ date });


    if (appointments.length === 0) {
      return res.status(404).json({ message: "Nenhum agendamento encontrado para a data fornecida" });
    }

    return res.status(200).json(appointments);
  } catch (error) {
    console.error("Erro ao buscar agendamentos", error);
    return res.status(500).json({ message: "Erro ao buscar agendamentos" });
  }
});

module.exports = router;
