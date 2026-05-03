const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, default: 'General' },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  imageUrl: { type: String, default: '/images/events.jpg' },
  author: { type: String, default: 'Administration' },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);
