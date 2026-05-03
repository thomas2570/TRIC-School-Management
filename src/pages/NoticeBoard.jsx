import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, Tag, User, ArrowRight, ExternalLink } from 'lucide-react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Annual Science Fair 2026',
      description: 'Students from 6th to 12th standard are invited to showcase their innovative projects. Register your team by next Friday.',
      date: 'May 12, 2026',
      author: 'Academic Dept',
      category: 'Events',
      image: '/images/classroom.jpg',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Summer Vacation Announcement',
      description: 'The school will remain closed for summer break starting from June 1st. Please check the portal for holiday assignments.',
      date: 'May 10, 2026',
      author: 'Administration',
      category: 'Holiday',
      image: '/images/campus.jpg',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Inter-School Cricket Tournament',
      description: 'Our senior team will be participating in the regional tournament. All students are encouraged to attend and cheer for our team.',
      date: 'May 15, 2026',
      author: 'Sports Dept',
      category: 'Sports',
      image: '/images/playground.jpg',
      priority: 'Low'
    }
  ];

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Notice Board" 
        subtitle="Stay updated with the latest happenings, announcements, and events at SmartSchool."
        imageUrl="/images/events.jpg"
      />

      <div className="flex items-center gap-4 flex-wrap mb-8">
        {['All', 'Events', 'Academic', 'Sports', 'Important'].map((filter, i) => (
          <button 
            key={i}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notices.map((notice, i) => (
          <motion.div 
            key={notice.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group transition-all"
          >
            <div className="h-48 relative overflow-hidden">
              <img src={notice.image} alt={notice.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white ${
                  notice.priority === 'High' ? 'bg-red-500' : notice.priority === 'Medium' ? 'bg-orange-500' : 'bg-blue-500'
                }`}>
                  {notice.priority} Priority
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-400">
                <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {notice.date}</div>
                <div className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {notice.category}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{notice.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {notice.description}
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><User className="w-4 h-4 text-gray-400" /></div>
                  <span className="text-xs font-bold text-gray-600">{notice.author}</span>
                </div>
                <button className="text-primary p-2 hover:bg-blue-50 rounded-full transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
