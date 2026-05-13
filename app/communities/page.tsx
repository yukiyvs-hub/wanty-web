import { CommunityCard } from "@/components/CommunityCard";
import { FilterBar } from "@/components/FilterBar";
import { SectionTitle } from "@/components/SectionTitle";
import { communities } from "@/data/communities";

export default function CommunitiesPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle eyebrow="コミュニティ" title="うちの子に合うコミュニティを探す" description="犬種・地域・悩み・おでかけ目的別に、参加しやすいコミュニティを見つけられます。" />
      <FilterBar filters={["すべて", "犬種別", "地域別", "悩み別", "おでかけ目的別", "イベント別"]} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => <CommunityCard key={community.id} community={community} />)}
      </div>
    </section>
  );
}
