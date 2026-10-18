import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/api-auth";
import { addLead, setLeadStatus, type LeadStatus } from "@/lib/store";

const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// Public: the website contact form posts here.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });

  // Honeypot: a hidden field real visitors never fill. Pretend success so bots move on.
  if (text(body.website, 100)) return NextResponse.json({ ok: true });

  const name = text(body.name, 120);
  const email = text(body.email, 160);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ingresa tu nombre y un correo válido." }, { status: 400 });
  }

  await addLead({ name, email, phone: text(body.phone, 40), type: text(body.type, 40), message: text(body.message, 2000) });
  return NextResponse.json({ ok: true });
}

// Dashboard only: change a lead's status.
export async function PATCH(request: Request) {
  if (!(await isAuthed(request))) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { id?: unknown; status?: unknown } | null;
  const statuses: LeadStatus[] = ["Nuevo", "Contactado", "Cerrado"];
  if (typeof body?.id !== "string" || !statuses.includes(body.status as LeadStatus)) {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
  const ok = await setLeadStatus(body.id, body.status as LeadStatus);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 });
}
