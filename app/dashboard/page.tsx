"use client";
import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    const tokenFromCookie = Cookie.get("auth_token");
    console.log(tokenFromCookie);
    // if (!tokenFr omCookie) router.push("/login");
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
