import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CTAButton({ href, children, variant = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5",
        variant === "primary" && "bg-orange text-white shadow-soft",
        variant === "secondary" && "border border-line bg-white text-ink shadow-soft",
        variant === "ghost" && "bg-yellow/30 text-ink"
      )}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
