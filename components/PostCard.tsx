import Link from "next/link";
import { Bookmark, Heart, MessageCircle, PlayCircle } from "lucide-react";
import type { Post } from "@/types";
import { postTypeLabels } from "@/lib/labels";
import { Tag } from "@/components/Tag";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="panel overflow-hidden">
      <div className="h-36 bg-gradient-to-br from-yellow/45 via-white to-green/25 p-4">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-orange/35 bg-white/55">
          {post.type === "video" ? <PlayCircle className="text-orange" size={42} /> : <span className="font-hand text-3xl text-orange">wan</span>}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Tag tone={post.type === "question" ? "coral" : "orange"}>{postTypeLabels[post.type]}</Tag>
          <span className="text-xs font-bold text-muted">{post.area} / {post.petBreed}</span>
        </div>
        <h3 className="text-lg font-black text-ink">{post.title}</h3>
        <p className="mt-2 line-clamp-3 leading-7 text-muted">{post.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-bold text-muted">
          <span>{post.authorName} / {post.petName}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Heart size={16} />{post.likes}</span>
            <span className="flex items-center gap-1"><MessageCircle size={16} />{post.comments}</span>
            <button className="flex items-center gap-1 text-orange"><Bookmark size={16} />保存</button>
          </div>
        </div>
        {post.relatedSpotId && (
          <Link href={`/spots/${post.relatedSpotId}`} className="mt-4 inline-flex text-sm font-bold text-orange">
            関連スポットを見る
          </Link>
        )}
      </div>
    </article>
  );
}
