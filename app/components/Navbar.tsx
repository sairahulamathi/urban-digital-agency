"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div
          className={`
            rounded-full border border-white/10
            transition-all duration-500
            ${
              scrolled
                ? "bg-black/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.35)]"
                : "bg-white/5 backdrop-blur-xl"
            }
          `}
        >
          <div className="flex items-center justify-between px-6 md:px-10 py-5">
            {/* LOGO */}
            <a href="#home">
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-wider bg-linear-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Urban Digital
              </h1>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative text-lg font-semibold transition-all duration-300
                    ${
                      active === item.href.replace("#", "")
                        ? "text-pink-400"
                        : "text-white hover:text-pink-400"
                    }
                  `}
                >
                  {item.name}

                  {active === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-pink-400"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:block">
              <a
  href="https://wa.me/7702611958"
  target="_blank"
>
                <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                  Let’s Talk
                </button>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 z-40 w-[92%] rounded-[40px] bg-black/70 backdrop-blur-2xl border border-white/10 p-10 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`
                    text-2xl font-semibold transition-all duration-300
                    ${
                      active === item.href.replace("#", "")
                        ? "text-pink-400"
                        : "text-white"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="w-full"
              >
                <button className="w-full py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-xl">
                  Let’s Talk
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}