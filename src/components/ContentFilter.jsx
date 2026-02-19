import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Projects", "Writing", "Reading", "Hobbies"];

export default function ContentFilter({ onFilterChange, activeFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800 transition-colors"
      >
        <span>FILTER</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white dark:bg-neutral-900 dark:border-neutral-700 shadow-lg z-50"
          >
            <div className="py-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onFilterChange(category);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeFilter === category
                      ? "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100 font-medium"
                      : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-neutral-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

