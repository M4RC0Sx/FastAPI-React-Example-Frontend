import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../../stores/authStore";

const PublicRoute: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
