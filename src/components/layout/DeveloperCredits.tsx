import React, { forwardRef } from "react";
import { Instagram, Phone, Globe } from "lucide-react";

const DeveloperCredits = forwardRef<HTMLDivElement, object>((_, ref) => {
  const companyWhatsApp = "5511982505630";
  const companyInstagram = "https://www.instagram.com/synthrai";
  const companyWebsite = "https://synthrai.com.br";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-3 py-6 border-t border-champagne/10 bg-noir/20"
    >
      {/* "Desenvolvido por" text */}
      <p className="text-ivory-muted/40 text-[10px] tracking-[0.25em] uppercase font-body">
        Desenvolvido por
      </p>

      {/* Logo + Name row */}
      <a
        href={companyWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <img
          src="/logo-synthrai.webp"
          alt="SYNTHRAI"
          className="w-10 h-10 rounded-full object-cover border border-champagne/10"
        />
        <span className="text-ivory/70 font-display text-lg tracking-[0.15em] group-hover:text-champagne transition-colors duration-300">
          SYNTHRAI
        </span>
      </a>

      {/* Social links */}
      <div className="flex items-center gap-4">
        <a
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ivory-muted/40 hover:text-ivory-muted transition-colors duration-300"
        >
          <Globe size={14} />
          <span className="text-[11px] font-body">synthrai.com.br</span>
        </a>

        <a
          href={companyInstagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ivory-muted/40 hover:text-ivory-muted transition-colors duration-300"
        >
          <Instagram size={14} />
          <span className="text-[11px] font-body">@synthrai</span>
        </a>

        <a
          href={`https://wa.me/${companyWhatsApp}?text=Olá! Vi o trabalho da SYNTHRAI no site KR.JEWELRY e gostaria de saber mais.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-7 h-7 rounded-full border border-champagne/15 hover:border-champagne/45 text-ivory-muted/40 hover:text-champagne transition-all duration-300"
        >
          <Phone size={13} />
        </a>
      </div>
    </div>
  );
});

DeveloperCredits.displayName = "DeveloperCredits";

export default DeveloperCredits;
