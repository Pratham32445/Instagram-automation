"use client";
import React from "react";
import { Button } from "./ui/button";
import Cookies from "js-cookie";

const Logout = () => {
  const logoutUser = () => {
    Cookies.remove("auth_token");
  };
  return (
    <div className="py-5 px-2">
      <Button variant={"destructive"} onClick={logoutUser}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
