import { NextResponse } from "next/server";

export const GET = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Privacy Policy</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>Privacy Policy</h1>
      <p>This is a sample privacy policy page for our Instagram integration.</p>
    </body>
    </html>
  `;

  return new NextResponse(htmlContent, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
};
