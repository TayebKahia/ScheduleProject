const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;
