import express from "express";

import { connectToDatabase } from "./database/database.js";
import { errorMiddleware } from "./middlewares/error_middleware.js";

import userRoutes from "./routes/user_routes.js";
import instructorApplicantRoute from "./routes/instructor_applicant_route.js";
import instructorRoute from "./routes/instructor_routes.js";
import paymentRoute from "./routes/payment_route.js";
import bookingRoute from "./routes/booking_route.js";
import adminRoute from "./routes/admin_route.js";

import path, { dirname } from "path";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { Storage } from "@google-cloud/storage";

// initializing app
const app = express();
// applying cors middleware

app.use(
  cors({
    origin: ["http://localhost:3000", "https://myinstructor.netlify.app"],
  })
);
// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// initializing necessery variable and port
const PORT = process.env.PORT || 5000;

// connect to database
connectToDatabase();

// App Routes
app.use("/api", userRoutes);
app.use("/api", instructorApplicantRoute);
app.use("/api", instructorRoute);
app.use("/api", paymentRoute);
app.use("/api", bookingRoute);
app.use("/api/admin", adminRoute);

// image request
app.use("/uploads", express.static("./tmp"), (req, res, next) => {
  next();
});

// home request
app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "My Instructor Server Is Up And Running...",
  });
});

// google cloud storage
export const gcloudStorage = new Storage({
  keyFilename: "./first-energy-364305-29145b74aa26.json",
  projectId: "first-energy-364305",
});

// listening to server
app.listen(PORT, () =>
  console.log("Myinstructor server listening to port " + PORT + "...")
);

app.use(errorMiddleware);
