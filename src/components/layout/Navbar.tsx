import React, { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { AurumMark, WhatsAppIcon, InstagramIcon } from "../ui/Icons.tsx";
import { NAV_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../../constants/index.ts";
import { whatsappLink } from "../../utils/helpers.ts";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  solid: boolean;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export function Navbar({ solid, wishlistCount, onOpenWishlist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const filled = solid || scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          filled
            ? "border-b border-champagne/10 bg-noir/80 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#/" className="group flex items-center gap-3">
            <AurumMark className="h-7 w-7 transition-transform duration-500 group-hover:rotate-12" />
            <span className="font-display text-xl font-medium tracking-[0.18em] text-ivory sm:text-2xl">
              KR.JEWELRY
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-light uppercase tracking-[0.22em] text-ivory-muted transition-colors duration-300 hover:text-champagne-light"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenWishlist}
              aria-label="Abrir lista de desejos"
              className="relative rounded-full border border-champagne/20 p-2.5 text-ivory transition-colors duration-300 hover:border-champagne/60 hover:text-champagne"
            >
              <motion.span
                key={wishlistCount}
                initial={wishlistCount > 0 ? { scale: 0.8 } : {}}
                animate={wishlistCount > 0 ? { scale: [0.8, 1.25, 1] } : {}}
                transition={{ duration: 0.4 }}
                className="block"
              >
                <Heart className={`h-5 w-5 ${wishlistCount > 0 ? "fill-champagne text-champagne" : ""}`} strokeWidth={1.4} />
              </motion.span>
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-champagne text-[10px] font-medium text-noir">
                  {wishlistCount}
                </span>
              )}
            </button>
            <a
              href={whatsappLink(
                "Olá! Estou no site da KR.JEWELRY e gostaria de falar com a personal shopper."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer hidden items-center gap-2 rounded-full border border-champagne/40 bg-champagne/5 px-6 py-2.5 text-[12px] font-normal uppercase tracking-[0.2em] text-champagne-light backdrop-blur-md transition-all duration-500 hover:border-champagne hover:bg-champagne hover:text-noir hover:shadow-[0_0_32px_rgba(212,180,131,0.35)] sm:flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Personal Shopper
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full border border-champagne/20 p-2.5 text-ivory transition-colors duration-300 hover:border-champagne/60 hover:text-champagne lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — glassmorphism overlay */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-noir/70 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-champagne/15 bg-noir-soft/90 px-8 pb-10 pt-7 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl tracking-[0.18em] text-ivory">
                  KR.JEWELRY
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-champagne/20 p-2 text-ivory-muted transition-colors duration-300 hover:text-champagne"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" strokeWidth={1.4} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    className="font-display text-3xl font-light text-ivory transition-colors duration-300 hover:text-champagne-light"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={whatsappLink(
                    "Olá! Estou no site da KR.JEWELRY e gostaria de falar com a personal shopper."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-champagne py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,180,131,0.4)]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-champagne/30 py-4 text-[13px] font-light uppercase tracking-[0.18em] text-champagne-light transition-colors duration-500 hover:border-champagne"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
