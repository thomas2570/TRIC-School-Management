const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subject: { type: String, required: true },
  assignedClasses: [{ type: String }], // e.g., ["12th-A", "11th-B"]
  timeTable: [{
    day: String,
    slots: [{ time: String, class: String, subject: String }]
  }],
  attendance: [{ date: Date, status: String }]
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
