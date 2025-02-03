import client from "@/client";
import jwt, { JwtPayload } from "jsonwebtoken";
import axios from "axios";

export const autoMateDm = async (senderId: string, message: string) => {
  try {
    const token = process.env.JWT_TEST_TOKEN!;
    const { Id } = jwt.verify(token, process.env.JWT_SECRET_KEY!) as JwtPayload;
    const Keys = await client.keyWord.findMany({ where: { userId: Id } });
    Keys.forEach(async ({ Key }) => {
      if (Key.toLowerCase() === message.toLowerCase()) {
        await sendMessage(senderId, message);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = async (userId: string, message: string) => {
  try {
    const INSTAGRAM_USER_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TOKEN!;

    const url = "https://graph.instagram.com/v21.0/me/messages";

    const payload = {
      recipient: { id: userId },
      message: { text: message },
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${INSTAGRAM_USER_ACCESS_TOKEN}`,
      },
    });
    if (response.status == 200) {
      console.log("success");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error);
    return false;
  }
};
