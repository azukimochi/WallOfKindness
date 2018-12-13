const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wallSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  userName: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true, index: { unique: true } },
  isDonor: { type: Boolean, default: false },
  wallName: { type: String, required: false },
  category: [{ type: String, required: false }],
  gifts: [{ type: String }],
  city: { type: String, required: false },
  address: { type: String, required: false }
});

const Walls = mongoose.model("Walls", wallSchema);

module.exports = Walls;
