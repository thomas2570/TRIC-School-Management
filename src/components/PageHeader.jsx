import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, imageUrl, children }) => {
  return (
    <div className="relative w-full h-64 rounded-3xl overflow-hidden mb-8 shadow-xl">
      <img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 purple-overlay flex flex-col justify-center px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-1.5 bg-secondary mb-6"></div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">{title}</h1>
          <p className="text-blue-50 mt-4 max-w-2xl text-base sm:text-lg leading-relaxed font-sans opacity-90 italic">
            {subtitle}
          </p>
        </motion.div>
        {children && (
          <div className="mt-6 flex gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
