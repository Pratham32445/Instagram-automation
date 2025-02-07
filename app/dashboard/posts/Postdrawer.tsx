import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PostData } from "@/types/interface";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";

const Postdrawer = ({
  postData,
  setPostData,
}: {
  postData: PostData;
  setPostData: ({ show, data }: { show: boolean; data: any }) => void;
}) => {
  console.log(postData);
  return (
    <Dialog
      open={postData.show}
      onOpenChange={() => setPostData({ show: false, data: {} })}
    >
      <DialogContent className="flex">
        <div>
          <Image
            alt="postImage"
            width={500}
            height={500}
            src={postData.data.media_url}
          />
        </div>
        <div>
          {!postData.data.comments && (
            <div className="flex justify-center items-center">
              <DialogTitle>
                <p>No Comments On the Post</p>
              </DialogTitle>
            </div>
          )}
          {postData.data.comments &&
            postData.data.comments.data.map((idx) => (
              <div key={idx}>
                <DialogTitle>idx</DialogTitle>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Postdrawer;
