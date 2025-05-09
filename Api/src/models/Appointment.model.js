const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  services: { type: [String], required: true },
  user: {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    phoneUser: { type: String, required: true },
  },
});

appointmentSchema.index(
  {
    date: 1,
    time: 1,
    "user.userEmail": 1,
  },
  { unique: true }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
