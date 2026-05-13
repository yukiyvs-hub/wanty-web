import Link from "next/link";
import { PawPrint } from "lucide-react";

const links = ["サービス概要", "コミュニティ", "スポット", "記事", "事業者向け", "利用規約", "プライバシーポリシー", "お問い合わせ"];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white">
      <div className="container-page grid gap-8 py-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2 text-xl font-black">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow/45 text-orange"><PawPrint size={22} /></span>
            <span className="font-hand text-2xl">わんてぃ</span>
          </Link>
          <p className="max-w-md leading-7 text-muted">
            ペットオーナーが犬種・地域・悩み・おでかけ目的ごとのコミュニティに参加し、うちの子に合う人・場所・情報を見つけられるサービスです。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-muted sm:grid-cols-4">
          {links.map((link) => (
            <Link key={link} href={link === "コミュニティ" ? "/communities" : link === "スポット" ? "/spots" : link === "記事" ? "/articles" : link === "事業者向け" ? "/business" : "/"} className="hover:text-orange">
              {link}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs font-bold text-muted">© 2026 わんてぃ</div>
    </footer>
  );
}
