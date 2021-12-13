import { NextRequest, NextResponse } from "next/server";
import { getUser } from "../../../lib/auth.ts";
import Cookies from "universal-cookie";
import { USER_TOKEN } from "../../../lib/constants";
export async function middleware(req) {
  const res = await getUser(req, NextResponse);

  if (res.statusCode === 401) {
    return NextResponse.redirect("/admin/login");
  } else {
    return NextResponse.next();
  }
}
