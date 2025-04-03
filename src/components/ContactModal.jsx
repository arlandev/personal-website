import { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSendClick = () => {
    const message = document.getElementById("message").value;
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
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <section
        className={`bg-zinc-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md p-6 max-w-md w-full z-50 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative">
          <button
            className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
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

          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>

          <p className="text-gray-600 mb-4">
            If you're interested in reaching out, write a message below. I'll
            get back to you as soon as I can.
          </p>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">
              to: connect@arlanabante.com
            </p>
            <textarea
              minLength="10"
              maxLength="500"
              name="message"
              id="message"
              placeholder="How's it going?"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-300 min-h-[100px] resize-none"
            ></textarea>
          </div>

          <button
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-md transition-colors"
            onClick={handleSendClick}
          >
            Send
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Clicking send opens your system default mail app. Otherwise, feel
            free to send me an email at{" "}
            <a
              href="mailto:connect@arlanabante.com"
              className="text-blue-500 hover:underline"
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
