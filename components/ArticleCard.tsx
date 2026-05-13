import { BookOpen } from "lucide-react";
import type { Article } from "@/types";
import { Tag } from "@/components/Tag";

const categoryLabels: Record<Article["category"], string> = {
  area: "エリア特集",
  travel: "旅プラン",
  breed: "犬種別特集",
  worry: "悩み別記事",
  spot: "施設紹介",
  product: "商品レビュー",
  manner: "マナー",
  event: "イベント"
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="panel p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Tag tone="green">{categoryLabels[article.category]}</Tag>
        <span className="flex items-center gap-1 text-xs font-bold text-muted"><BookOpen size={14} />{article.readTime}</span>
      </div>
      <h3 className="text-lg font-black text-ink">{article.title}</h3>
      <p className="mt-3 leading-7 text-muted">{article.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <button className="mt-5 text-sm font-bold text-orange">記事を読む</button>
    </article>
  );
}
