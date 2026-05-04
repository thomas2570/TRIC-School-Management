const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();

// Fix for querySrv ECONNREFUSED issues on some networks
dns.setServers(['8.8.8.8', '8.8.4.4']);
const Student = require('./models/Student');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB for seeding...');

    // Clear existing students to avoid duplicates for the test
    await Student.deleteMany({ rollNumber: '123' });

    const testStudent = new Student({
      rollNumber: '123',
      password: 'password123',
      name: 'Anil Kumar',
      class: '12th',
      section: 'A',
      attendance: 98.5
    });

    const Teacher = require('./models/Teacher');
    await Teacher.deleteMany({ email: 'teacher@test.com' });
    const testTeacher = new Teacher({
      name: 'Test Teacher',
      email: 'teacher@test.com',
      password: 'password123',
      subject: 'Mathematics',
      assignedClasses: ['10th-A', '12th-A']
    });

    await testStudent.save();
    await testTeacher.save();
    console.log('🌟 Test Data Created!');
    console.log('Student Roll: 123 | Pass: password123');
    console.log('Teacher Email: teacher@test.com | Pass: password123');
    
    process.exit();
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    process.exit(1);
  }
};

seedData();
