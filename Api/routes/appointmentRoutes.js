const express = require("express");
const router = express.Router();
const { createAppointment } = require("../controllers/appointmentController");

router.post("/appointments", async (req, res) => {
  const { userId, serviceIds, date } = req.body;

  try {
    const appointment = await createAppointment(userId, serviceIds, new Date(date));
    res.status(201).json({
      message: "Agendamento criado com sucesso!",
      appointment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
