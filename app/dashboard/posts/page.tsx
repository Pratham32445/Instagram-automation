"use client";
import { InstagramManager } from "@/Manager/Instagram";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Postdrawer from "./Postdrawer";


const Posts = () => {
  const [posts, setPosts] = useState<any[] | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await InstagramManager.getInstance().getMediaDetails(
        process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
        process.env.NEXT_PUBLIC_ID!
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap m-10 gap-6">
      {posts &&
        posts.map(({ id, media_url, timestamp }) => (
          <Card key={id} className="p-0 overflow-hidden">
            <CardContent className="p-0 space-x-0">
              <Image alt="image" width={300} height={300} src={media_url} />
            </CardContent>
          </Card>
        ))}
        <Postdrawer/>
    </div>
  );
};

export default Posts;
