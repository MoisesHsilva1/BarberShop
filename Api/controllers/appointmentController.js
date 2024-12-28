const UserModel = require("../models/User.model");
const ServiceModel = require("../models/Service.model");
const AppointmentModel = require("../models/Appointment.model");

const createAppointment = async (userId, serviceIds, date) => {
  const user = await UserModel.findById(userId);
  if (!user) throw new Error("Usuário não encontrado");

  const services = await ServiceModel.find({ _id: { $in: serviceIds } });
  if (services.length !== serviceIds.length) throw new Error("Serviços não encontrados");

  const appointment = new AppointmentModel({ userId, services, date });
  await appointment.save();
  
  return appointment;
};

module.exports = { createAppointment };
