import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// protected user can't view
const hybridRoutes = ["/", "/login", "/register"];

// only travellers can view
const travellerAccessibleRoutes = [
  "/dashboard",
  "/my-profile",
  "/my-appointments",
];

//protected user can view
const rolesRedirect: Record<string, unknown> = {
  DRIVER: "http://localhost:3000/doctor/dashboard",
  TRAVELLER: "http://localhost:3000/dashboard",
  ADMIN: "http://localhost:3000/admins/dashboard",
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  //console.log(token, "token middleware");
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }
  const role = token?.role as string;
  if (
    (role === "ADMIN" && pathname.startsWith("/admins")) ||
    (role === "DRIVER" && pathname.startsWith("/doctors")) ||
    (role === "TRAVELLER" && travellerAccessibleRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }
  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  // for public user // unAuthenticate users
  return NextResponse.redirect("http://localhost:3000/");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/login",
    "/register",

    //traveller routes
    "/dashboard",
    "/my-profile",
    "/my-appointments",

    //driver routes
    "/doctor/:page*",

    //admins routes
    "/admins/:page*",
  ],
};
