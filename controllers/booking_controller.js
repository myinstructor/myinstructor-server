import catchAsyncError from "../middlewares/catchAsyncError.js";
import Errorhandler from "../middlewares/handle_error.js";
import { Booking } from "../models/booking_model.js";
import { userModel } from "../models/user_model.js";

export const makeBooking = catchAsyncError(async (req, res, next) => {
  if (!req.body.duration)
    return next(new Errorhandler(404, "Invalid Booking Information Provided"));

  const booking = await Booking.create({ ...req.body, user: req.user });
  const user = await userModel.findById(req.user._id);

  if (user.credit < req.body.duration)
    return next(
      new Errorhandler(
        403,
        "You Don't Have Enough Credit's To Make This Booking"
      )
    );
  user.credit = user.credit - req.body.duration;
  await user.save();

  res.status(200).json({
    success: true,
    booking,
  });
});

// find booking
export const findBooking = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new Errorhandler(404, "No Booking Id Provided"));

  const booking = await Booking.findById(id).populate(
    "user instructor",
    "email avater firstName lastName"
  );

  if (!booking)
    return next(new Errorhandler(404, "No Booking Found With this id"));

  res.status(200).json({
    success: true,
    booking,
  });
});

// change booking status
export const changeBookingStatus = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!id || !status) return next(Errorhandler(404, "Invalid Request"));
  zzz;
  const booking = await Booking.findByIdAndUpdate(id, { status });
  console.log(booking);

  res.status(200).json({
    success: true,
    booking,
  });
});

// get booking by instructor
export const getInstructorBookings = catchAsyncError(async (req, res, next) => {
  const { instructor } = req.query;
  if (!instructor)
    return next(new Errorhandler(404, "Can't Find Instructor Id"));

  const bookings = await Booking.find({ instructor });
  console.log(bookings.length);

  res.status(200).json({
    success: true,
    bookings,
  });
});
