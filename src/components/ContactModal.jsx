import { useState, useEffect, useRef } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
          textareaRef.current?.focus();
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendClick = () => {
    const message = textareaRef.current?.value ?? "";
    window.location.href = `mailto:connect@arlanabante.com?subject=Let's chat!&body=${encodeURIComponent(
      message
    )}`;
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Contact"
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-line bg-ink-raised shadow-2xl p-6 max-w-md w-[calc(100%-2rem)] z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative">
          <button
            className="absolute right-0 top-0 text-zinc-500 hover:text-zinc-200 transition-colors"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <p className="font-mono text-[13px] text-accent mb-1">$ contact --new</p>
          <h2 className="text-xl font-semibold text-zinc-50 mb-2">Contact Me</h2>

          <p className="text-sm text-zinc-400 mb-4">
            If you&apos;re interested in reaching out, write a message below.
          </p>

          <div className="mb-4">
            <p className="font-mono text-[12px] text-zinc-500 mb-2">
              to: connect@arlanabante.com
            </p>
            <textarea
              ref={textareaRef}
              minLength="10"
              maxLength="500"
              name="message"
              id="message"
              placeholder="How's it going?"
              className="w-full p-3 rounded-md border border-line bg-ink text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 min-h-[100px] resize-none font-mono text-sm"
            ></textarea>
          </div>

          <button
            className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-mono text-sm font-medium py-2.5 rounded-md transition-colors"
            onClick={handleSendClick}
          >
            send →
          </button>

          <p className="text-xs text-zinc-500 mt-3 text-center">
            Clicking send opens your system default mail app. Otherwise, email
            me at{" "}
            <a
              href="mailto:connect@arlanabante.com"
              className="text-zinc-300 hover:text-accent underline underline-offset-2 transition-colors"
            >
              connect@arlanabante.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
