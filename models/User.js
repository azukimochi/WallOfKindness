const mongoose = require("mongoose"),
  // bcrypt = require("bcrypt-nodejs"),
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

// adds a method to a user document object to create a hashed password
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };

// adds a method to a user document object to check if provided password is correct
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
// userSchema.pre("save", function(next) {
//   if (this.isModified("password")) {
//     this.password = this.generateHash(this.password);
//   }
//   next();
// });

const User = mongoose.model("User", userSchema);
module.exports = User;
