import express from "express";
import dotenv from "dotenv";

import connectDb from "./config/db.js";
import appointmentRouter from "./routes/appointment.js";

const app = express();
const port = process.env.PORT || 4201;

// DataBase Connection
connectDb();
// Environments Variables
dotenv.config({ path: "./.env" });
// json data
app.use(express.json());

// CORS para que no choque los puertos de frontend y de backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});
// Routes
app.use("/api/v1", appointmentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
