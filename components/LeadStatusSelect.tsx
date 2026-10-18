"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LeadStatus } from "@/lib/store";

const statuses: LeadStatus[] = ["Nuevo", "Contactado", "Cerrado"];

// Lets the dashboard change a lead's status; saves through /api/leads and refreshes the table.
export default function LeadStatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [saving, setSaving] = useState(false);

  async function change(next: LeadStatus) {
    const previous = value;
    setValue(next);
    setSaving(true);
    const res = await fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: next }),
    }).catch(() => null);
    setSaving(false);
    if (res?.ok) router.refresh();
    else setValue(previous);
  }

  return (
    <select
      value={value}
      disabled={saving}
      onChange={(e) => change(e.target.value as LeadStatus)}
      aria-label="Estado del lead"
      className="rounded-full border border-fg/20 bg-transparent px-3 py-1 text-xs text-fg focus:border-fg/50 focus:outline-none"
    >
      {statuses.map((s) => (
        <option key={s} value={s} className="bg-canvas text-fg">
          {s}
        </option>
      ))}
    </select>
  );
}
