import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, trend, color }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
      </div>
    </motion.div>
  );
};

export default StatCard;
