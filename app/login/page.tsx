import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authUrl } from "@/utils/Url";

const Login = () => {
  return (
    <Link href={authUrl}>
      <Button>Authenticate</Button>
    </Link>
  );
};

export default Login;
