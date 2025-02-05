import client from "@/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { userObj } = body;
    const isUser = await client.user.findFirst({
      where: { userName: userObj.userName },
    });
    if (isUser) {
      await client.user.update({
        where: { userName: userObj.userName },
        data: { access_token: userObj.access_token },
      });
    } else {
      await client.user.create({ data: userObj });
    }
    return NextResponse.json({ status: "Done" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
