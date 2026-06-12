import React from "react";
import { WhatsAppIcon } from "../ui/Icons.tsx";
import { whatsappLink } from "../../utils/helpers.ts";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-5 z-50 sm:bottom-8 sm:right-8">
      <a
        href={whatsappLink(
          "Olá! Estava navegando no site da KR.JEWELRY e gostaria de ajuda para escolher uma joia."
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="group relative flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-champagne shadow-[0_12px_40px_rgba(212,180,131,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(212,180,131,0.6)]"
      >
        <span className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-noir bg-emerald-400" />
        </span>
        <WhatsAppIcon className="h-7 w-7 text-noir transition-transform duration-500 group-hover:scale-110" />
      </a>
    </div>
  );
}
