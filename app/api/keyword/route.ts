import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import client from "@/client";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!body) return NextResponse.json("Unauthorized", { status: 401 });

    const Key = body.key;

    const Value = body.value;

    const Variables = body.variables;

    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    const { Id } = jwt.verify(token, process.env.JWT_SECRET_KEY!) as JwtPayload;

    console.log(Id, Key, Value, Variables);

    if (Id) {
      const allKeys = await client.keyWord.findMany({ where: { userId: Id } });

      const isTrue = allKeys.some((keyWord) => keyWord.Key === Key);

      if (isTrue)
        return NextResponse.json(
          { message: "This Keyword already exist" },
          { status: 401 }
        );

      await client.keyWord.create({
        data: {
          Key,
          Value,
          userId: Id,
          Variables,
        },
      });

      return NextResponse.json({ status: "Created" }, { status: 201 });
    } else {
      return NextResponse.json({ status: "unAuthorized" }, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json("Error", { status: 401 });
  }
};
