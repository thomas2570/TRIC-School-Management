import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { 
  Users, 
  ClipboardCheck, 
  BookOpen, 
  MessageSquare,
  Plus,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const TeacherDashboard = () => {
  const stats = [
    { icon: Users, label: 'My Students', value: '124', trend: 'Total', color: 'bg-blue-500' },
    { icon: ClipboardCheck, label: 'Attendance', value: '98%', trend: 'Today', color: 'bg-green-500' },
    { icon: BookOpen, label: 'Assigned Classes', value: '6', trend: 'Per week', color: 'bg-purple-500' },
    { icon: MessageSquare, label: 'Unread Chats', value: '12', trend: 'New', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Faculty Portal" 
        subtitle="Good morning, Prof. Sarah! You have 3 classes today and 2 assignments to grade."
        imageUrl="/images/teacher.jpg"
      >
        <button className="px-5 py-2.5 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2">
          <Plus className="w-4 h-4" /> Mark Attendance
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Current Classes</h3>
            <button className="text-sm font-bold text-primary hover:underline">View Full Schedule</button>
          </div>
          <div className="p-2">
            {[
              { subject: 'Advanced Calculus', grade: 'Grade 12-A', time: '09:00 - 10:00 AM', attendance: '95%', color: 'bg-blue-500' },
              { subject: 'Linear Algebra', grade: 'Grade 11-B', time: '10:30 - 11:30 AM', attendance: '100%', color: 'bg-green-500' },
              { subject: 'Probability', grade: 'Grade 10-C', time: '01:00 - 02:00 PM', attendance: '88%', color: 'bg-orange-500' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all group">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                  {item.subject.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{item.subject}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-gray-500 font-medium">{item.grade}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500 font-medium">{item.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Attendance</p>
                  <p className="text-lg font-bold text-gray-900">{item.attendance}</p>
                </div>
                <button className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Upload Marks', icon: Plus, color: 'bg-blue-50' },
              { label: 'Send Notice', icon: MessageSquare, color: 'bg-green-50' },
              { label: 'Class Material', icon: BookOpen, color: 'bg-purple-50' },
              { label: 'Reports', icon: ClipboardCheck, color: 'bg-orange-50' }
            ].map((action, i) => (
              <button key={i} className={`${action.color} p-6 rounded-2xl flex flex-col items-center gap-3 hover:scale-105 transition-transform border border-transparent hover:border-gray-100`}>
                <action.icon className="w-6 h-6 text-gray-700" />
                <span className="text-xs font-bold text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-50">
            <h4 className="font-bold text-gray-900 mb-4">Leave Requests</h4>
            <div className="p-4 bg-orange-50 rounded-2xl flex items-center justify-between">
              <div className="text-sm font-bold text-orange-800">Pending Approval</div>
              <div className="px-3 py-1 bg-white rounded-full text-xs font-extrabold text-orange-600 shadow-sm">2</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
