import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import ContactModal from "./ContactModal";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenKey = (e) => {
      if (
        e.key === "c" &&
        !e.ctrlKey &&
        !e.metaKey &&
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
      <header className="w-full py-4 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-none">
            <a href="/" className="font-medium text-lg">
              <img
                href="/"
                src="/svgs/logo_colored.svg"
                alt="Arlan <>"
                className="h-8 w-auto mr-2"
              />
            </a>
          </div>

          <NavigationMenu.Root className="relative flex">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <a
                  href="/about"
                  className="px-2 py-1 text-sm font-medium transition-colors duration-300 text-zinc-500 hover:text-white hover:bg-zinc-400 focus:bg-zinc-400 rounded-3xl hover:cursor-pointer"
                >
                  About
                </a>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <a
                  href="/history"
                  className="px-2 py-1 text-sm font-medium transition-colors duration-300 text-zinc-500 hover:text-white hover:bg-zinc-400 focus:bg-zinc-400 rounded-3xl hover:cursor-pointer"
                >
                  History
                </a>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <a
                  href="/projects"
                  className="px-2 py-1 text-sm font-medium transition-colors duration-300 text-zinc-500 hover:text-white hover:bg-zinc-400 focus:bg-zinc-400 rounded-3xl hover:cursor-pointer"
                >
                  Projects
                </a>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          <div className="flex-none">
            <a
              href="#contact"
              onClick={() => setIsContactModalOpen(true)}
              className="px-4 py-2 transition-colors duration-500 rounded-full text-sm font-medium text-black bg-white border border-zinc-200 shadow-sm hover:bg-zinc-50"
            >
              Contact me
            </a>
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
