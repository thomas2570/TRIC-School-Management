import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  UserCircle, 
  LogOut, 
  X,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const role = localStorage.getItem('role') || 'student';

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: ClipboardList, label: 'Notice Board', path: '/notices' },
    { icon: UserCircle, label: 'About School', path: '/about' },
    { icon: LogOut, label: 'Logout', path: '/login' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out
        w-64 bg-white border-r border-gray-200 transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex-shrink-0 aspect-square flex items-center justify-center text-secondary font-bold text-xl border-2 border-gray-100 group-hover:scale-110 transition-transform">TR</div>
            <div className="flex flex-col">
              <span className="font-black text-[10px] text-primary uppercase tracking-tighter leading-none">Thomas Ramesh</span>
              <span className="font-black text-[10px] text-primary uppercase tracking-tighter leading-none">inter college</span>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-100 rounded">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all
                ${location.pathname === item.path 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}
              `}
              onClick={() => window.innerWidth < 1024 && onClose()}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-50 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-xs">
              {role === 'admin' ? 'AD' : (user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : '??')}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 leading-none uppercase">
                {role === 'admin' ? 'College Admin' : (user.name || 'Unknown User')}
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                {role === 'admin' && 'Full System Access'}
                {role === 'teacher' && `Dept: ${user.subject || 'Faculty'}`}
                {role === 'student' && `Class ${user.class || 'N/A'}-${user.section || ''} | Roll: ${user.rollNumber || '000'}`}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
