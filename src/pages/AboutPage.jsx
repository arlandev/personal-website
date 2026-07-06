import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";

function AboutPage() {
  usePageTitle("About");

  return (
    <motion.main
      className="max-w-3xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <p className="font-mono text-[13px] tracking-widest uppercase text-zinc-500 mb-3">
        readme.md
      </p>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 mb-8">
        About Me
      </h1>

      <div className="flex flex-col gap-6 text-lg text-zinc-400 leading-relaxed">
        <p>
          I enjoy building things. When I&apos;m not building things,
          you&apos;ll find me at the gym, cycling, or watching anime. If
          you&apos;re curious about what I&apos;ve built or worked on, check
          out my{" "}
          <Link
            to="/projects"
            className="font-mono text-base text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-accent transition-colors"
          >
            /projects
          </Link>{" "}
          or my{" "}
          <Link
            to="/history"
            className="font-mono text-base text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-accent transition-colors"
          >
            /history
          </Link>
          .
        </p>
        <p>
          I don&apos;t enjoy building frontend. This website is an attempt at
          trying to enjoy it. When I do build frontend, it&apos;ll show up in
          my{" "}
          <Link
            to="/projects"
            className="font-mono text-base text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-accent transition-colors"
          >
            /projects
          </Link>{" "}
          and you can check them out there.
        </p>
      </div>

      <hr className="hr-fade my-12" />

      <p className="font-mono text-[13px] text-zinc-600">
        // press <kbd className="rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[11px] text-zinc-300">c</kbd> anywhere to say hi
      </p>
    </motion.main>
  );
}

export default AboutPage;
