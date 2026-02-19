import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

function HomePage() {
  usePageTitle("Home");

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-gray-900 dark:text-gray-100">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">hi, i'm arlan</h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            i like building things, and i'm currently helping build{" "}
            <a
              href="https://www.linkedin.com/company/viralmoment"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-700 underline"
            >
              ViralMoment
            </a>
            .
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            in my free time, i enjoy learning, cycling, and working on personal
            projects.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
            i've recently gotten into reading. currently reading Haruki
            Murakami's work.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View All Content →
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;
