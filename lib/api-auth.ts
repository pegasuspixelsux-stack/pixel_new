import { SESSION_COOKIE, isValidSessionToken } from "@/lib/session";

/** True when the request carries a valid dashboard session cookie. */
export async function isAuthed(request: Request): Promise<boolean> {
  const cookie = request.headers.get("cookie") ?? "";
  const match = cookie.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${SESSION_COOKIE}=`));
  return isValidSessionToken(match?.slice(SESSION_COOKIE.length + 1));
}
