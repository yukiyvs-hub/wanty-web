import Link from "next/link";
import { MessageCircle, Users } from "lucide-react";
import type { Community } from "@/types";
import { communityCategoryLabels } from "@/lib/labels";
import { CTAButton } from "@/components/CTAButton";
import { Tag } from "@/components/Tag";

export function CommunityCard({ community }: { community: Community }) {
  return (
    <article className="panel flex h-full flex-col p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <Tag tone="green">{communityCategoryLabels[community.category]}</Tag>
          <h3 className="mt-3 text-xl font-black text-ink">{community.name}</h3>
        </div>
      </div>
      <p className="mb-4 flex-1 leading-7 text-muted">{community.description}</p>
      <div className="mb-4 grid grid-cols-2 gap-3 text-sm font-bold text-muted">
        <span className="flex items-center gap-2"><Users size={16} />{community.memberCount.toLocaleString()}人</span>
        <span className="flex items-center gap-2"><MessageCircle size={16} />{community.postCount.toLocaleString()}件</span>
      </div>
      <p className="mb-4 rounded-lg bg-cream p-3 text-sm leading-6 text-ink">最近: {community.latestPost}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {community.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <CTAButton href={`/communities/${community.id}`} variant="secondary">参加してみる</CTAButton>
    </article>
  );
}
