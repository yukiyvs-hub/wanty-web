import { notFound } from "next/navigation";
import { CommunityCard } from "@/components/CommunityCard";
import { CTAButton } from "@/components/CTAButton";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Tag } from "@/components/Tag";
import { communities } from "@/data/communities";
import { posts } from "@/data/posts";
import { communityCategoryLabels } from "@/lib/labels";

export function generateStaticParams() {
  return communities.map((community) => ({ id: community.id }));
}

export default function CommunityDetailPage({ params }: { params: { id: string } }) {
  const community = communities.find((item) => item.id === params.id);
  if (!community) notFound();
  const related = posts.filter((post) => post.tags.some((tag) => community.tags.includes(tag)) || post.title.includes(community.name.slice(0, 2))).slice(0, 5);
  const list = related.length ? related : posts.slice(0, 5);

  return (
    <section className="container-page py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="panel p-6">
            <Tag tone="green">{communityCategoryLabels[community.category]}</Tag>
            <h1 className="mt-4 text-3xl font-black sm:text-4xl">{community.name}</h1>
            <p className="mt-4 leading-8 text-muted">{community.description}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-muted">
              <span>{community.memberCount.toLocaleString()}人が参加</span>
              <span>{community.postCount.toLocaleString()}件の投稿</span>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/mypage">参加してみる</CTAButton>
              <CTAButton href="/posts" variant="secondary">体験投稿を見る</CTAButton>
            </div>
          </div>
          <div className="panel mt-6 p-5">
            <p className="text-sm font-bold text-orange">投稿してみる</p>
            <p className="mt-2 text-lg font-black">今日の暮らし、おでかけ、相談を共有</p>
            <div className="mt-4 rounded-lg border border-line bg-cream p-4 text-muted">例: 初めて行ったカフェの雰囲気、犬見知りの子が安心できた工夫など</div>
          </div>
          <SectionTitle eyebrow="投稿" title="コミュニティの投稿" />
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
        <aside className="space-y-5">
          <div className="panel p-5">
            <h2 className="font-black">人気トピック</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {community.tags.concat(["はじめて", "安心", "おすすめ"]).map((tag) => <Tag key={tag} tone="yellow">{tag}</Tag>)}
            </div>
          </div>
          <div>
            <SectionTitle title="関連コミュニティ" />
            <div className="space-y-4">
              {communities.filter((item) => item.id !== community.id).slice(0, 2).map((item) => <CommunityCard key={item.id} community={item} />)}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
