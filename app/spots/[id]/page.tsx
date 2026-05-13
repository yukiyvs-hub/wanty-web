import { Bookmark, ExternalLink, Heart, Mail, MapPin, Ticket } from "lucide-react";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/CTAButton";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotCard } from "@/components/SpotCard";
import { Tag } from "@/components/Tag";
import { posts } from "@/data/posts";
import { spots } from "@/data/spots";
import { spotCategoryLabels } from "@/lib/labels";

export function generateStaticParams() {
  return spots.map((spot) => ({ id: spot.id }));
}

export default function SpotDetailPage({ params }: { params: { id: string } }) {
  const spot = spots.find((item) => item.id === params.id);
  if (!spot) notFound();
  const relatedPosts = posts.filter((post) => post.relatedSpotId === spot.id);
  const nearSpots = spots.filter((item) => item.id !== spot.id).slice(0, 3);

  return (
    <section className="container-page py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="panel overflow-hidden">
            <div className="h-60 bg-gradient-to-br from-yellow/45 via-white to-green/25 p-5">
              <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-orange/35 bg-white/55 font-hand text-4xl text-orange">わんてぃ spot</div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <Tag tone="yellow">{spotCategoryLabels[spot.category]}</Tag>
                {spot.hasCoupon && <Tag tone="coral">クーポンあり</Tag>}
              </div>
              <h1 className="text-3xl font-black sm:text-4xl">{spot.name}</h1>
              <p className="mt-3 flex items-center gap-1 font-bold text-muted"><MapPin size={17} />{spot.area}</p>
              <p className="mt-5 leading-8 text-muted">{spot.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["店内OK: " + (spot.indoorAllowed ? "あり" : "要確認"), "テラスOK: " + (spot.terraceAllowed ? "あり" : "要確認"), "小型犬: " + (spot.smallDogAllowed ? "OK" : "要確認"), "大型犬: " + (spot.largeDogAllowed ? "OK" : "要確認")].map((item) => (
                  <div key={item} className="rounded-lg border border-line bg-cream p-3 text-sm font-bold text-muted">{item}</div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/spots" variant="secondary"><Bookmark size={16} />保存する</CTAButton>
                <CTAButton href="/posts" variant="ghost"><Heart size={16} />行ってみたい</CTAButton>
                <CTAButton href="/posts">体験投稿を見る</CTAButton>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="panel p-5">
              <h2 className="font-black">ペット同伴条件</h2>
              <p className="mt-3 leading-7 text-muted">{spot.petPolicy}</p>
            </div>
            <div className="panel p-5">
              <h2 className="font-black">注意点</h2>
              <ul className="mt-3 space-y-2 text-sm font-bold text-muted">
                {spot.notes.map((note) => <li key={note}>・{note}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6 panel p-5">
            <h2 className="font-black">軽い導線</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 font-bold text-muted"><Ticket size={17} />クーポンを見る</button>
              <button className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 font-bold text-muted"><Mail size={17} />施設に問い合わせる</button>
              <button className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 font-bold text-muted"><ExternalLink size={17} />公式サイトを見る</button>
            </div>
          </div>
          <SectionTitle eyebrow="体験投稿" title="このスポットの体験投稿" />
          <div className="grid gap-5 md:grid-cols-2">
            {(relatedPosts.length ? relatedPosts : posts.slice(0, 2)).map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
        <aside>
          <SectionTitle title="近くのスポット" />
          <div className="space-y-4">
            {nearSpots.map((item) => <SpotCard key={item.id} spot={item} />)}
          </div>
        </aside>
      </div>
    </section>
  );
}
