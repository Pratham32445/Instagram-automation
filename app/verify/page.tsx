"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { InstagramManager } from "@/Manager/Instagram";

const Verify = () => {
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    const getUserDetails = async () => {
      const { data, status } =
        await InstagramManager.getInstance().getUserDetails(
          process.env.NEXT_PUBLIC_ACCESS_TOKEN!
        );
      if (status == 200) {
        await axios.post("/api/login", {
          ...data,
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
