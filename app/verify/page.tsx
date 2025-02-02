"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Verify = () => {
  const router = useRouter();
  const code = process.env.NEXT_PUBLIC_TOKEN!;

  useEffect(() => {
    if (!code) return;
    async function getInstagramUser(accessToken: string) {
      const url = `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${accessToken}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error fetching user: ${data.error.message}`);
      }
      const res = await axios.post("/api/register", { data, accessToken });
      if (res.status == 201) {
        router.push("/dashboard");
      }
    }
    getInstagramUser(code);
  }, [code]);

  return <div>Verify</div>;
};

export default Verify;
