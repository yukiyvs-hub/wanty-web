import { Building2, Camera, HeartHandshake, MapPinned, PawPrint, UserRound } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { BusinessPlanCard } from "@/components/BusinessPlanCard";
import { CommunityCard } from "@/components/CommunityCard";
import { CTAButton } from "@/components/CTAButton";
import { HeroSection } from "@/components/HeroSection";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SpotCard } from "@/components/SpotCard";
import { communities } from "@/data/communities";
import { posts } from "@/data/posts";
import { spots } from "@/data/spots";
import { articles } from "@/data/articles";

const features = [
  { title: "コミュニティに参加する", text: "犬種・地域・悩み・目的ごとに、合う場所を探せます。", icon: <PawPrint size={24} /> },
  { title: "体験投稿を見る", text: "写真・動画・日記・相談・レビューでリアルな声を確認。", icon: <Camera size={24} /> },
  { title: "スポットを探す", text: "店内OK、テラスOK、大型犬OKなど条件で見つける。", icon: <MapPinned size={24} /> },
  { title: "ペットプロフィールを作る", text: "性格や苦手なことから、うちの子に合う情報へ。", icon: <UserRound size={24} /> },
  { title: "同じ悩みの飼い主とつながる", text: "安心して相談できる小さな居場所を増やします。", icon: <HeartHandshake size={24} /> }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container-page py-16">
        <SectionTitle
          eyebrow="できること"
          title="わんてぃでできること"
          description="わんてぃは、ペットオーナーが犬種・地域・悩み・おでかけ目的ごとのコミュニティに参加し、写真・動画・日記・体験レビューを通じて、うちの子に合う人・場所・情報を見つけられるサービスです。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div key={feature.title} className="panel p-5">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-yellow/35 text-orange">{feature.icon}</div>
              <h3 className="font-black">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-lg border border-line bg-white shadow-soft">
          <img src="/images/wanty-community-map.png" alt="犬種、地域、悩み、体験がつながるイラスト" className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="container-page py-10">
        <SectionTitle eyebrow="コミュニティ" title="人気コミュニティ" description="犬種別、地域別、悩み別、おでかけ目的別に、入りやすい場所から見つけられます。" action={<CTAButton href="/communities" variant="secondary">コミュニティを見る</CTAButton>} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {communities.slice(0, 4).map((community) => <CommunityCard key={community.id} community={community} />)}
        </div>
      </section>
      <section className="container-page py-10">
        <SectionTitle eyebrow="体験投稿" title="最近の体験投稿" description="ペットとの暮らしを記録し、同じ価値観の飼い主さんとつながり、行ってよかった場所や使ってよかったものを共有できます。" action={<CTAButton href="/posts" variant="secondary">体験投稿を見る</CTAButton>} />
        <div className="mb-5 overflow-hidden rounded-lg border border-line bg-white shadow-soft">
          <img src="/images/wanty-ui-cards.png" alt="コミュニティ投稿とスポットカードの手描きイラスト" className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
      <section className="container-page py-10">
        <SectionTitle eyebrow="スポット" title="おすすめスポット" description="カフェ、ドッグラン、宿泊施設、公園、イベントを体験投稿とつなげて確認できます。" action={<CTAButton href="/spots" variant="secondary">スポットを探す</CTAButton>} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {spots.slice(0, 3).map((spot) => <SpotCard key={spot.id} spot={spot} />)}
        </div>
      </section>
      <section className="container-page py-10">
        <SectionTitle eyebrow="記事" title="編集部のおすすめ記事" description="旅行、マナー、犬種別の工夫など、ペットとの暮らしに役立つ情報をまとめます。" action={<CTAButton href="/articles" variant="secondary">記事を見る</CTAButton>} />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      </section>
      <section className="container-page py-16">
        <div className="panel grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-orange/10 text-orange"><Building2 size={26} /></div>
            <h2 className="text-2xl font-black sm:text-3xl">ペットオーナーの体験投稿を、施設や商品の信頼につなげる。</h2>
            <p className="mt-4 leading-8 text-muted">広告枠ではなく、飼い主の体験を起点にした集客支援。施設掲載、クーポン掲載、体験投稿募集、PR記事、特集掲載まで相談できます。</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/business">施設掲載を相談する</CTAButton>
              <CTAButton href="/business" variant="secondary">掲載メニューを見る</CTAButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-line bg-white shadow-soft sm:col-span-2">
              <img src="/images/wanty-service-loop.png" alt="投稿、商品、スポット、旅行がつながるイラスト" className="h-full w-full object-cover" />
            </div>
            <BusinessPlanCard title="施設掲載" description="基本情報と体験投稿をつなげ、行ってみたい気持ちを育てます。" items={["無料施設ページ", "クーポン掲載", "公式サイト導線"]} />
            <BusinessPlanCard title="体験投稿企画" description="飼い主のリアルな声を、信頼できるコンテンツとして活用します。" items={["体験投稿募集", "PR記事", "エリア特集"]} />
          </div>
        </div>
      </section>
    </>
  );
}
