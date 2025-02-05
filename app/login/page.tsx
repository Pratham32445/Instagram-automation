import { LoginForm } from "@/components/LoginForm";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <LoginForm />
    </div>
  );
};

export default Login;
