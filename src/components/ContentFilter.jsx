const categories = ["All", "Projects", "Writing", "Reading", "Hobbies"];

export default function ContentFilter({ onFilterChange, activeFilter }) {
  return (
    <div className="flex flex-wrap items-center gap-1 rounded-lg border border-line bg-ink-raised p-1">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`font-mono text-[12px] rounded-md px-3 py-1.5 transition-colors ${
            activeFilter === category
              ? "bg-zinc-100 text-zinc-900 font-medium"
              : "text-zinc-500 hover:text-zinc-200"
          }`}
        >
          {category.toLowerCase()}
        </button>
      ))}
    </div>
  );
}
