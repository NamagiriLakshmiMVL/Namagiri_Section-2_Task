const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    id: { type: Number, required: true },
    data: {
      temperature: { type: String, required: true },
      humidity: { type: String, required: true },
      pressure: { type: String, required: true },
      altitude: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const deviceModel = mongoose.model("deviceTypes", deviceSchema);
module.exports = deviceModel;
