import React, { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Verificar se o consentimento já foi registrado
    const consent = localStorage.getItem("kr-cookie-consent");
    if (!consent) {
      // Exibir o banner após um pequeno delay para suavidade
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("kr-cookie-consent", "all");
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("kr-cookie-consent", "essential");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-5 right-5 z-[100] mx-auto max-w-2xl rounded-2xl border border-champagne/15 bg-noir-card/95 p-5 shadow-[0_16px_56px_rgba(0,0,0,0.65)] backdrop-blur-xl md:bottom-8 md:left-8 md:right-auto md:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 text-champagne">
              <ShieldCheck className="h-5.5 w-5.5" strokeWidth={1.5} />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-lg font-light text-ivory">
                Consentimento e Privacidade LGPD
              </h3>
              <p className="mt-1.5 text-[12.5px] font-extralight leading-relaxed text-ivory-muted">
                Utilizamos cookies e tecnologias de armazenamento local para
                garantir a melhor experiência de navegação (como sua Lista de
                Desejos). Ao clicar em "Aceitar Todos", você concorda com o
                armazenamento de cookies em seu dispositivo de acordo com nossa{" "}
                <a
                  href="#/privacidade"
                  className="text-champagne-light underline decoration-champagne/20 underline-offset-4 transition-colors duration-300 hover:text-champagne hover:decoration-champagne"
                >
                  Política de Privacidade
                </a>{" "}
                e nossos{" "}
                <a
                  href="#/termos"
                  className="text-champagne-light underline decoration-champagne/20 underline-offset-4 transition-colors duration-300 hover:text-champagne hover:decoration-champagne"
                >
                  Termos de Uso
                </a>
                .
              </p>

              <div className="mt-4.5 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="rounded-full bg-champagne px-5 py-2 text-[11px] font-medium uppercase tracking-wider text-noir transition-all duration-300 hover:bg-champagne-light active:scale-[0.98]"
                >
                  Aceitar todos
                </button>
                <button
                  onClick={handleAcceptEssential}
                  className="rounded-full border border-champagne/30 bg-transparent px-5 py-2 text-[11px] font-light uppercase tracking-wider text-champagne-light transition-all duration-300 hover:border-champagne hover:bg-champagne/5 active:scale-[0.98]"
                >
                  Apenas essenciais
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
