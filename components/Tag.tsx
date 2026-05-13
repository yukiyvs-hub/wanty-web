import { clsx } from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "orange" | "yellow" | "green" | "coral" | "plain";
};

export function Tag({ children, tone = "plain" }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold",
        tone === "orange" && "border-orange/30 bg-orange/10 text-orange",
        tone === "yellow" && "border-yellow/40 bg-yellow/20 text-ink",
        tone === "green" && "border-green/40 bg-green/15 text-ink",
        tone === "coral" && "border-coral/30 bg-coral/10 text-coral",
        tone === "plain" && "border-line bg-white text-muted"
      )}
    >
      {children}
    </span>
  );
}
