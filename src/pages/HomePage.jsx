import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { contentItems } from "../data/content";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stats = [
  { value: "500+", unit: "req/s", label: "production API throughput" },
  { value: "$40k", unit: "/mo", label: "recurring revenue generated" },
  { value: "3,000+", unit: "ccu", label: "concurrent users served" },
];

const stack = [
  { name: "python", icon: "/svgs/python.svg" },
  { name: "postgresql", icon: "/svgs/postgresql.svg" },
  { name: "bigquery", icon: "/svgs/bigquery.svg" },
  { name: "airflow", icon: "/svgs/airflow.svg" },
  { name: "dbt", icon: "/svgs/dbt.svg" },
  { name: "docker", icon: "/svgs/docker.svg" },
  { name: "pandas", icon: "/svgs/pandas.svg" },
  { name: "tensorflow", icon: "/svgs/tensorflow.svg" },
  { name: "react", icon: "/svgs/react.svg" },
  { name: "nextjs", icon: "/svgs/nextjs.svg" },
  { name: "nodejs", icon: "/svgs/nodejs.svg" },
  { name: "mysql", icon: "/svgs/mysql.svg" },
];

function HomePage() {
  usePageTitle("Home");

  const featured = contentItems
    .filter((item) => item.category === "Projects")
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative dot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4 }}
            className="font-mono text-[13px] text-accent mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            ai fullstack engineer — cainta, rizal, ph
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-50"
          >
            hi, i&apos;m arlan.
            <br />
            <span className="text-zinc-500">i build intelligent systems.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Building cornerstone tech at{" "}
            <a
              href="https://www.imaginarium.vc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-accent transition-colors"
            >
              Imaginarium
            </a>
            . I care about scalability, reliability, and shipping systems that
            can think on their own.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="font-mono text-sm px-5 py-2.5 rounded bg-zinc-100 text-zinc-900 font-medium hover:bg-white transition-colors"
            >
              view work →
            </Link>
            <Link
              to="/history"
              className="font-mono text-sm px-5 py-2.5 rounded border border-line text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
            >
              track record
            </Link>
            <span className="font-mono text-[13px] text-zinc-600 hidden sm:inline">
              or press{" "}
              <kbd className="rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[11px] text-zinc-300">
                c
              </kbd>{" "}
              to reach me
            </span>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-ink-raised">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-8 sm:px-8 first:pl-0"
            >
              <p className="font-mono text-3xl font-semibold text-zinc-50">
                {stat.value}
                <span className="text-base text-accent ml-1">{stat.unit}</span>
              </p>
              <p className="mt-1 font-mono text-[13px] text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-mono text-[13px] tracking-widest uppercase text-zinc-500">
            01 — selected work
          </h2>
          <Link
            to="/projects"
            className="font-mono text-[13px] text-zinc-500 hover:text-accent transition-colors"
          >
            all projects →
          </Link>
        </div>

        <div className="flex flex-col">
          {featured.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group border-t border-line py-8 grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 ${
                project.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-accent transition-colors">
                  {project.title.split(",")[0].split(":")[0]}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-zinc-500 border border-line rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-mono text-[13px] tracking-widest uppercase text-zinc-500 mb-10">
          02 — tools i work with
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-t border-l border-line">
          {stack.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group flex flex-col items-center gap-3 border-b border-r border-line py-8 hover:bg-ink-raised transition-colors"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-7 w-7 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <span className="font-mono text-[11px] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
