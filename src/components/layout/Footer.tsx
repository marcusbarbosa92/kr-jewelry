import React from "react";
import {
  AurumMark,
  WhatsAppIcon,
  InstagramIcon,
  PadlockIcon,
  ShieldIcon,
  WaxSealIcon,
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
            <h4 className="text-[11px] font-normal uppercase tracking-[0.3em] text-champagne">
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
            <h4 className="text-[11px] font-normal uppercase tracking-[0.3em] text-champagne">
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

        {/* Faixa de segurança */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-9 gap-y-4 rounded-2xl border border-champagne/10 bg-noir/60 px-6 py-5">
          <span className="flex items-center gap-2.5 text-xs font-extralight text-ivory-muted">
            <PadlockIcon className="h-4.5 w-4.5 text-champagne" />
            Ambiente 100% seguro · SSL
          </span>
          <span className="flex items-center gap-2.5 text-xs font-extralight text-ivory-muted">
            <ShieldIcon className="h-4.5 w-4.5 text-champagne" />
            Dados protegidos · LGPD
          </span>
          <span className="flex items-center gap-2.5 text-xs font-extralight text-ivory-muted">
            <HallmarkChip />
            Ouro 18k certificado
          </span>
          <span className="flex items-center gap-2.5 text-xs font-extralight text-ivory-muted">
            <WaxSealIcon className="h-4.5 w-4.5 text-champagne" />
            Lacre de segurança
          </span>
        </div>

        <div className="hairline mt-10 h-px w-full" />
        <div className="mt-7 flex flex-col items-center justify-between gap-3 text-xs font-extralight text-ivory-muted/60 sm:flex-row">
          <p>© {currentYear} KR.JEWELRY Alta Joalheria. Todos os direitos reservados.</p>
          <p className="tracking-[0.2em]">FEITO À MÃO NO BRASIL</p>
        </div>
      </div>
    </footer>
  );
}
