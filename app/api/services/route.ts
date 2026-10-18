import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/api-auth";
import { addService, deleteService, type ServiceStatus } from "@/lib/store";

const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

// Dashboard only: create a service.
export async function POST(request: Request) {
  if (!(await isAuthed(request))) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const name = text(body?.name, 120);
  if (!name) return NextResponse.json({ error: "El nombre es obligatorio." }, { status: 400 });

  const status: ServiceStatus = body?.status === "Borrador" ? "Borrador" : "Activo";
  const service = await addService({ name, category: text(body?.category, 60) || "General", description: text(body?.description, 600), status });
  return NextResponse.json({ ok: true, service });
}

// Dashboard only: delete a service by id.
export async function DELETE(request: Request) {
  if (!(await isAuthed(request))) return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { id?: unknown } | null;
  if (typeof body?.id !== "string") return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  const ok = await deleteService(body.id);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 });
}
