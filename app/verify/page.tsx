"use client";
import { getUser } from "@/utils/Url";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Verify = () => {
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetch(getUser + process.env.NEXT_PUBLIC_ACCESS_TOKEN!);
      if (data.status == 200) {
        const userData = await data.json();
        await axios.post("/api/login", {
          ...userData,
          token: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
        });
        router.push("/dashboard");
      } else {
        router.push("/login");
        toast({
          title: "Login Error",
          description: "Friday, February 10, 2023 at 5:57 PM",
          variant: "destructive",
        });
      }
    };
    getUserDetails();
  }, []);

  return <div>Please wait we are verifing your account</div>;
};

export default Verify;
