const mongoose = require("mongoose");
const { Schema } = mongoose;
const PCSchema = new Schema(
  {
    name: {
      type: String,
    },
    CPU: {
      type: String,
    },
    RAM: {
      type: String,
    },
    Stockage: {
      type: String,
    },
    GPU: {
      type: String,
    },
    img: {
      type: String,
    },
    Description: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("PC", PCSchema);
