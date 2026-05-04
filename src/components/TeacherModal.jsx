import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Lock, BookOpen, GraduationCap, Send } from 'lucide-react';

const TeacherModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    subject: '',
    assignedClasses: ''
  });

  const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/admin/add-teacher`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          assignedClasses: formData.assignedClasses.split(',').map(c => c.trim())
        })
      });

      if (response.ok) {
        alert('Teacher added successfully!');
        onClose();
      } else {
        alert('Error adding teacher');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server connection failed');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="bg-primary p-8 text-white flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Add New Teacher</h2>
              <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mt-1">Faculty Registration Portal</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X className="w-6 h-6" /></button>
          </div>

          <form className="p-10 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required type="text" placeholder="Dr. Anil Kumar" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/10 outline-none font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required type="email" placeholder="anil@tric.edu" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/10 outline-none font-bold" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Assign Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required type="password" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/10 outline-none font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Specialization Subject</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required type="text" placeholder="Physics" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/10 outline-none font-bold" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Assigned Classes (Comma separated)</label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input required type="text" placeholder="12th-A, 11th-B, 10th-C" value={formData.assignedClasses} onChange={(e) => setFormData({...formData, assignedClasses: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/10 outline-none font-bold" />
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl hover:bg-blue-700 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all mt-4">
              Add Teacher to System <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TeacherModal;
