import { autoMateDm } from "@/lib/Automate";
import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.INSTAGRAM_VERIFY_TOKEN || "just_a_token";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook Verified Successfully!");
    return new NextResponse(challenge, { status: 200 });
  } else {
    return new NextResponse("❌ Forbidden", { status: 403 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (body.entry[0].messaging) {
    const sender = body.entry[0].messaging[0].sender.id;
    const message = body.entry[0].messaging[0].message.text;
    autoMateDm(sender, message);
  } else if (body.entry[0].changes) {
    console.log("comment on post", body.entry[0]);
  }
  return new NextResponse("OK", { status: 200 });
}
