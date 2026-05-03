const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dns = require('dns');
require('dotenv').config();

// Fix for querySrv ECONNREFUSED issues on some networks
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

const Student = require('./models/Student');
const Admission = require('./models/Admission');
const Teacher = require('./models/Teacher');
const Notice = require('./models/Notice');

// --- API Routes ---

// Public: Fetch Notices
app.get('/api/notices', async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });
  res.json(notices);
});

// Admin: Add Notice
app.post('/api/admin/add-notice', async (req, res) => {
  try {
    const newNotice = new Notice(req.body);
    await newNotice.save();
    res.status(201).json({ message: 'Notice posted successfully!', notice: newNotice });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

// Admin: Fetch All Data
app.get('/api/admin/teachers', async (req, res) => {
  const teachers = await Teacher.find({});
  res.json(teachers);
});

app.get('/api/admin/students', async (req, res) => {
  const students = await Student.find({});
  res.json(students);
});

// 2. Admin: Add/Remove Teachers
app.post('/api/admin/add-teacher', async (req, res) => {
  try {
    const { name, email, password, subject, assignedClasses } = req.body;
    const newTeacher = new Teacher({ name, email, password, subject, assignedClasses });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher added!', teacher: newTeacher });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.delete('/api/admin/teacher/:id', async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: 'Teacher removed' });
});

// 3. Admin: Add/Remove Students
app.post('/api/admin/add-student', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student added!', student: newStudent });
  } catch (error) { res.status(400).json({ error: error.message }); }
});

app.delete('/api/admin/student/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student removed' });
});

// 4. Teacher Login
app.post('/api/teacher/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email, password });
    if (teacher) {
      res.json({ message: 'Teacher Login successful', teacher });
    } else {
      res.status(401).json({ message: 'Invalid Email or Password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error during teacher login' });
  }
});

// 3. Admission Inquiry Submission
app.post('/api/admissions', async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json({ message: 'Application submitted successfully!', data: newAdmission });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting application', error: error.message });
  }
});

// 2. Student Login
app.post('/api/login', async (req, res) => {
  const { rollNumber, password } = req.body;
  try {
    const student = await Student.findOne({ rollNumber, password });
    if (student) {
      res.json({ message: 'Login successful', student });
    } else {
      res.status(401).json({ message: 'Invalid Roll Number or Password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// 3. Get All Admissions (For Admin Dashboard)
app.get('/api/admissions', async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admissions' });
  }
});

// Basic Health Check
app.get('/', (req, res) => res.send('TRIC Management API is Running...'));

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
}

module.exports = app;
