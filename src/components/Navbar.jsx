import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const navLinks = [
  { to: "/projects", label: "projects" },
  { to: "/about", label: "about" },
  { to: "/history", label: "history" },
];

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useRouterState({
    select: (state) => state.location.pathname,
  });
  const navRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  // Update pill position based on active route
  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(`a[href="${location}"]`);

    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPillStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, width: 0 }));
    }
  }, [location]);

  useEffect(() => {
    const handleOpenKey = (e) => {
      if (
        e.key === "c" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        setIsContactModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleOpenKey);

    return () => {
      window.removeEventListener("keydown", handleOpenKey);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-line bg-ink/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto h-full px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono text-sm font-semibold tracking-tight text-zinc-100 hover:text-accent transition-colors"
          >
            arlan<span className="text-accent">@</span>abante
            <span className="text-zinc-500">:~$</span>
          </Link>

          {/* Navigation */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-6 relative"
          >
            <motion.div
              className="absolute -bottom-1 h-px bg-accent"
              initial={false}
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />

            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative z-10 font-mono text-[13px] transition-colors ${
                  location === to
                    ? "text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                ./{label}
              </Link>
            ))}
          </nav>

          {/* External Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/arlan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arlan-abante/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden sm:flex items-center gap-2 font-mono text-[13px] text-zinc-400 hover:text-zinc-100 border border-line hover:border-zinc-600 rounded px-3 py-1.5 transition-colors"
            >
              contact
              <kbd className="rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
                c
              </kbd>
            </button>
          </div>
        </div>
      </header>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
