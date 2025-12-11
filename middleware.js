import { NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard-account",
  "/dashboard-identity",
  "/dashboard-invoice",
  "/dashboard-orders",
  "/dashboard-wallet",
  "/dashboard-wishlist",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("access_token")?.value;

  console.log(pathname)
  if (accessToken) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/dashboard-account",
    "/dashboard-account/:path*",
    "/dashboard-identity",
    "/dashboard-identity/:path*",
    "/dashboard-invoice",
    "/dashboard-invoice/:path*",
    "/dashboard-orders",
    "/dashboard-orders/:path*",
    "/dashboard-wallet",
    "/dashboard-wallet/:path*",
    "/dashboard-wishlist",
    "/dashboard-wishlist/:path*",
  ],
};
