import { CTAButton } from "@/components/CTAButton";
import { Tag } from "@/components/Tag";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-black text-orange">
            <span className="font-hand text-xl text-ink">わんてぃ</span>
            ペットオーナー専用コミュニティ
          </div>
          <h1 className="font-hand text-5xl leading-[1.25] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            うちの子に合う、<br />
            人と場所が<br className="sm:hidden" />見つかる。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            わんてぃは、ペットとの暮らし・おでかけ・悩みを共有できる、ペットオーナー専用のコミュニティサービスです。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/mypage">はじめてみる</CTAButton>
            <CTAButton href="/communities" variant="secondary">コミュニティを見る</CTAButton>
            <CTAButton href="/posts" variant="ghost">体験投稿を見る</CTAButton>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-line bg-cream shadow-soft">
            <img
              src="/images/wanty-hero-family.png"
              alt="ペットオーナーと犬たちが集まる手描きイラスト"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-2 top-8 hidden rounded-lg border border-line bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-bold text-muted">最近の投稿</p>
            <p className="mt-1 font-black">雨の日に助かった室内スポット</p>
          </div>
          <div className="absolute -right-2 bottom-12 hidden max-w-48 rounded-lg border border-line bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-bold text-muted">人気コミュニティ</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Tag tone="yellow">柴犬部</Tag>
              <Tag tone="green">東京カフェ</Tag>
              <Tag tone="coral">犬見知り相談</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
