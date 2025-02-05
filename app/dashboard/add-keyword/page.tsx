import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const addKeyword = () => {
  return (
    <div className="p-10">
      <div> 
        <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Add Keyword
        </h2>
        <div className="my-5">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-600">
            write your keyword in this box
          </p>
          <Textarea
            className="my-3 resize-none"
            rows={8}
            placeholder="Type your Key here."
          />
        </div>
        <div className="my-5">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-neutral-600">
            write your appropriate answer for the keyword
          </p>
          <Textarea
            className="my-3 resize-none"
            rows={10}
            placeholder="Type your Value here."
          />
        </div>
        <Button>Create Keyword</Button>
      </div>
    </div>
  );
};

export default addKeyword;
