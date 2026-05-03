import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';

const AdmissionForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    studentName: '',
    phone: '',
    email: '',
    appliedClass: '',
    parentName: '', // Adding this to match schema
    address: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          parentName: 'Guardian' // Default for now
        })
      });
      
      if (response.ok) {
        alert('Application submitted successfully to Database!');
        onClose();
      } else {
        alert('Error submitting application. Make sure the server is running.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error: Could not reach the server.');
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
          className="absolute inset-0 bg-primary/40 backdrop-blur-md"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary p-8 text-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">TR</div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Admission Inquiry 2026-27</h2>
            </div>
            <p className="text-blue-100 font-sans text-sm opacity-80">Please fill out the form below and our admissions team will contact you shortly.</p>
          </div>

          {/* Form */}
          <form className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Student Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  required 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  required 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  required 
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Admission for Class</label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  required 
                  value={formData.appliedClass}
                  onChange={(e) => setFormData({...formData, appliedClass: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans appearance-none"
                >
                  <option value="">Select Class</option>
                  <option value="1">Class 1st</option>
                  <option value="9">Class 9th</option>
                  <option value="10">Class 10th</option>
                  <option value="11">Class 11th</option>
                  <option value="12">Class 12th</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Permanent Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea 
                  required 
                  rows="3" 
                  placeholder="Enter full address..." 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="md:col-span-2 w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl hover:bg-opacity-90 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all mt-4"
            >
              Submit Application <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AdmissionForm;
