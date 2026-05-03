import React from 'react';
import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Wallet, 
  Plus,
  Megaphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import TeacherModal from '../components/TeacherModal';
import NoticeModal from '../components/NoticeModal';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminDashboard = () => {
  const [isTeacherModalOpen, setIsTeacherModalOpen] = React.useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('teachers');
  const [teachers, setTeachers] = React.useState([]);
  const [students, setStudents] = React.useState([]);

  const stats = [
    { icon: Users, label: 'Total Students', value: students.length.toString(), trend: 'Live', color: 'bg-blue-500' },
    { icon: GraduationCap, label: 'Total Teachers', value: teachers.length.toString(), trend: 'Live', color: 'bg-green-500' },
    { icon: Wallet, label: 'Admission Fee', value: '₹5,000', trend: 'Base', color: 'bg-purple-500' },
    { icon: UserCheck, label: 'System Status', value: 'Online', trend: 'Active', color: 'bg-orange-500' },
  ];

  const fetchData = async () => {
    try {
      const tRes = await fetch(`${API_URL}/api/admin/teachers`);
      const sRes = await fetch(`${API_URL}/api/admin/students`);
      if (tRes.ok) setTeachers(await tRes.json());
      if (sRes.ok) setStudents(await sRes.json());
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async (type, id) => {
    if (window.confirm(`Are you sure you want to remove this ${type}?`)) {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/${type}/${id}`, { method: 'DELETE' });
        if (response.ok) {
          alert(`${type.charAt(0).toUpperCase() + type.slice(1)} removed successfully.`);
          fetchData();
        }
      } catch (error) {
        alert('Failed to remove record.');
      }
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <TeacherModal isOpen={isTeacherModalOpen} onClose={() => { setIsTeacherModalOpen(false); fetchData(); }} />
      <NoticeModal isOpen={isNoticeModalOpen} onClose={() => setIsNoticeModalOpen(false)} />
      <PageHeader 
        title="College Control Center" 
        subtitle="Manage faculty, students, and institutional records with full administrative authority."
        imageUrl="/images/campus.jpg"
      >
        <button 
          onClick={() => setIsTeacherModalOpen(true)}
          className="px-5 py-2.5 bg-secondary text-primary font-bold rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Recruit Teacher
        </button>
        <button 
          onClick={() => setIsNoticeModalOpen(true)}
          className="px-5 py-2.5 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-all flex items-center gap-2"
        >
          <Megaphone className="w-4 h-4" /> Post Notice
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden"
      >
        <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Master Management</h3>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Live Database Control</p>
          </div>
          
          <div className="flex bg-gray-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setActiveTab('teachers')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'teachers' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Faculty ({teachers.length})
            </button>
            <button 
              onClick={() => setActiveTab('students')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'students' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Students ({students.length})
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <div className="min-w-[800px] p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                  <th className="px-6 py-4">Name & Info</th>
                  <th className="px-6 py-4">{activeTab === 'teachers' ? 'Subject' : 'Class'}</th>
                  <th className="px-6 py-4">Identification</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activeTab === 'teachers' ? (
                  teachers.map((teacher) => (
                    <tr key={teacher._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black">
                            {teacher.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{teacher.name}</p>
                            <p className="text-xs text-gray-400 font-medium">{teacher.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-bold uppercase">{teacher.subject}</span>
                      </td>
                      <td className="px-6 py-5 text-gray-500 text-sm font-mono">ID: {teacher._id.slice(-6)}</td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => handleRemove('teacher', teacher._id)}
                          className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-black uppercase hover:bg-red-600 hover:text-white transition-all"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  students.map((student) => (
                    <tr key={student._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center font-black">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{student.name}</p>
                            <p className="text-xs text-gray-400 font-medium">{student.rollNumber}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase">{student.class}-{student.section}</span>
                      </td>
                      <td className="px-6 py-5 text-gray-500 text-sm font-mono">UID: {student._id.slice(-6)}</td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => handleRemove('student', student._id)}
                          className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-black uppercase hover:bg-red-600 hover:text-white transition-all"
                        >
                          Expel
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {((activeTab === 'teachers' && teachers.length === 0) || (activeTab === 'students' && students.length === 0)) && (
              <div className="p-12 text-center">
                <p className="text-gray-400 font-bold uppercase tracking-widest">No records found in database</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
