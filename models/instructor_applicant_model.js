import mongoose from "mongoose";

const instructorapplicantSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: "Email address is required",
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  postCode: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

export const InstructorApplicantModel = mongoose.model(
  "instructor_applicant",
  instructorapplicantSchema
);
