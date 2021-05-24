const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  zipCode: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
