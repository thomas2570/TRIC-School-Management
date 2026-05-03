import React from 'react';
import PublicNavbar from '../components/PublicNavbar';
import PublicFooter from '../components/PublicFooter';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen mesh-bg font-serif">
      <PublicNavbar />
      <main>
        {children}
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
