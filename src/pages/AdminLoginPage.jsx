import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'thomasramesh449@gmail.com' && password === 'Abhi@123') {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('user', JSON.stringify({ name: 'Thomas Ramesh', email: email }));
      navigate('/admin');
    } else {
      alert('Access Denied: Invalid Admin credentials.');
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans">
      {/* Dark Background for Admin */}
      <div className="absolute inset-0 z-0 bg-[#0f0f1b]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-black/80" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-white/5 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 text-white">
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary font-bold text-3xl shadow-xl shadow-secondary/20">TR</div>
              <div className="text-left">
                <span className="font-black text-sm uppercase block tracking-tighter leading-none text-white">Thomas Ramesh</span>
                <span className="font-black text-sm uppercase block tracking-tighter leading-none text-secondary">Admin Portal</span>
              </div>
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Restricted Access</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight">System Login</h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Admin Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                <input 
                  type="email" 
                  placeholder="admin@tricprayagraj.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-bold text-white placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Master Password</label>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-secondary transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-bold text-white placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-secondary text-primary font-black uppercase tracking-widest rounded-2xl hover:brightness-110 shadow-xl shadow-secondary/10 flex items-center justify-center gap-2 group transition-all"
            >
              Initialize Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center pt-8 border-t border-white/5">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
              Centralized Control System v2.4
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/login" className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            Switch to Student Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
