import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const key = body.key;
    const value = body.Value;
    console.log(key,value);
  } catch (error) {
    console.log(error);
  }
};
