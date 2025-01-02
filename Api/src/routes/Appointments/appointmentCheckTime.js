const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

router.get("/", async (req, res) => {
  try {
    const { date, time } = req.query;

    if (!date || !time) {
      return res.status(400).json({
        message: "Os parâmetros 'date' e 'time' são obrigatórios.",
      });
    }

    const existingAppointment = await Appointment.findOne({ date, time });

    if (existingAppointment) {
      return res
        .status(200)
        .json({ isAvailable: false, message: "Horário já reservado." });
    }

    res.status(200).json({ isAvailable: true, message: "Horário disponível." });
  } catch (error) {
    console.error("Erro ao verificar disponibilidade:", error);
    res.json(500).json({ messsage: "Erro interno do servidor" });
  }
});

module.exports = router;
