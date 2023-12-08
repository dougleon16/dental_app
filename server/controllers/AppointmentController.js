import Appointment from "../models/appointment.js";

const createAppointment = async (req, res) => {
  const clientData = req.body;

  try {
    const newAppointment = new Appointment(clientData);
    await newAppointment.save();
    res.status(201).json({
      message: "Cita agendada correctamente",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error al crear una cita dental",
      error: error.message,
    });
  }
};

const getAppointments = async (req, res) => {
  const { cedula } = req.params;
  try {
    const appointments = await Appointment.find({ cedula: cedula });
    res.status(200).json({
      message: "Citas dentales obtenidas correctamente",
      data: appointments,
      _id: appointments._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las citas dentales",
      error: error.message,
    });
  }
};

const getAppointmentsById = async (req, res) => {
  const { id } = req.params;
  try {
    const appointments = await Appointment.find({ _id: id });
    res.status(200).json({
      message: "Citas dentales obtenidas correctamente",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las citas dentales",
      error: error.message,
    });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      message: "Citas dentales obtenidas correctamente",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las citas dentales",
      error: error.message,
    });
  }
};

const updateAppointments = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    await Appointment.findByIdAndUpdate(id, data);
    res.status(200).json({
      message: "Cita actualizada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la cita dental",
      error: error.message,
    });
  }
};

const deleteAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({
      message: "Cita eliminada correctamente",
      _id: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la cita dental",
      error: error.message,
    });
  }
};

export {
  createAppointment,
  getAppointments,
  updateAppointments,
  deleteAppointments,
  getAllAppointments,
  getAppointmentsById,
};
