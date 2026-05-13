import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export function BusinessPlanCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <article className="panel flex h-full flex-col p-6">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{description}</p>
      <ul className="mt-5 space-y-3 text-sm font-bold text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2"><CheckCircle2 className="shrink-0 text-green" size={18} />{item}</li>
        ))}
      </ul>
      <div className="mt-6">
        <CTAButton href="/business" variant="secondary">掲載メニューを見る</CTAButton>
      </div>
    </article>
  );
}
