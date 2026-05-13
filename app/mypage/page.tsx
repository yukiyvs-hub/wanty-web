import { Bookmark, Heart, MessageCircle, Users } from "lucide-react";
import { CommunityCard } from "@/components/CommunityCard";
import { PostCard } from "@/components/PostCard";
import { ProfileCard } from "@/components/ProfileCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotCard } from "@/components/SpotCard";
import { StatsCard } from "@/components/StatsCard";
import { communities } from "@/data/communities";
import { pets } from "@/data/pets";
import { posts } from "@/data/posts";
import { spots } from "@/data/spots";
import { users } from "@/data/users";

export default function MyPage() {
  const user = users[0];
  const pet = pets[0];

  return (
    <section className="container-page py-12">
      <SectionTitle eyebrow="マイページ" title="プロフィールと保存した情報" description="うちの子のプロフィール、参加コミュニティ、投稿履歴、保存した投稿・スポットをまとめて確認できます。" />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          <ProfileCard user={user} pet={pet} />
          <div>
            <SectionTitle title="参加コミュニティ" />
            <div className="grid gap-5 md:grid-cols-2">
              {communities.slice(0, 2).map((community) => <CommunityCard key={community.id} community={community} />)}
            </div>
          </div>
          <div>
            <SectionTitle title="投稿履歴" />
            <div className="grid gap-5 md:grid-cols-2">
              {posts.slice(0, 2).map((post) => <PostCard key={post.id} post={post} />)}
            </div>
          </div>
          <div>
            <SectionTitle title="保存したスポット" />
            <div className="grid gap-5 md:grid-cols-2">
              {spots.slice(0, 2).map((spot) => <SpotCard key={spot.id} spot={spot} />)}
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <StatsCard label="フォロー" value={String(user.following)} icon={<Users size={24} />} />
          <StatsCard label="友人・フォロワー" value={String(user.followers)} icon={<Heart size={24} />} />
          <StatsCard label="保存した投稿" value="24" icon={<Bookmark size={24} />} />
          <StatsCard label="コメントした相談" value="18" icon={<MessageCircle size={24} />} />
        </aside>
      </div>
    </section>
  );
}
