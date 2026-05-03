const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  class: String,
  section: String,
  attendance: { type: Number, default: 0 },
  lastLogin: Date
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
