import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Globe } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginType, setLoginType] = React.useState('student'); // 'student' or 'staff'

  const [formData, setFormData] = React.useState({
    identifier: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Admin bypass
    if (loginType === 'staff' && formData.identifier === 'thomasramesh449@gmail.com' && formData.password === 'Abhi@123') {
      localStorage.setItem('role', 'admin');
      navigate('/admin');
      return;
    }

    const endpoint = loginType === 'student' ? '/api/login' : '/api/teacher/login';
    const payload = loginType === 'student' 
      ? { rollNumber: formData.identifier, password: formData.password }
      : { email: formData.identifier, password: formData.password };

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.student || data.teacher));
        localStorage.setItem('role', loginType === 'staff' ? 'teacher' : 'student');
        navigate(loginType === 'student' ? '/student' : '/teacher');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Could not connect to the server.');
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url("/images/campus.jpg")' }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex-shrink-0 aspect-square flex items-center justify-center text-secondary font-bold text-2xl shadow-lg shadow-primary/30 border-2 border-gray-100">TR</div>
              <div className="text-left">
                <span className="font-black text-xs text-primary uppercase block tracking-tighter leading-none">Thomas Ramesh</span>
                <span className="font-black text-xs text-primary uppercase block tracking-tighter leading-none">inter college</span>
              </div>
            </Link>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Portal Login</h2>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
            <button 
              onClick={() => setLoginType('student')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                loginType === 'student' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Student
            </button>
            <button 
              onClick={() => setLoginType('staff')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                loginType === 'staff' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Staff / Admin
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                {loginType === 'student' ? 'Roll Number' : 'Email Address'}
              </label>
              <div className="relative group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder={loginType === 'student' ? "Enter Roll Number" : "Enter Email"}
                  value={formData.identifier}
                  onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-2xl hover:bg-opacity-90 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
            >
              Sign In to Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
              Secured by TRIC Digital Systems
            </p>
          </div>
        </div>
        
        <p className="text-center mt-8 text-white/80 font-medium flex flex-col gap-2">
          <span>Issues logging in? <Link to="#" className="text-white hover:underline">Contact Admin Office</Link></span>
          <Link to="/admin-login" className="text-secondary font-black uppercase tracking-widest text-xs hover:brightness-110">Access Admin Portal</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
