import express from "express";

import {
  createAppointment,
  getAppointments,
  updateAppointments,
  deleteAppointments,
  getAllAppointments,
  getAppointmentsById,
} from "../controllers/AppointmentController.js";

const router = express.Router();

// create
router.post("/appointments", createAppointment);
// READ
router.get("/appointments/:cedula", getAppointments);
// READ
router.get("/appointments", getAllAppointments);
router.get("/appointment/:id", getAppointmentsById);
//update
router.put("/appointments/:id", updateAppointments);
//delete
router.delete("/appointments/:id", deleteAppointments);

export default router;
