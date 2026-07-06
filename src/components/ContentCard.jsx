import { motion } from "framer-motion";

const categoryColors = {
  Projects: "text-accent border-accent/30",
  Writing: "text-purple-400 border-purple-400/30",
  Reading: "text-sky-400 border-sky-400/30",
  Hobbies: "text-orange-400 border-orange-400/30",
};

export default function ContentCard({ content, index }) {
  const {
    title,
    category,
    date,
    location,
    description,
    link,
    image,
    tags,
    author,
    status,
  } = content;

  const card = (
    <div className="group relative h-full rounded-lg border border-line bg-ink-raised p-6 transition-colors duration-200 hover:border-zinc-600">
      <div className="flex flex-col gap-3">
        {/* Category and Date */}
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[11px] border rounded px-2 py-0.5 ${
              categoryColors[category] || "text-zinc-400 border-line"
            }`}
          >
            {category.toLowerCase()}
          </span>
          {date && (
            <span className="font-mono text-[11px] text-zinc-600">{date}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Location (for hobbies) */}
        {location && (
          <p className="font-mono text-xs text-zinc-500">{location}</p>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}

        {/* Author (for reading) */}
        {author && (
          <p className="text-sm text-zinc-500 italic">{author}</p>
        )}

        {/* Status (for reading) */}
        {status && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            {status}
          </span>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-zinc-500 border border-line rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mt-3 overflow-hidden rounded-md border border-line">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* External link indicator */}
      {link && (
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {card}
        </a>
      ) : (
        card
      )}
    </motion.div>
  );
}
