import React from "react";

import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-slate-100">
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
