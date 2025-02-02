import client from "@/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    if (!body)
      return NextResponse.json({ message: "Bad Request" }, { status: 401 });
    const userId = body.data.id;
    let user = await client.user.findFirst({ where: { userId } });
    if (user) {
      await client.user.update({
        where: { userId: user.userId },
        data: { access_token: body.accessToken },
      });
    } else {
      user = await client.user.create({
        data: {
          userId,
          username: body.data.username,
          access_token: body.accessToken,
          account_type: body.data.account_type,
        },
      });
    }
    const token = jwt.sign(
      { Id: user.userId },
      process.env.JWT_SECRET_KEY as string
    );
    const response = NextResponse.json({ message: "Created" }, { status: 201 });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
