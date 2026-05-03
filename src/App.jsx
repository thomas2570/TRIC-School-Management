import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AboutPage from './pages/AboutPage';
import NoticeBoard from './pages/NoticeBoard';

import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Dashboard Routes (Protected in a real app) */}
        <Route path="/admin" element={
          <DashboardLayout>
            <AdminDashboard />
          </DashboardLayout>
        } />
        
        <Route path="/student" element={
          <DashboardLayout>
            <StudentDashboard />
          </DashboardLayout>
        } />

        <Route path="/teacher" element={
          <DashboardLayout>
            <TeacherDashboard />
          </DashboardLayout>
        } />

        <Route path="/notices" element={
          <DashboardLayout>
            <NoticeBoard />
          </DashboardLayout>
        } />

        <Route path="/about" element={
          <DashboardLayout>
            <AboutPage />
          </DashboardLayout>
        } />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
