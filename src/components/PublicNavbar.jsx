import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MoreVertical } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

const PublicNavbar = () => {
  const { openAdmission } = useAdmission();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex-shrink-0 aspect-square flex items-center justify-center text-secondary font-bold text-2xl border-4 border-gray-100 shadow-sm">TR</div>
            <div>
              <h1 className="text-xl font-extrabold text-primary leading-tight uppercase tracking-tighter">Thomas Ramesh inter college</h1>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            <div className="flex items-center gap-8 font-serif font-bold text-gray-800 uppercase text-[12px] tracking-[0.2em]">
              <Link to="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">Home</Link>
              <button 
                onClick={openAdmission} 
                className="hover:text-primary transition-all relative group py-1 whitespace-nowrap cursor-pointer uppercase"
              >
                Admissions
              </button>
              <Link to="/#academics" onClick={(e) => scrollToSection(e, 'academics')} className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">Academics</Link>
              <Link to="/#school-life" onClick={(e) => scrollToSection(e, 'school-life')} className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">School Life</Link>
              <Link to="/#faculty" onClick={(e) => scrollToSection(e, 'faculty')} className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">Facilities</Link>
              <Link to="/about" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">About Us</Link>
              <Link to="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">Contact</Link>
            </div>
            <Link 
              to="/login"
              className="bg-primary text-white px-8 py-3.5 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/10 text-xs font-bold tracking-widest uppercase rounded-sm whitespace-nowrap"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6"
          >
            <div className="flex flex-col gap-6 font-serif font-bold text-gray-800 uppercase text-xs tracking-widest">
              <Link to="/#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-primary transition-all py-2 border-b border-gray-50">Home</Link>
              <button 
                onClick={() => {
                  openAdmission();
                  setIsMobileMenuOpen(false);
                }} 
                className="text-left hover:text-primary transition-all py-2 border-b border-gray-50 uppercase font-bold"
              >
                Admissions
              </button>
              <Link to="/#academics" onClick={(e) => scrollToSection(e, 'academics')} className="hover:text-primary transition-all py-2 border-b border-gray-50">Academics</Link>
              <Link to="/#school-life" onClick={(e) => scrollToSection(e, 'school-life')} className="hover:text-primary transition-all py-2 border-b border-gray-50">School Life</Link>
              <Link to="/#faculty" onClick={(e) => scrollToSection(e, 'faculty')} className="hover:text-primary transition-all py-2 border-b border-gray-50">Facilities</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-all py-2 border-b border-gray-50">About Us</Link>
              <Link to="/#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-all py-2 border-b border-gray-50">Contact</Link>
              <Link 
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-8 py-4 text-center hover:bg-opacity-90 transition-all shadow-lg shadow-primary/10 text-xs font-bold tracking-widest uppercase rounded-sm mt-2"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default PublicNavbar;
