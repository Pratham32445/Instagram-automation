import { NextResponse } from "next/server";

export const GET = async () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Privacy Policy</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; background-color: #f9f9f9; }
            h1 { color: #333; }
            p { line-height: 1.6; }
        </style>
    </head>
    <body>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us...</p>
    </body>
    </html>
    `;

  return NextResponse.json(htmlContent, {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
};
