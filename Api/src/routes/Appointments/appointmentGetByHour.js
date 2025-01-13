const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

const AVAILABLE_TIMES = [
  {id: "hour1", time:"9h às 9h50" },
  {id: "hour2", time:"10h às 10h50"},
  {id: "hour3", time:"11h às 11h50"},
  {id: "hour4", time:"14h às 14h50"},
  {id: "hour5", time:"15h às 15h50"},
  {id: "hour6", time:"16h às 16h50"},
  {id: "hour7", time:"17h às 17h50"},
];

router.get("/", async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "A data é obrigatória." });
    }

    const appointments = await Appointment.find({ date });
    const occupiedTimes = appointments.map((appointment) => appointment.time);

    const availableTimes = AVAILABLE_TIMES.filter(
      (time) => !occupiedTimes.includes(time)
    );

    return res.status(200).json({
      occupiedTimes,
      availableTimes,
    });
  } catch (error) {
    console.error("Erro ao buscar horários:", error);
    return res.status(500).json({ message: "Erro ao buscar horários.", error });
  }
});

module.exports = router;
