const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment.model");

router.post("/", async (req, res) => {
  try {
    const { date, time, services, user } = req.body;

    if (!date || !time || !services || !user) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    const existingAppointment = await Appointment.findOne({
      date,
      time,
      "user.userEmail": user.userEmail,
      "user.userName": user.userName,
      "user.phoneUser": user.phoneUser,
      services,
    });

    if (existingAppointment) {
      return res.status(400).json({
        message:
          "Este agendamento já existe para este usuário na mesma data e hora.",
      });
    }

    const existingUserAppointment = await Appointment.findOne({
      "user.userEmail": user.userEmail,
    });

    const userData = existingUserAppointment
      ? existingUserAppointment.user
      : user;

    const newAppointment = new Appointment({
      date,
      time,
      services,
      user: userData,
    });

    await newAppointment.save();

    return res.status(200).json({
      message: "Agendamento salvo com sucesso",
      data: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao salvar agendamento",
      error: error.message,
    });
  }
});

module.exports = router;
