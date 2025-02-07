"use client";
import { InstagramManager } from "@/Manager/Instagram";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Postdrawer from "./Postdrawer";
import { Button } from "@/components/ui/button";
import { PostData } from "@/types/interface";
import { LoaderCircle } from "lucide-react";

const Posts = () => {
  const [posts, setPosts] = useState<any[] | null>(null);
  const [postData, setPostData] = useState<PostData>({ show: false, data: {} });
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

  if(!posts) {
    return <div className="flex justify-center min-h-screen items-center">
      <LoaderCircle className="animate-spin"/>
    </div>
  }

  return (
    <div className="flex flex-wrap m-10 gap-6">
      {posts &&
        posts.map((post) => (
          <Card key={post.id} className="p-0 overflow-hidden">
            <CardContent className="p-0 space-x-0">
              <Image
                alt="image"
                width={300}
                height={300}
                src={post.media_url}
              />
            </CardContent>
            <CardFooter className="px-2 py-4">
              <Button onClick={() => setPostData({ show: true, data: post })}>
                Show More
              </Button>
            </CardFooter>
          </Card>
        ))}
      <Postdrawer setPostData={setPostData} postData={postData} />
    </div>
  );
};

export default Posts;
