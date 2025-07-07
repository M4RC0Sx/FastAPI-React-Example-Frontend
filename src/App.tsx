import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/routes/ProtectedRoute";
import PublicRoute from "./components/routes/PublicRoute";
import DashboardPage from "./pages/DashboardPage";
import { useAuthStore } from "./stores/authStore";

function App() {
  const { isAuthenticated, fetchUserProfile } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) fetchUserProfile();
  }, [isAuthenticated, fetchUserProfile]);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<div>Login Page</div>} />
        {/* <Route path="/register" element={<div>Register Page</div>} /> */}
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
