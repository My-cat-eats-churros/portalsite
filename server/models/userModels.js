const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  birth: { type: String },
  gender: { type: String },
  email: { type: String },
  petGender: { type: String },
  petNumber: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
