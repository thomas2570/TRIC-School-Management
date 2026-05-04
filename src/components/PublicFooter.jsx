import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const PublicFooter = () => {
  return (
    <footer id="contact" className="bg-[#1a0033] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 mb-8 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">TR</div>
            <h1 className="text-lg font-black uppercase tracking-tighter">Thomas Ramesh <br/> inter college</h1>
          </Link>
          <p className="text-gray-400 font-sans leading-relaxed text-sm">
            Inspiring excellence since 1995. A premier educational institution dedicated to global standards of learning.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-black uppercase mb-8 text-secondary">Quick Links</h4>
          <ul className="space-y-4 font-sans text-sm text-gray-400 uppercase tracking-widest font-bold">
            <li><Link to="/#admissions" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4 cursor-pointer">Admissions</Link></li>
            <li><Link to="/#academics" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Curriculum</Link></li>
            <li><Link to="/#school-life" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Campus Life</Link></li>
            <li><Link to="/#contact" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-black uppercase mb-8 text-secondary">Contact Us</h4>
          <ul className="space-y-6 font-sans text-sm text-gray-400">
            <li className="flex gap-4"><MapPin className="w-5 h-5 text-secondary shrink-0" /> Mustafabad Umari, Prayagraj, UP 221507</li>
            <li className="flex gap-4"><Phone className="w-5 h-5 text-secondary shrink-0" /> +91 8808XXX74</li>
            <li className="flex gap-4"><Mail className="w-5 h-5 text-secondary shrink-0" /> info@tricprayagraj.edu</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-black uppercase mb-8 text-secondary">Newsletter</h4>
          <p className="text-gray-400 font-sans text-sm mb-6">Stay updated with our latest news and events.</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Email Address" className="bg-white/10 border border-white/20 px-4 py-2 w-full font-sans focus:outline-none focus:border-secondary transition-colors" />
            <button className="bg-secondary text-primary p-2"><ChevronRight className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-sans uppercase tracking-widest font-bold">
        <p>© 2026 Thomas Ramesh inter college. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
