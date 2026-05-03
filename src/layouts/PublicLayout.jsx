import React, { useState } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';
import AdmissionForm from '../components/AdmissionForm';
import { Phone, Mail } from 'lucide-react';
import { useAdmission } from '../context/AdmissionContext';

const PublicLayout = ({ children }) => {
  const { isAdmissionOpen, openAdmission, closeAdmission } = useAdmission();

  return (
    <div className="min-h-screen mesh-bg font-serif">
      <AdmissionForm isOpen={isAdmissionOpen} onClose={closeAdmission} />
      
      {/* Side Banner */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <div className="bg-primary text-white py-6 px-2 flex flex-col items-center gap-6 rounded-l-xl shadow-2xl">
          <button onClick={openAdmission} className="[writing-mode:vertical-lr] rotate-180 uppercase font-bold tracking-widest text-sm hover:text-secondary transition-colors cursor-pointer">Get in Touch / Apply Now</button>
          <div className="flex flex-col gap-4">
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Phone className="w-5 h-5" /></button>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><Mail className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      <PublicNavbar />
      <main>
        {children}
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
