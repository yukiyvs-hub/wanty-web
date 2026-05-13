import { MapPin, UserRound } from "lucide-react";
import type { Pet, User } from "@/types";
import { Tag } from "@/components/Tag";

export function ProfileCard({ user, pet }: { user: User; pet: Pet }) {
  return (
    <section className="panel p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-yellow/35 text-orange">
          <UserRound size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-black">{user.name}</h2>
          <p className="mt-1 flex items-center gap-1 text-sm font-bold text-muted"><MapPin size={15} />{user.area}</p>
          <p className="mt-3 leading-7 text-muted">{user.bio}</p>
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-cream p-5">
        <p className="text-sm font-bold text-orange">うちの子プロフィール</p>
        <h3 className="mt-2 text-xl font-black">{pet.name}</h3>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div><dt className="font-bold text-muted">犬種</dt><dd>{pet.breed}</dd></div>
          <div><dt className="font-bold text-muted">年齢</dt><dd>{pet.age}</dd></div>
          <div><dt className="font-bold text-muted">性格</dt><dd>{pet.personality}</dd></div>
          <div><dt className="font-bold text-muted">よく行くエリア</dt><dd>{pet.favoriteAreas.join("、")}</dd></div>
        </dl>
        <div className="mt-4 flex flex-wrap gap-2">
          {pet.likes.map((like) => <Tag key={like} tone="green">{like}</Tag>)}
          {pet.dislikes.map((item) => <Tag key={item} tone="coral">苦手: {item}</Tag>)}
        </div>
      </div>
    </section>
  );
}
