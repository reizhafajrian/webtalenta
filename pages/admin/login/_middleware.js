import { NextRequest, NextResponse } from "next/server";
import { getUser } from "../../../lib/auth.ts";

export async function middleware(req) {
  const res = await getUser(req, NextResponse);
  if (res.statusCode === 401) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect("/admin/app/create-article");
  }
}
