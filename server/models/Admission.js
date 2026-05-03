const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  appliedClass: { type: String, required: true },
  previousSchool: String,
  status: { type: String, enum: ['Pending', 'Reviewing', 'Approved', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Admission', admissionSchema);
