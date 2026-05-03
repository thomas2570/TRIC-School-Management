import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { 
  Calendar, 
  BookOpen, 
  Bell, 
  CheckCircle,
  FileText,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const stats = [
    { icon: CheckCircle, label: 'Attendance', value: '92%', trend: 'Good', color: 'bg-green-500' },
    { icon: BookOpen, label: 'Current Grade', value: 'A-', trend: '+2%', color: 'bg-blue-500' },
    { icon: Bell, label: 'Pending Tasks', value: '4', trend: 'Due soon', color: 'bg-orange-500' },
    { icon: FileText, label: 'Library Books', value: '2', trend: 'Return soon', color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-primary text-secondary rounded-[1.5rem] flex items-center justify-center text-3xl font-black shadow-lg">AK</div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Anil Kumar</h2>
            <div className="flex flex-wrap gap-4 mt-1 text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">Roll: 123</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">Class: 12th-A</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary rounded-full">Active Student</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-center px-6 border-r border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Session</p>
            <p className="font-bold text-gray-900">2026-27</p>
          </div>
          <div className="text-center px-6">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">House</p>
            <p className="font-bold text-secondary">Vikas House</p>
          </div>
        </div>
      </div>

      <PageHeader 
        title="Academic Summary" 
        subtitle="Manage your learning journey and track your performance records."
        imageUrl="/images/classroom.jpg"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: CheckCircle, label: 'Attendance', value: '94.2%', trend: '+1.5%', color: 'bg-green-500' },
          { icon: BookOpen, label: 'Current Grade', value: 'A+', trend: 'Top 5%', color: 'bg-primary' },
          { icon: Bell, label: 'Ranking', value: '#12', trend: 'Of 120 Students', color: 'bg-orange-500' },
          { icon: FileText, label: 'Credits Earned', value: '18/20', trend: 'In Progress', color: 'bg-purple-500' },
        ].map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Academic Marks (UP Board Pattern)</h3>
            <span className="text-sm font-bold text-primary px-4 py-1 bg-blue-50 rounded-full">Annual Exam 2026</span>
          </div>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', marks: '98', total: '100', grade: 'A+' },
              { subject: 'Physics', marks: '94', total: '100', grade: 'A' },
              { subject: 'Chemistry', marks: '92', total: '100', grade: 'A' },
              { subject: 'English', marks: '99', total: '100', grade: 'A+' },
              { subject: 'Hindi', marks: '99', total: '100', grade: 'A+' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold">{item.subject.charAt(0)}</div>
                  <span className="font-bold text-gray-800">{item.subject}</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <span className="text-lg font-black text-primary">{item.marks}</span>
                    <span className="text-sm text-gray-400">/{item.total}</span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${
                    item.grade === 'A+' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8">Recent Notices</h3>
          <div className="space-y-6">
            {[
              { title: 'Project Submission Deadline', date: 'In 2 days', category: 'Academic' },
              { title: 'Science Fair Registration', date: 'In 5 days', category: 'Event' },
              { title: 'Sports Week Schedule', date: 'In 1 week', category: 'Sports' }
            ].map((notice, i) => (
              <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-2xl">
                <div className="p-2 bg-white rounded-lg text-primary shadow-sm"><Clock className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{notice.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-extrabold text-blue-500 uppercase tracking-widest">{notice.category}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500 font-medium">{notice.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-primary/20 transition-all">
            Open All Notices
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;
