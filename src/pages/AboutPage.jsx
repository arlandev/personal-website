import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";

function AboutPage() {
  usePageTitle("About");

  return (
    <motion.main
      className="container mx-auto my-16 lg:w-10/12 xl:w-3/5 2xl:w-1/2 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          About Me
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-300">
          I enjoy making stuff from scratch. When I'm not building things,
          you'll find me at the gym, cycling, or catching up on anime. If you're
          curious about what I've built or worked on, check out my{" "}
          <Link to="/projects" className="font-medium text-blue-400 underline">
            /projects
          </Link>{" "}
          or my{" "}
          <Link to="/history" className="font-medium text-blue-400 underline">
            /history
          </Link>
          .
        </p>
        <div>
          <p className="text-xl text-gray-800 dark:text-gray-300">
            I don't enjoy building frontend. This website is an attempt at
            trying to enjoy it. When I do build frontend, it'll show up in my{" "}
            <Link
              to="/projects"
              className="font-medium text-blue-400 underline"
            >
              /projects
            </Link>{" "}
            and you can check them out there.
          </p>
        </div>
        <hr className="my-8 h-px w-full border-t border-dotted border-black"></hr>
        <div>
          <p></p>
        </div>
      </div>
    </motion.main>
  );
}

export default AboutPage;
