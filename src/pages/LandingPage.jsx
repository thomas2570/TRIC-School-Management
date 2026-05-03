import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Trophy,
  Calendar,
  Tag,
  User,
  Menu,
  X
} from 'lucide-react';

import AdmissionForm from '../components/AdmissionForm';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const LandingPage = () => {
  const [isAdmissionOpen, setIsAdmissionOpen] = React.useState(false);
  const [notices, setNotices] = React.useState([]);

  React.useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/notices`);
        if (response.ok) {
          const data = await response.json();
          setNotices(data);
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif selection:bg-primary selection:text-white">
      {/* Top Bar */}
      <div className="bg-primary text-secondary px-6 py-2 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/10">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 00000 00000</span>
          <span className="flex items-center gap-2 border-l border-white/20 pl-6 hidden sm:flex"><Mail className="w-3 h-3" /> info@tric.edu.in</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="hover:text-white transition-colors">Student Portal</Link>
          <span className="opacity-30">|</span>
          <Link to="/login" className="hover:text-white transition-colors">Staff Login</Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 group cursor-pointer z-50"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex-shrink-0 aspect-square flex items-center justify-center text-secondary font-bold text-2xl border-4 border-gray-100 shadow-sm group-hover:scale-110 transition-transform">TR</div>
            <div>
              <h1 className="text-xl font-extrabold text-primary leading-tight uppercase tracking-tighter">Thomas Ramesh inter college</h1>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            <div className="flex items-center gap-8 font-serif font-bold text-gray-800 uppercase text-[12px] tracking-[0.2em]">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#admissions" className="hover:text-primary transition-colors">Admissions</a>
              <a href="#academics" className="hover:text-primary transition-colors">Academics</a>
              <a href="#school-life" className="hover:text-primary transition-colors">School Life</a>
              <a href="#facilities" className="hover:text-primary transition-colors">Facilities</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <button onClick={() => setIsAdmissionOpen(true)} className="px-10 py-5 bg-primary text-white font-black uppercase text-[14px] tracking-[0.2em] shadow-2xl hover:bg-opacity-90 transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[85vh] overflow-hidden">
        <img 
          src="/images/campus.jpg" 
          alt="School Campus" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-y-0 left-0 w-full flex items-center justify-center lg:justify-start px-6 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="purple-overlay p-8 sm:p-12 lg:p-16 text-white max-w-3xl shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase mb-6 leading-[1.1] tracking-tighter">
              A Tradition of <br />
              <span className="text-secondary">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-light mb-10 leading-relaxed font-sans opacity-90 max-w-2xl">
              Founded on the principles of academic rigor and character development, we nurture the leaders of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsAdmissionOpen(true)} className="px-8 py-3 bg-secondary text-primary font-black uppercase tracking-widest hover:opacity-90 transition-all text-center">Get Admission</button>
              <a href="#school-life" className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all text-center">Explore More</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section id="notices" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Institutional Updates</span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tighter">Latest News</h2>
            </div>
            <p className="text-gray-500 font-medium max-w-md border-l-4 border-secondary pl-6 py-2">
              Stay informed with the latest announcements, events, and academic updates directly from the college administration.
            </p>
          </div>

          {notices.length === 0 ? (
            <div className="bg-gray-50 rounded-[3rem] p-20 text-center border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No active notices at this moment</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {notices.map((notice, i) => (
                <motion.div 
                  key={notice._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={notice.imageUrl || '/images/campus.jpg'} 
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${
                        notice.priority === 'High' ? 'bg-red-500' : notice.priority === 'Medium' ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {notice.priority} Priority
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(notice.date).toLocaleDateString()}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {notice.title}
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed text-sm mb-8 line-clamp-3">
                      {notice.content}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <button className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all">
                        Read Full Announcement <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Students", val: "1500+", icon: Users },
            { label: "Graduates", val: "100%", icon: Award },
            { label: "Awards", val: "10+", icon: Trophy },
            { label: "Faculties", val: "20+", icon: BookOpen }
          ].map((stat, i) => (
            <div key={i}>
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl lg:text-5xl font-black mb-2 tracking-tighter">{stat.val}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a0033] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">TR</div>
              <h1 className="text-lg font-black uppercase tracking-tighter">Thomas Ramesh <br/> inter college</h1>
            </div>
            <p className="text-gray-400 font-sans leading-relaxed text-sm">
              Inspiring excellence since 1995. A premier educational institution dedicated to global standards of learning.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-black uppercase mb-8 text-secondary">Quick Links</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400 uppercase tracking-widest font-bold">
              <li><button onClick={() => setIsAdmissionOpen(true)} className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4 cursor-pointer">Admissions</button></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Academics</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">School Life</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Facilities</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-black uppercase mb-8 text-secondary">Contact Us</h4>
            <ul className="space-y-6 font-sans text-sm text-gray-400">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-secondary shrink-0" /> Mustafabad Umari, Prayagraj, UP 211013</li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-secondary shrink-0" /> +91 00000 00000</li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-secondary shrink-0" /> info@tric.edu.in</li>
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
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 text-center text-xs text-gray-500 font-sans uppercase tracking-widest font-bold">
          <p>© 2026 Thomas Ramesh inter college. All rights reserved.</p>
        </div>
      </footer>

      <AdmissionForm isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} />
    </div>
  );
};

export default LandingPage;
