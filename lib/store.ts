// lib/store.ts
// Temporary data store for the dashboard (leads collected from the website form, and the services list).
// It writes a JSON file (./.data locally, the OS temp dir on Vercel) and falls back to memory when the disk is
// not writable. Data on a serverless host is NOT durable: replace this module with Firebase when it is ready.

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type LeadStatus = "Nuevo" | "Contactado" | "Cerrado";
export interface StoredLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
}

export type ServiceStatus = "Activo" | "Borrador";
export interface StoredService {
  id: string;
  name: string;
  category: string;
  description: string;
  status: ServiceStatus;
  createdAt: string;
}

interface Data {
  leads: StoredLead[];
  services: StoredService[];
}

const FILE = path.join(process.env.VERCEL ? os.tmpdir() : path.join(process.cwd(), ".data"), "pegasus-store.json");
const seedDate = "2026-10-01T00:00:00.000Z";

function seed(): Data {
  const services: Array<[string, string, string]> = [
    ["DoorDash: Registro y Optimización", "DoorDash", "Registro llave en mano para nuevos comerciantes y auditoría de menú para quienes ya venden."],
    ["Sitio web y catálogo digital", "Web", "Presencia web profesional y catálogos digitales listos para vender."],
    ["Captación de leads y automatización", "Automatización", "Formularios, calificación y seguimiento automático de prospectos."],
    ["Sistemas de gestión y POS", "Sistemas", "Punto de venta y gestión centralizada de la operación."],
  ];
  return {
    leads: [],
    services: services.map(([name, category, description], i) => ({
      id: `svc-seed-${i + 1}`,
      name,
      category,
      description,
      status: "Activo" as const,
      createdAt: seedDate,
    })),
  };
}

// In-memory copy, shared across requests in the same server instance.
const globalForStore = globalThis as unknown as { __pegasusStore?: Data };

async function load(): Promise<Data> {
  if (globalForStore.__pegasusStore) return globalForStore.__pegasusStore;
  let data: Data;
  try {
    data = JSON.parse(await fs.readFile(FILE, "utf8")) as Data;
  } catch {
    data = seed();
  }
  globalForStore.__pegasusStore = data;
  return data;
}

async function save(data: Data): Promise<void> {
  globalForStore.__pegasusStore = data;
  try {
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf8");
  } catch {
    // Read-only disk: keep the data in memory only.
  }
}

export async function listLeads(): Promise<StoredLead[]> {
  return [...(await load()).leads].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addLead(input: Pick<StoredLead, "name" | "email" | "phone" | "type" | "message">): Promise<StoredLead> {
  const data = await load();
  const lead: StoredLead = { ...input, id: randomUUID(), status: "Nuevo", createdAt: new Date().toISOString() };
  await save({ ...data, leads: [lead, ...data.leads] });
  return lead;
}

export async function setLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  const data = await load();
  if (!data.leads.some((l) => l.id === id)) return false;
  await save({ ...data, leads: data.leads.map((l) => (l.id === id ? { ...l, status } : l)) });
  return true;
}

export async function listServices(): Promise<StoredService[]> {
  return [...(await load()).services].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addService(input: Pick<StoredService, "name" | "category" | "description" | "status">): Promise<StoredService> {
  const data = await load();
  const service: StoredService = { ...input, id: randomUUID(), createdAt: new Date().toISOString() };
  await save({ ...data, services: [service, ...data.services] });
  return service;
}

export async function deleteService(id: string): Promise<boolean> {
  const data = await load();
  if (!data.services.some((s) => s.id === id)) return false;
  await save({ ...data, services: data.services.filter((s) => s.id !== id) });
  return true;
}
