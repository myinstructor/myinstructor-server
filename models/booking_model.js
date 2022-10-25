import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "Instructor",
    required: true,
  },
  time: {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
  },
  duration: {
    type: Number,
    required: true,
  },
  pickupDetails: {
    address: {
      type: String,
      required: true,
    },
    suburb: {
      type: String,
      required: true,
    },
    postcode: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Approved", "Canceled"],
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Booking = mongoose.model("booking", bookingSchema);
