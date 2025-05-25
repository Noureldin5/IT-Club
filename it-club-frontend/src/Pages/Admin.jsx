import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';
import authService from '../services/authService';

export default function Admin() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // If user is already authenticated as admin, go directly to dashboard
    if (authService.isAuthenticated() && authService.isAdmin()) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  return (
    <div className="admin-page">
      <AdminLogin />
    </div>
  );
}