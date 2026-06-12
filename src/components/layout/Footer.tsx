import React from "react";
import {
  AurumMark,
  WhatsAppIcon,
  InstagramIcon,
  PadlockIcon,
  ShieldIcon,
  HallmarkChip,
} from "../ui/Icons.tsx";
import {
  NAV_LINKS,
  INSTITUTIONAL_LINKS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "../../constants/index.ts";
import { whatsappLink } from "../../utils/helpers.ts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-champagne/10 bg-noir-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <AurumMark className="h-7 w-7" />
              <span className="font-display text-xl tracking-[0.18em] text-ivory sm:text-2xl">
                KR.JEWELRY
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm font-extralight leading-relaxed text-ivory-muted">
              Joalheria brasileira em ouro 18k, com atendimento próximo pelo
              WhatsApp e entrega segura em todo o Brasil.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da KR.JEWELRY"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/20 text-ivory-muted transition-all duration-500 hover:-translate-y-1 hover:border-champagne hover:text-champagne"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da KR.JEWELRY e gostaria de mais informações."
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da KR.JEWELRY"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/20 text-ivory-muted transition-all duration-500 hover:-translate-y-1 hover:border-champagne hover:text-champagne"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-light uppercase tracking-[0.3em] text-champagne">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-extralight text-ivory-muted transition-colors duration-300 hover:text-champagne-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-light uppercase tracking-[0.3em] text-champagne">
              Institucional
            </h4>
            <ul className="mt-5 space-y-3">
              {INSTITUTIONAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-extralight text-ivory-muted transition-colors duration-300 hover:text-champagne-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Faixa de segurança minimalista e sofisticada */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-light uppercase tracking-[0.22em] text-ivory-muted/60">
          <span className="flex items-center gap-2">
            <PadlockIcon className="h-4 w-4 text-champagne/60" />
            Ambiente Seguro SSL
          </span>
          <span className="hidden sm:inline text-champagne/30">•</span>
          <span className="flex items-center gap-2">
            <ShieldIcon className="h-4 w-4 text-champagne/60" />
            Proteção de Dados LGPD
          </span>
          <span className="hidden sm:inline text-champagne/30">•</span>
          <span className="flex items-center gap-2">
            <HallmarkChip className="border-champagne/20 text-champagne/60" />
            Ouro 18k Certificado
          </span>
        </div>

        <div className="hairline mt-10 h-px w-full" />
        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-xs font-extralight text-ivory-muted/40 sm:flex-row">
          <p>© {currentYear} KR.JEWELRY Alta Joalheria. Todos os direitos reservados.</p>
          <p className="tracking-[0.2em]">FEITO À MÃO NO BRASIL</p>
        </div>
      </div>
    </footer>
  );
}
