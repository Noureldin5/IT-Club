import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

function ProtectedRoute({ children, adminOnly = false }) {
  const isAuthenticated = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();
  
  if (!isAuthenticated) {
    // Not logged in, redirect to admin login
    return <Navigate to="/admin/login" />;
  }
  
  if (adminOnly && !isAdmin) {
    // User is logged in but not an admin
    authService.logout(); // Force logout
    return <Navigate to="/admin/login" />;
  }
  
  return children;
}

export default ProtectedRoute;