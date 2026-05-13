import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description, action }: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-2 text-sm font-bold text-orange">{eyebrow}</p>}
        <h2 className="text-2xl font-black tracking-normal text-ink sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 leading-7 text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
