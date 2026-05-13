import Link from "next/link";
import { Bookmark, MapPin, Ticket } from "lucide-react";
import type { Spot } from "@/types";
import { spotCategoryLabels } from "@/lib/labels";
import { CTAButton } from "@/components/CTAButton";
import { Tag } from "@/components/Tag";

export function SpotCard({ spot }: { spot: Spot }) {
  return (
    <article className="panel overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-green/25 via-white to-yellow/45 p-4">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-green/50 bg-white/55 text-sm font-black text-muted">
          {spotCategoryLabels[spot.category]}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Tag tone="yellow">{spotCategoryLabels[spot.category]}</Tag>
          {spot.hasCoupon && <Tag tone="coral"><Ticket size={13} />クーポンあり</Tag>}
        </div>
        <h3 className="text-lg font-black">{spot.name}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm font-bold text-muted"><MapPin size={15} />{spot.area}</p>
        <p className="mt-3 line-clamp-3 leading-7 text-muted">{spot.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-muted">
          <span>{spot.indoorAllowed ? "店内OK" : "屋外中心"}</span>
          <span>{spot.terraceAllowed ? "テラスOK" : "テラス情報なし"}</span>
          <span>{spot.smallDogAllowed ? "小型犬OK" : "小型犬要確認"}</span>
          <span>{spot.largeDogAllowed ? "大型犬OK" : "大型犬要確認"}</span>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm font-bold text-muted">
          <span>体験投稿 {spot.reviewCount}件</span>
          <span className="flex items-center gap-1"><Bookmark size={15} />{spot.saveCount}</span>
        </div>
        <div className="mt-5">
          <CTAButton href={`/spots/${spot.id}`} variant="secondary">詳細を見る</CTAButton>
        </div>
      </div>
    </article>
  );
}
