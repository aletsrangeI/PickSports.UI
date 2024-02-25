import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useChekAuthenticated } from "../hooks/useCheckAuthenticated";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "../auth/routes";

export const AppRouter = () => {
  const isAuthenticated = useChekAuthenticated();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard/main" /> : <Navigate to="/auth/login" />} />
      <Route path="/dashboard/*" element={isAuthenticated ? <DashboardRoutes /> : <Navigate to="/auth/login" />} />
      <Route path="/auth/*" element={!isAuthenticated ? <AuthRoutes /> : <Navigate to="/dashboard/main" />} />
    </Routes>
  );
};

export default AppRouter;
