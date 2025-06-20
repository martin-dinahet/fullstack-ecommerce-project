import { decrypt } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const protectedRoutes = ["/admin/dashboard"];
  const publicRoutes = ["/", "/admin/login"];
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = request.cookies.get("session")?.value;
  const session = await decrypt(cookie);
  const isLoggedIn = !!session?.userId;
  const isAdmin = session?.type === "ADMINISTRATOR";

  if (isProtectedRoute && (!isLoggedIn || !isAdmin))
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  if (isPublicRoute && isLoggedIn && isAdmin)
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  return NextResponse.next();
};

export default middleware;
