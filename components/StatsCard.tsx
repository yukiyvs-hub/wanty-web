import type { ReactNode } from "react";

export function StatsCard({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="panel p-5">
      <div className="mb-3 text-orange">{icon}</div>
      <p className="text-2xl font-black">{value}</p>
      <p className="mt-1 text-sm font-bold text-muted">{label}</p>
    </div>
  );
}
