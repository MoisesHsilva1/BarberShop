const AppointmentModel = require("../models/Appointment.model");

const getAppointmentByDate = async (req, res) => {
  try {
    const { date, userId } = req.query;

    if (!date) {
      return res.status(400).json({ message: "A data é obrigatória." });
    }

    const filter = { date };

    if (userId) {
      filter["use.useEmail"] = userId;
    }

    const appointments = await AppointmentModel.find(filter);

    if (appointments.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhum agendamento encontrado para essa data." });
    }
    return res.status(200).json(appointments);
  } catch (error) {
    console.error("Erro ao buscar agendamentos por data:", error.message);
    return res.status(500).json({
      message: "Erro ao buscar agendamentos por data",
      error: error.message,
    });
  }
};

module.exports = { getAppointmentByDate };
