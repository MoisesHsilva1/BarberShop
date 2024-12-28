const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const appointmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
    ],
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
