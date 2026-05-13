type Props = {
  filters: string[];
};

export function FilterBar({ filters }: Props) {
  return (
    <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-bold ${index === 0 ? "border-orange bg-orange text-white" : "border-line bg-white text-muted"}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
