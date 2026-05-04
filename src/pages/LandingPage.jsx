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
  MoreVertical,
  X
} from 'lucide-react';

import AdmissionForm from '../components/AdmissionForm';

import PublicLayout from '../layouts/PublicLayout';
import { useAdmission } from '../context/AdmissionContext';

const LandingPage = () => {
  const { openAdmission } = useAdmission();
  const [notices, setNotices] = React.useState([]);

  const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

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
    <PublicLayout>
      <div id="home" className="min-h-screen">
        {/* Navbar and Side Banner are handled by PublicLayout */}

      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[85vh] overflow-hidden">
        <img 
          src="/images/campus.jpg" 
          alt="School Campus" 
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-y-0 left-0 w-full flex items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="purple-overlay w-full lg:w-auto p-8 sm:p-12 lg:p-16 text-white max-w-3xl h-full flex flex-col justify-center shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase mb-6 leading-[1.1] tracking-tight">
              A Tradition <br />
              of <span className="text-secondary">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-light mb-10 leading-relaxed font-sans opacity-90">
              Founded on the principles of academic rigor and character development, we nurture the leaders of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openAdmission} className="btn-primary bg-secondary text-primary border-none text-center">Get Admission</button>
              <a href="#school-life" className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all text-center">Explore More</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-none overflow-hidden">
          {[
            { title: "Our Vision", desc: "To be a globally recognized institution that fosters innovation, integrity, and lifelong learning.", icon: Award, color: "bg-primary text-white" },
            { title: "Our Mission", desc: "Providing a holistic education that empowers students to excel academically and contribute to society.", icon: BookOpen, color: "bg-school-accent text-primary border-y md:border-y-0 md:border-x border-gray-200" },
            { title: "Our Philosophy", desc: "We believe in the power of curiosity, the value of hard work, and the importance of global citizenship.", icon: Users, color: "bg-secondary text-primary" }
          ].map((item, i) => (
            <div key={i} className={`p-10 sm:p-16 flex flex-col items-center text-center ${item.color}`}>
              <item.icon className="w-10 sm:w-12 h-10 sm:h-12 mb-8 opacity-80" />
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-6 tracking-wide">{item.title}</h3>
              <p className="leading-relaxed font-sans text-xs sm:text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Notice Board - Upgraded Grid Design */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-primary/[0.02] -skew-y-3 origin-right"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Official Announcements</span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase leading-tight">Latest News & Updates</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notices.length > 0 ? (
              notices.map((notice, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={notice._id} 
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all group h-full"
                >
                  {/* Image Section */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={notice.imageUrl || '/images/events.jpg'} 
                      alt={notice.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg ${
                      notice.priority === 'High' ? 'bg-red-500' : 
                      notice.priority === 'Low' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      {notice.priority} Priority
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                      <div className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> {notice.category}</div>
                    </div>
                    
                    <h3 className="text-xl font-black text-primary uppercase mb-4 leading-tight group-hover:text-orange-500 transition-colors">
                      {notice.title}
                    </h3>
                    
                    <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 line-clamp-3">
                      {notice.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary"><User className="w-4 h-4" /></div>
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{notice.author || 'Admin'}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-bold uppercase tracking-widest italic">No new notices at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 -z-10 rounded-full"></div>
            <div className="border-[20px] border-gray-50 shadow-2xl relative z-10">
              <img src="/images/classroom.jpg" alt="Classroom" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 text-white hidden sm:block shadow-xl z-20">
              <h4 className="text-4xl font-black mb-1">25+</h4>
              <p className="uppercase text-xs tracking-widest font-bold">Years of Legacy</p>
            </div>
          </div>
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About Our School</span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase mb-8 leading-tight">Empowering Students to <br /> Reach their Full Potential</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans">
              At Thomas Ramesh inter college (T.R. I C), we offer a curriculum that is both challenging and supportive. 
              Our state-of-the-art facilities and dedicated faculty create an environment where 
              students can explore their interests and develop their talents.
            </p>
            <ul className="space-y-4 mb-12 font-sans font-medium text-gray-700">
              {['UP Board Curriculum', 'Expert & Dedicated Faculty', 'World-class Sports Facilities', 'Holistic Development Focus'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">Discover More</Link>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Academic Excellence</span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase mb-4">Our Curriculum & Results</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase mb-6 tracking-tight">UP Board Curriculum</h3>
              <p className="text-gray-600 leading-relaxed font-sans mb-8">
                We follow the prestigious UP Board curriculum for all classes from 1st to 12th. 
                Our approach emphasizes conceptual clarity, regular assessment, and holistic growth.
              </p>
              <ul className="space-y-4 font-sans font-bold text-sm text-gray-700">
                <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-secondary" /> Science & Mathematics Focus</li>
                <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-secondary" /> Humanities & Commerce Stream</li>
                <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-secondary" /> Language Proficiency Program</li>
              </ul>
            </div>
            
            <div className="bg-primary text-white p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 text-white">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Outstanding Results</h3>
              <p className="text-blue-100 leading-relaxed font-sans mb-8">
                T.R. I C consistently achieves 100% board results with many students securing positions in the top district merit lists.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl">
                  <h4 className="text-3xl font-black mb-1">100%</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Pass Rate</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl">
                  <h4 className="text-3xl font-black mb-1">95%</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Top Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 text-center">
          {[
            { label: "Students", val: "1500+", icon: Users },
            { label: "Graduates", val: "100%", icon: Award },
            { label: "Awards", val: "10+", icon: Trophy },
            { label: "Faculties", val: "20+", icon: BookOpen }
          ].map((stat, i) => (
            <div key={i}>
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
              <h4 className="text-5xl font-black mb-2">{stat.val}</h4>
              <p className="uppercase text-xs tracking-[0.3em] font-bold opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* School Life Gallery */}
      <section id="school-life" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Life at T.R. I C</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/images/playground.jpg", title: "Sports Excellence" },
              { img: "/images/teacher.jpg", title: "Academic Rigor" },
              { img: "/images/events.jpg", title: "Cultural Vibrancy" }
            ].map((item, i) => (
              <div key={i} className="group relative h-96 overflow-hidden shadow-xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white uppercase mb-4">{item.title}</h3>
                  <button className="flex items-center gap-2 text-secondary font-bold uppercase text-xs tracking-widest">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Faculty Section */}
      <section id="faculty" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-primary/[0.01] skew-y-3 origin-left"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Meet Our Educators</span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase mb-4">Our Expert Faculty</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Rajesh Sharma", role: "Principal", subject: "Mathematics", img: "/images/faculty/principal.png" },
              { name: "Mrs. Sunita Verma", role: "Vice Principal", subject: "English Literature", img: "/images/faculty/vice_principal.png" },
              { name: "Mr. Anil Kumar", role: "Senior Faculty", subject: "Physics", img: "/images/faculty/teacher1.png" },
              { name: "Dr. Anjali Gupta", role: "Department Head", subject: "Chemistry", img: "/images/faculty/teacher2.png" }
            ].map((teacher, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white group rounded-[2rem] overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="h-64 bg-primary/5 relative overflow-hidden">
                  <img src={teacher.img} alt={teacher.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {teacher.subject}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-1">{teacher.name}</h3>
                  <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">{teacher.role}</p>
                  <div className="flex justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"><Mail className="w-4 h-4" /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"><Phone className="w-4 h-4" /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-primary">View All Faculty Members</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="/images/faculty/principal.png" 
                alt="Dr. Rajesh Sharma" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[600px] object-cover" 
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-[3rem] -z-0 hidden lg:block"></div>
              <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
            </div>
            
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Leadership Message</span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary uppercase mb-6 leading-tight">Welcome from <br/> our Principal</h2>
              <p className="text-gray-600 font-sans text-xl italic leading-relaxed mb-8 border-l-4 border-secondary pl-6">
                "Our mission at T.R. I C is to provide an environment where students can discover their true potential and graduate as leaders of tomorrow."
              </p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-black text-primary uppercase">Dr. Rajesh Sharma</h3>
                <p className="text-secondary font-bold tracking-widest uppercase text-xs">Principal & Academic Director</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <h4 className="text-primary font-black uppercase text-sm mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">Nurturing innovative minds with strong moral character since 1995.</p>
                </div>
                <div>
                  <h4 className="text-primary font-black uppercase text-sm mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-sm font-sans leading-relaxed">To be the benchmark of quality education in Prayagraj.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </PublicLayout>
  );
};

export default LandingPage;
