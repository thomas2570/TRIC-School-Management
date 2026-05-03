const mongoose = require('mongoose');
require('dotenv').config();
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
      name: 'Anil Kumar', // Using your requested name
      class: '12th',
      section: 'A',
      attendance: 98.5
    });

    await testStudent.save();
    console.log('🌟 Test Student Created!');
    console.log('Roll Number: 123');
    console.log('Password: password123');
    
    process.exit();
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    process.exit(1);
  }
};

seedData();
