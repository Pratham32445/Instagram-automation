import client from "@/client";
import { authBody } from "@/types/zod";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const parsedBody = authBody.safeParse(body);
    if (!parsedBody.success)
      return NextResponse.json(
        { message: "Please Provide the valid fields" },
        { status: 401 }
      );
    const isUser = await client.user.findFirst({
      where: { userName: parsedBody.data.username },
    });
    if (isUser) {
      await client.user.update({
        where: { userName: parsedBody.data.username },
        data: { access_token: parsedBody.data.token },
      });
    } else {
      await client.user.create({
        data: {
          userId: parsedBody.data.id,
          userName: parsedBody.data.username,
          account_type: parsedBody.data.account_type,
          access_token: parsedBody.data.token,
        },
      });
    }
    const jwt_token = jwt.sign(
      { userName: parsedBody.data.username },
      process.env.NEXT_PUBLIC_JWT_SECRET!
    );
    const response = NextResponse.json({
      message: "Account Created Successfully",
    });
    response.cookies.set({
      name: "auth_token",
      value: jwt_token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { messsage: "Internal Server Error" },
      { status: 501 }
    );
  }
};
