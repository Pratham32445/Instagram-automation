"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";

const Verify = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const access_token =
    process.env.NEXT_PUBLIC_ACCESS_TOKEN || searchParams.get("code");

  useEffect(() => {
    if (!access_token) {
      router.push("/login");
      return;
    }

    async function getInstaUser(access_token: string) {
      const url = `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${access_token}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        const userObj: User = {
          accountId: data.id,
          access_token,
          account_type: data.account_type,
          userName: data.username,
        };
        const res = await axios.post("/api/login", { userObj });
        if (res.status == 200) {
          router.push("/dashboard");
          return;
        } else {
          router.push("/login");
          return;
        }
      }
    }
    getInstaUser(access_token);
  }, [access_token]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      {" "}
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Please Wait While Verifying Your Account
      </h1>
    </div>
  );
};

export default Verify;
