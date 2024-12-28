const express = require("express");
const router = express.Router();
const { createAppointment } = require("../controllers/appointmentController");
const AppointmentModel = require("../models/Appointment.model");

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

router.get("/appointments/:userId", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find({ userId: req.params.userId })
      .populate("services")
      .exec();

    res.json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
