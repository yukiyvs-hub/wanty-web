import { ArticleCard } from "@/components/ArticleCard";
import { FilterBar } from "@/components/FilterBar";
import { SectionTitle } from "@/components/SectionTitle";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle eyebrow="記事" title="暮らしとおでかけに役立つ記事" description="エリア特集、旅プラン、犬種別特集、悩み別記事、施設紹介、商品レビュー、マナー、イベント情報を掲載します。" />
      <FilterBar filters={["すべて", "エリア特集", "旅プラン", "犬種別特集", "悩み別記事", "施設紹介", "商品レビュー", "マナー", "イベント"]} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </section>
  );
}
