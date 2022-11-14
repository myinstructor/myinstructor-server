import Errorhandler from "./handle_error.js";

export const allowedorigin = [
  "https://myinstructor.netlify.app",
  "http://localhost:3000",
];

export const checkOrigin = (req, res, next) => {
  const contains = allowedorigin.includes(req.headers.origin);
  if (!contains) return next(new Errorhandler(403, "Request Blocked By CORS"));
  next();
};
