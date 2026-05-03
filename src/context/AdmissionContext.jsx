import React, { createContext, useContext, useState } from 'react';

const AdmissionContext = createContext();

export const AdmissionProvider = ({ children }) => {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const openAdmission = () => setIsAdmissionOpen(true);
  const closeAdmission = () => setIsAdmissionOpen(false);

  return (
    <AdmissionContext.Provider value={{ isAdmissionOpen, openAdmission, closeAdmission }}>
      {children}
    </AdmissionContext.Provider>
  );
};

export const useAdmission = () => useContext(AdmissionContext);
