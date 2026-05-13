"use client";

import Link from "next/link";
import { Menu, PawPrint, X } from "lucide-react";
import { useState } from "react";
import { CTAButton } from "@/components/CTAButton";

const nav = [
  { href: "/communities", label: "コミュニティ" },
  { href: "/posts", label: "体験投稿" },
  { href: "/spots", label: "スポット" },
  { href: "/articles", label: "記事" },
  { href: "/business", label: "事業者向け" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-black text-ink">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow/45 text-orange">
            <PawPrint size={22} />
          </span>
          <span className="font-hand text-2xl">わんてぃ</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-muted lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-orange">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/mypage" className="text-sm font-bold text-muted hover:text-orange">
            ログイン
          </Link>
          <CTAButton href="/mypage">はじめる</CTAButton>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white lg:hidden" onClick={() => setOpen(!open)} aria-label="メニュー">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-bold text-ink hover:bg-cream">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <CTAButton href="/mypage" variant="secondary">ログイン</CTAButton>
              <CTAButton href="/mypage">はじめる</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
