import mongoose from "mongoose";

const suburbschema = mongoose.Schema({
  ssc_code: {
    type: Number,
  },
  suburb: {
    type: String,
  },
  urban_area: {
    type: String,
  },
  postcode: {},
  state: {
    type: String,
  },
  state_name: {
    type: String,
  },
  type: {
    type: String,
  },
  local_goverment_area: {
    type: String,
  },
  statistic_area: {
    type: String,
  },
  elevation: {
    type: Number,
  },
  population: {
    type: Number,
  },
  median_income: {
    type: Number,
  },
  sqkm: {
    type: Number,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  timezone: {
    type: String,
  },
});

export const Suburbs = mongoose.model("suburb", suburbschema);
