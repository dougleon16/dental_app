import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },

  apellido: {
    type: String,
    required: true,
    trim: true,
  },

  edad: {
    type: Number,
    required: true,
  },

  telefono: {
    type: String,
    required: true,
  },

  tipo_tratamiento: {
    type: Object,
  },

  doctor: {
    type: Object,
    required: true,
  },

  cedula: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  fecha: {
    type: Date,
    default: Date.now,
  },

  metodo_pago: {
    type: Object,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
