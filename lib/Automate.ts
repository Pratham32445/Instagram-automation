import client from "@/client";
import jwt, { JwtPayload } from "jsonwebtoken";

export const autoMateDm = async (senderId: string, message: string) => {
  try {
    const token = process.env.JWT_TEST_TOKEN!;
    const { Id } = jwt.verify(token, process.env.JWT_SECRET_KEY!) as JwtPayload;
    const Keys = await client.keyWord.findMany({where : {userId : Id}});
    console.log(Keys);
  } catch (error) {
    console.log(error);
  }
};
