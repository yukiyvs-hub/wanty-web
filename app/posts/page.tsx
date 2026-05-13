import { FilterBar } from "@/components/FilterBar";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { posts } from "@/data/posts";

export default function PostsPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle eyebrow="体験投稿" title="ペットとの暮らし・おでかけ体験を見る" description="写真投稿、動画投稿、日記、相談、体験レビューから、うちの子に近い体験を探せます。" />
      <FilterBar filters={["すべて", "犬種", "地域", "写真投稿", "動画投稿", "日記", "おでかけ", "旅行", "カフェ", "ドッグラン", "宿泊", "悩み相談", "商品レビュー"]} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
