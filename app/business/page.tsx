import { Building2, Megaphone, MessageSquareHeart, Newspaper, Ticket, Users } from "lucide-react";
import { BusinessPlanCard } from "@/components/BusinessPlanCard";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";

const plans = [
  { title: "無料施設ページ", description: "施設の基本情報、ペット同伴条件、注意点をわかりやすく掲載。", items: ["店内OK・テラスOK表示", "大型犬・小型犬条件", "体験投稿との接続"] },
  { title: "クーポン掲載", description: "来訪検討を後押しする軽い特典を表示。", items: ["クーポンを見る導線", "保存数の可視化", "スポット詳細に掲載"] },
  { title: "PR記事・特集掲載", description: "施設や地域の魅力を、ペットオーナー目線の記事として届けます。", items: ["施設紹介", "エリア特集", "旅プラン"] },
  { title: "体験投稿募集企画", description: "飼い主さんのリアルな声を集め、信頼につながるコンテンツに。", items: ["投稿テーマ設計", "コミュニティ告知", "レポート活用"] },
  { title: "コミュニティ協賛", description: "犬種、地域、悩み別コミュニティと自然につながる協賛枠。", items: ["地域コミュニティ", "イベント告知", "マナー啓発"] },
  { title: "ブランドタイアップ", description: "商品レビューや使ってよかった体験から、生活に近い接点を作ります。", items: ["商品レビュー", "利用シーン提案", "編集部記事"] }
];

export default function BusinessPage() {
  return (
    <section className="container-page py-12">
      <div className="panel grid gap-8 p-6 lg:grid-cols-[1fr_0.8fr] lg:p-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-sm font-black text-orange">
            <Building2 size={18} />事業者向け
          </div>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">ペットオーナーの体験投稿を、施設や商品の信頼につなげる。</h1>
          <p className="mt-5 leading-8 text-muted">わんてぃは広告枠を売るだけのサービスではありません。飼い主の体験投稿、コミュニティ、スポット情報を組み合わせ、ペットと暮らす人が安心して情報収集できる接点をつくります。</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/business">施設掲載を相談する</CTAButton>
            <CTAButton href="/business" variant="secondary">体験投稿企画を相談する</CTAButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { icon: <Users size={22} />, title: "対象", text: "カフェ、宿、観光施設、自治体、ペットブランド" },
            { icon: <MessageSquareHeart size={22} />, title: "利用シーン", text: "施設掲載、地域回遊、商品レビュー、イベント告知" }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-line bg-cream p-5">
              <div className="mb-3 text-orange">{item.icon}</div>
              <h2 className="font-black">{item.title}</h2>
              <p className="mt-2 leading-7 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="py-14">
        <SectionTitle eyebrow="できること" title="掲載メニュー" description="情報収集、保存、体験投稿、問い合わせにつながるメニューです。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => <BusinessPlanCard key={plan.title} {...plan} />)}
        </div>
      </section>
      <section className="panel p-6 lg:p-8">
        <SectionTitle eyebrow="問い合わせ" title="体験投稿を活用した企画を相談する" description="施設掲載、クーポン掲載、PR記事、特設ページ、エリア特集、コミュニティ協賛まで、まずは掲載内容を相談できます。" />
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["施設掲載", <Building2 key="i" size={24} />],
            ["クーポン掲載", <Ticket key="i" size={24} />],
            ["PR記事", <Newspaper key="i" size={24} />],
            ["特集企画", <Megaphone key="i" size={24} />]
          ].map(([label, icon]) => (
            <div key={String(label)} className="rounded-lg border border-line bg-white p-5">
              <div className="mb-3 text-orange">{icon}</div>
              <p className="font-black">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <CTAButton href="/business">施設掲載を相談する</CTAButton>
        </div>
      </section>
    </section>
  );
}
