// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from './zustand/useAuthStore';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
