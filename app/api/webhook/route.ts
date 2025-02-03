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
  console.log(body);
  if (!body.entry || body.entry.length === 0) {
    console.error("No entry found in the request body.");
    return new NextResponse("No entry found", { status: 400 });
  }

  console.log(JSON.stringify(body.entry[0]));

  if (body.entry[0].messaging) {
    const sender = body.entry[0].messaging[0].sender.id;
    const message = body.entry[0].messaging[0].message.text;

    // Call your autoMateDm function
    const res = await autoMateDm(sender, message);

    console.log(res);
  } else if (body.entry[0].changes) {
    console.log("Comment on post", body.entry[0]);
  }

  return new NextResponse("OK", { status: 200 });
}
