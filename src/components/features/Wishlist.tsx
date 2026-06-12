import React, { useEffect } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "../ui/Icons.tsx";
import { whatsappLink } from "../../utils/helpers.ts";
import { Collection } from "../../types/index.ts";
import { motion, AnimatePresence } from "framer-motion";

interface WishlistDrawerProps {
  open: boolean;
  onClose: () => void;
  items: string[];
  collections: Collection[];
  onToggle: (name: string) => void;
  onClear: () => void;
}

const joinNames = (names: string[]) =>
  names.length <= 1
    ? names.join("")
    : `${names.slice(0, -1).join(", ")} e ${names[names.length - 1]}`;

export function WishlistDrawer({
  open,
  onClose,
  items,
  collections,
  onToggle,
  onClear,
}: WishlistDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const saved = collections.filter((c) => items.includes(c.name));
  const message = `Olá! Salvei ${joinNames(
    saved.map((c) => `${c.name} (${c.collection})`)
  )} na minha lista no site. Pode me enviar opções com fotos e valores?`;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex justify-end" aria-hidden={!open}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-noir/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 27, stiffness: 220 }}
            className="relative flex h-full w-full max-w-[26rem] flex-col border-l border-champagne/15 bg-noir-soft/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-light text-ivory">Sua lista</h2>
              <button
                onClick={onClose}
                aria-label="Fechar lista"
                className="rounded-full border border-champagne/20 p-2 text-ivory-muted transition-colors duration-300 hover:text-champagne"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            {saved.length === 0 ? (
              <div className="flex flex-1 flex-col justify-center text-center">
                <p className="text-sm font-extralight leading-relaxed text-ivory-muted">
                  Sua lista está vazia. Toque no coração de uma coleção para guardar
                  aqui o que chamou sua atenção.
                </p>
              </div>
            ) : (
              <>
                <ul className="mt-8 flex-1 overflow-y-auto space-y-4 pr-1">
                  <AnimatePresence initial={false}>
                    {saved.map((c) => (
                      <motion.li
                        key={c.name}
                        initial={{ opacity: 0, height: 0, y: 15 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-4 overflow-hidden py-1"
                      >
                        <img
                          src={c.image}
                          alt={c.name}
                          className="h-14 w-14 rounded-xl border border-champagne/15 object-cover"
                        />
                        <span className="flex-1">
                          <span className="block font-display text-lg text-ivory">{c.name}</span>
                          <span className="block text-xs font-light text-champagne/80">
                            {c.collection}
                          </span>
                        </span>
                        <button
                          onClick={() => onToggle(c.name)}
                          aria-label={`Remover ${c.name} da lista`}
                          className="rounded-full border border-champagne/15 p-2 text-ivory-muted transition-colors duration-300 hover:border-champagne/50 hover:text-champagne"
                        >
                          <X className="h-4 w-4" strokeWidth={1.6} />
                        </button>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>

                <div className="border-t border-champagne/10 pt-5 mt-auto">
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 hover:bg-champagne-light hover:shadow-[0_12px_48px_rgba(212,180,131,0.45)]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Enviar lista no WhatsApp
                  </a>

                  <button
                    onClick={onClear}
                    className="mt-5 w-full text-center text-xs font-light uppercase tracking-[0.22em] text-ivory-muted transition-colors duration-300 hover:text-champagne"
                  >
                    Limpar lista
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
