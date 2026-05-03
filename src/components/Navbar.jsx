import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User, Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const role = localStorage.getItem('role') || 'student';

  return (
    <nav className="sticky top-0 z-50 glass-card bg-white/70 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-1"></div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              {role === 'admin' ? 'College Admin' : (user.name || 'User')}
            </p>
            <p className="text-xs text-gray-500 capitalize">{role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-xs border-2 border-white shadow-sm overflow-hidden">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
