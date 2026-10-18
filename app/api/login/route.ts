import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { DEMO_EMAIL, DEMO_LOGIN_ENABLED, DEMO_PASSWORD } from "@/config/auth";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
} from "@/lib/session";

function matches(input: string, expected: string | undefined): boolean {
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
    password?: unknown;
  } | null;

  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  const envOk =
    matches(email.toLowerCase(), process.env.TEMP_LOGIN_EMAIL?.toLowerCase()) &&
    matches(password, process.env.TEMP_LOGIN_PASSWORD);
  // Open demo access (credentials are displayed on the login page) until Firebase Auth is connected.
  const demoOk = DEMO_LOGIN_ENABLED && matches(email.toLowerCase(), DEMO_EMAIL) && matches(password, DEMO_PASSWORD);
  const ok = envOk || demoOk;

  if (!ok) {
    return NextResponse.json(
      { error: "Correo o contraseña incorrectos." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
