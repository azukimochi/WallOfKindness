const mongoose = require("mongoose"),

  userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isDonor: { type: Boolean, default: false },
    wallName: { type: String, default: "", required: false },
    gifts: { type: Array, required: false },
    city: { type: String, default: "", required: false },
    address: { type: String, default: "", required: false },
    longitude: { type: Number, required: false },
    latitude: { type: Number, required: false }
  });

const User = mongoose.model("User", userSchema);
module.exports = User;
