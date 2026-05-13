import { FilterBar } from "@/components/FilterBar";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotCard } from "@/components/SpotCard";
import { spots } from "@/data/spots";

export default function SpotsPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle eyebrow="スポット" title="ペット可施設・イベント情報を探す" description="体験投稿や条件を見ながら、行ってみたい場所を保存できます。" />
      <FilterBar filters={["すべて", "カフェ", "ドッグラン", "宿泊施設", "観光施設", "公園", "道の駅", "イベント", "ペット用品店"]} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot) => <SpotCard key={spot.id} spot={spot} />)}
      </div>
    </section>
  );
}
