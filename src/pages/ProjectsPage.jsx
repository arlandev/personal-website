import { useState, useMemo } from "react";
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
    <div className="min-h-screen py-12 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            All Content
          </h1>
          <ContentFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content, index) => (
            <ContentCard key={content.id} content={content} index={index} />
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No content found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
