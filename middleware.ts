import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  )
    return NextResponse.next();

  if (pathname == "/login") {
    return NextResponse.next();
  }

  if (pathname != "/" && pathname != "/verify") {
    const isAuth = req.cookies.get("auth_token")?.value;
    if (isAuth) return NextResponse.next();
    else return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
