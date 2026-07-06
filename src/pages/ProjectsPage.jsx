import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";
import ContentCard from "../components/ContentCard";
import ContentFilter from "../components/ContentFilter";
import { contentItems } from "../data/content";

function ProjectsPage() {
  usePageTitle("Projects");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredContent = useMemo(() => {
    if (activeFilter === "All") {
      return contentItems;
    }
    return contentItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <motion.div
      className="min-h-screen py-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="font-mono text-[13px] tracking-widest uppercase text-zinc-500 mb-3">
          index — {filteredContent.length}{" "}
          {filteredContent.length === 1 ? "entry" : "entries"}
        </p>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
            Work &amp; Projects
          </h1>
          <ContentFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredContent.map((content, index) => (
            <ContentCard key={content.id} content={content} index={index} />
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="border border-dashed border-line rounded-lg text-center py-16">
            <p className="font-mono text-sm text-zinc-500">
              // nothing here yet
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
