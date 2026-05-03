import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone, Send, Tag, FileText } from 'lucide-react';

const NoticeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
    category: 'General',
    priority: 'Medium',
    imageUrl: '',
    author: 'Administration'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/add-notice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          imageUrl: formData.imageUrl || '/images/events.jpg'
        })
      });

      if (response.ok) {
        alert('Notice posted successfully!');
        onClose();
      } else {
        alert('Error posting notice');
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
          <div className="bg-orange-500 p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center"><Megaphone className="w-6 h-6" /></div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Post New Notice</h2>
                <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mt-1">Broadcast to whole school</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X className="w-6 h-6" /></button>
          </div>

          <form className="p-10 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Notice Title</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input required type="text" placeholder="Annual Sports Meet 2026" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Priority Level</label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold appearance-none">
                    <option value="High">High Priority (Red)</option>
                    <option value="Medium">Medium Priority (Orange)</option>
                    <option value="Low">Low Priority (Blue)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Category</label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold appearance-none">
                    <option value="General">General Notice</option>
                    <option value="Academic">Academic Update</option>
                    <option value="Event">School Event</option>
                    <option value="Holiday">Holiday Announcement</option>
                    <option value="Sports">Sports News</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Author / Dept</label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Academic Dept" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Image URL (Optional)</label>
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="https://example.com/image.jpg" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Description / Details</label>
              <textarea required rows="4" placeholder="Type the full notice content here..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500/10 outline-none font-bold resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-orange-500 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-orange-600 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 transition-all mt-4">
              Publish Notice <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default NoticeModal;
