/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import { getUser } from "../../../lib/auth";

export async function middleware(req: any) {
  const res = await getUser(req);

  if (res.statusCode === 401) {
    return NextResponse.redirect("/admin/login");
  } else {
    return NextResponse.next();
  }
}
