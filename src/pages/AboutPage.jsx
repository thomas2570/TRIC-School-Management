import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Award, BookOpen, Heart } from 'lucide-react';

const AboutPage = () => {
  const teachers = [
    { name: 'Dr. Ramesh Sharma', role: 'Principal', subject: 'Mathematics', img: '/images/faculty/principal.png' },
    { name: 'Mrs. Sunita Verma', role: 'Vice Principal', subject: 'English Literature', img: '/images/faculty/vice_principal.png' },
    { name: 'Mr. Anil Kumar', role: 'Senior Faculty', subject: 'Physics', img: '/images/faculty/teacher1.png' },
    { name: 'Dr. Anjali Gupta', role: 'Department Head', subject: 'Chemistry', img: '/images/faculty/teacher2.png' }
  ];

  return (
    <div className="space-y-12 pb-24">
      <PageHeader 
        title="About Our School" 
        subtitle="Excellence in Education since 1995. Discover our history, mission, and the team behind our success at Thomas Ramesh inter college."
        imageUrl="/images/campus.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm"
        >
          <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To inspire and empower students to reach their full potential through a rigorous academic curriculum 
            and a supportive community environment that fosters innovation, critical thinking, and character.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-primary text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-blue-100 leading-relaxed text-lg">
            To be a global leader in education, recognized for excellence, innovation, and our commitment to 
            developing future leaders who make a positive impact on society.
          </p>
          <div className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Principal's Message */}
      <section className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100">
        <div className="grid lg:grid-cols-2">
          <div className="h-[400px] lg:h-full relative">
            <img src="/images/faculty/principal.png" alt="Principal" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Leadership Message</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Principal's Welcome</h2>
            <p className="text-gray-600 text-lg leading-relaxed italic mb-8 font-serif">
              "At Thomas Ramesh inter college, we believe every child is unique and has the potential to achieve greatness. 
              Our holistic approach to education ensures that our students are not just academically proficient, 
              but also emotionally resilient and socially responsible."
            </p>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Dr. Ramesh Sharma</h4>
              <p className="text-primary font-semibold mt-1">Principal & Academic Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Meet Our Faculty</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Our educators are passionate, experienced, and dedicated to student success.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {teachers.map((teacher, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm text-center group transition-all"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-6 overflow-hidden border-4 border-white shadow-md group-hover:border-primary transition-colors">
                <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
              <p className="text-gray-500 font-medium mb-6">{teacher.role}</p>
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-primary rounded-lg transition-colors"><Mail className="w-4 h-4" /></button>
                <button className="p-2 bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-primary rounded-lg transition-colors"><Phone className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
