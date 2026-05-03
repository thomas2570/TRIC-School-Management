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
  User
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
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white font-serif">
      <AdmissionForm isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} />
      
      {/* Side Banner */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="bg-primary text-white py-6 px-2 flex flex-col items-center gap-6 rounded-l-xl shadow-2xl">
          <button onClick={() => setIsAdmissionOpen(true)} className="[writing-mode:vertical-lr] rotate-180 uppercase font-bold tracking-widest text-sm hover:text-secondary transition-colors cursor-pointer">Get in Touch / Apply Now</button>
          <div className="flex flex-col gap-4">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Phone className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Mail className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex-shrink-0 aspect-square flex items-center justify-center text-secondary font-bold text-2xl border-4 border-gray-100 shadow-sm group-hover:scale-110 transition-transform">TR</div>
            <div>
              <h1 className="text-xl font-extrabold text-primary leading-tight uppercase tracking-tighter">Thomas Ramesh inter college</h1>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-sans">Mustafabad Umari Prayagraj</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            <div className="flex items-center gap-8 font-serif font-bold text-gray-800 uppercase text-[12px] tracking-[0.2em]">
              <a href="#home" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">HOME</a>
              <button 
                onClick={() => setIsAdmissionOpen(true)} 
                className="hover:text-primary transition-all relative group py-1 whitespace-nowrap cursor-pointer uppercase"
              >
                ADMISSIONS
              </button>
              <a href="#academics" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">ACADEMICS</a>
              <a href="#school-life" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">SCHOOL LIFE</a>
              <a href="#faculty" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">FACILITIES</a>
              <a href="#contact" className="hover:text-primary transition-all relative group py-1 whitespace-nowrap">CONTACT</a>
            </div>
            <button 
              onClick={() => setIsAdmissionOpen(true)}
              className="bg-primary text-white px-10 py-4 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/10 text-sm font-bold tracking-widest uppercase rounded-sm whitespace-nowrap"
            >
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
            className="bg-primary/90 p-8 sm:p-12 lg:p-16 text-white max-w-3xl shadow-2xl relative"
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Students", val: "1500+", icon: Users },
            { label: "Graduates", val: "100%", icon: Award },
            { label: "Awards", val: "10+", icon: Trophy },
            { label: "Faculties", val: "20+", icon: BookOpen }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl lg:text-5xl font-black text-primary mb-2 tracking-tighter">{stat.val}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notice Board */}
      <section id="notices" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Institutional Updates</span>
              <h2 className="text-5xl font-black text-primary uppercase tracking-tighter">Latest News</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {notices.map((notice, i) => (
              <motion.div 
                key={notice._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-t-4 border-primary p-8 shadow-xl shadow-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/5 p-3 rounded-lg text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{new Date(notice.date).toLocaleDateString()}</p>
                    <p className="text-[10px] font-black text-secondary uppercase tracking-widest">{notice.category}</p>
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary uppercase mb-4 leading-tight">{notice.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 line-clamp-3">{notice.content}</p>
                <button className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all">
                  Read Full Announcement <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
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
              <li><button onClick={() => setIsAdmissionOpen(true)} className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4 cursor-pointer">ADMISSIONS</button></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">ACADEMICS</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">SCHOOL LIFE</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">FACILITIES</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors underline decoration-secondary/30 underline-offset-4">CONTACT US</Link></li>
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
    </div>
  );
};

export default LandingPage;
