import Stripe from "stripe";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import Errorhandler from "../middlewares/handle_error.js";
const stripe = Stripe(process.env.STRIPE_KEY);

export const createPaymentIndent = catchAsyncError(async (req, res, next) => {
  const { amount } = req.body;

  if (!amount) return next(new Errorhandler(401, "Amount Not Specified"));

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.status(200).json({
    success: true,
    clientSecret: paymentIntent.client_secret,
  });
});
