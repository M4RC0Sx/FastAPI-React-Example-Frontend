import React from "react";

import { useAuthStore } from "../stores/authStore";

const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome to your dashboard!</p>
      <div className="mt-4 rounded bg-white p-4 shadow-md">
        <h2 className="text-2xl font-semibold">User Profile</h2>
        <p className="mt-2 text-gray-600">
          <strong>Email:</strong> {user?.email || "Not available"}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Full Name:</strong> {user?.full_name || "Not available"}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Admin:</strong> {user?.is_admin ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
