const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftsSchema = new Schema({
  gifts: [{ type: String,default:'',required: false }],
  
});

const Gifts = mongoose.model("Gifts", giftsSchema);

module.exports = Gifts;
