const AppointmentModel = require("../models/Appointment.model");
const ServiceModel = require("../models/Appointment.model");

const createAppointment = async (userId, serviceIds, date) => {
  const services = await ServiceModel.find({ _id: { $in: serviceIds } });
  if (services.length !== serviceIds.length) {
    throw new Error("Um ou mais serviços não foram encontrados.");
  }

  const existingAppointment = await AppointmentModel.findOne({
    userId,
    serviceIds: { $all: serviceIds },
    date,
  });

  if (existingAppointment) {
    throw new Error("Este agendamento já existe.");
  }

  const appointment = new AppointmentModel({
    userId,
    serviceIds,
    date,
  });

  await appointment.save();
  return appointment;
};

module.exports = { createAppointment };
