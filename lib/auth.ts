import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { SignJWT, jwtVerify } from "jose";
import { USER_TOKEN, JWT_SECRET_KEY } from "./constants";
import { jsonResponse } from "./utils";
import Cookies from "universal-cookie";
interface UserJwtPayload {
  jti: string;
  iat: number;
}

/**
 * Verifies the user's JWT token and returns the payload if
 * it's valid or a response if it's not.
 */

export async function verifyAuth(req) {
  const token = req.cookies[USER_TOKEN];
  if (!token) {
    return jsonResponse(401, {
      error: { message: "Missing user token" },
      statusCode: 401,
    });
  }
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET_KEY)
    );
    return jsonResponse(200, {
      statusCode: 200,
      user: verified.payload as UserJwtPayload,
    });
  } catch (err) {
    return jsonResponse(401, {
      error: { message: "Your token has expired." },
      statusCode: 401,
    });
  }
}

/**
 * Adds the user token cookie to a response.
 */
export async function getUser(request: NextRequest, response: NextResponse) {
  const user = await verifyAuth(request)
    .then((user) => {
      return user.json();
    })
    .catch((err) => {
      throw err;
    });

  return user;
}
