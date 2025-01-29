import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/" replace />; // Redirect to login page if not authenticated
  }
  return children;
};

export default ProtectedRoute;
