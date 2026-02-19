import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export default function ContentCard({ content, index }) {
  const {
    id,
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

  const categoryColors = {
    Projects: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200",
    Writing: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
    Reading: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
    Hobbies: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200",
  };

  const CardContent = () => (
    <div className="group relative h-full rounded-lg border border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:hover:border-neutral-700">
      <div className="flex flex-col gap-3">
        {/* Category and Date */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
              categoryColors[category] || "bg-gray-100 text-gray-800"
            }`}
          >
            {category}
          </span>
          {date && (
            <span className="text-xs text-gray-500">{date}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200">
          {title}
        </h3>

        {/* Location (for hobbies) */}
        {location && <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>}

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}

        {/* Author (for reading) */}
        {author && <p className="text-sm text-gray-500 dark:text-gray-400 italic">{author}</p>}

        {/* Status (for reading) */}
        {status && (
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
            {status}
          </span>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mt-4 overflow-hidden rounded-md">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </div>

      {/* External link indicator */}
      {link && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
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

  if (link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <CardContent />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <CardContent />
    </motion.div>
  );
}

