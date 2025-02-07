import { InstagramManager } from "@/Manager/Instagram";
import React from "react";

const Friends = async () => {
  await InstagramManager.getInstance().getMediaDetails(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
    process.env.NEXT_PUBLIC_ID!
  );
  return <div>Friends</div>;
};

export default Friends;
