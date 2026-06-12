import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";
import { InstagramIcon, WhatsAppIcon } from "../components/ui/Icons.tsx";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../constants/index.ts";
import { whatsappLink } from "../utils/helpers.ts";

const FAQ = [
  {
    q: "Como funciona a compra?",
    a: "Você escolhe pelo site ou pelo Instagram e fecha tudo no WhatsApp: peça, valores, pagamento e envio. Antes de confirmar, enviamos fotos e vídeos reais da joia.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Pix e cartão de crédito. As condições de parcelamento são combinadas no atendimento, antes de fechar o pedido.",
  },
  {
    q: "Qual é o prazo de entrega?",
    a: "Depende da peça e da sua região. Informamos o prazo exato no atendimento, antes do pagamento, e o envio sempre tem seguro e código de rastreio.",
  },
  {
    q: "Posso trocar ou devolver?",
    a: "Sim. Compras a distância têm 7 dias corridos após o recebimento para troca ou devolução, conforme o Código de Defesa do Consumidor. Os detalhes estão na página de trocas e devoluções.",
  },
  {
    q: "As joias têm garantia?",
    a: "Têm garantia vitalícia contra defeito de fabricação, além de polimento e limpeza gratuitos sempre que você precisar.",
  },
  {
    q: "Não sei minha medida de anel. E agora?",
    a: "Temos um guia de medidas aqui no site para você descobrir seu aro em casa. Na dúvida, confirmamos juntas no WhatsApp antes de fechar o pedido.",
  },
  {
    q: "Vocês fazem joias sob encomenda?",
    a: "Fazemos. Conte sua ideia no WhatsApp e avaliamos juntas o desenho, o prazo e o valor.",
  },
];

export function ContatoPage() {
  return (
    <PageShell
      eyebrow="Contato"
      title="Fale com a gente"
      intro="Atendimento pelo WhatsApp e pelo Instagram, de segunda a sábado. Respondemos no mesmo dia útil."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={whatsappLink("Olá! Vim pela página de contato do site e gostaria de atendimento.")}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-champagne/15 bg-noir-card/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/45"
        >
          <WhatsAppIcon className="h-6 w-6 text-champagne" />
          <p className="mt-4 font-display text-xl text-ivory">WhatsApp</p>
          <p className="mt-1 text-sm font-extralight text-ivory-muted">
            (11) 95324-9065
          </p>
          <p className="mt-3 text-[11px] font-light uppercase tracking-[0.2em] text-champagne-light">
            Iniciar conversa →
          </p>
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-champagne/15 bg-noir-card/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/45"
        >
          <InstagramIcon className="h-6 w-6 text-champagne" />
          <p className="mt-4 font-display text-xl text-ivory">Instagram</p>
          <p className="mt-1 text-sm font-extralight text-ivory-muted">{INSTAGRAM_HANDLE}</p>
          <p className="mt-3 text-[11px] font-light uppercase tracking-[0.2em] text-champagne-light">
            Seguir e chamar →
          </p>
        </a>
      </div>

      <h2 className="mt-14 font-display text-2xl font-normal text-ivory">
        Perguntas frequentes
      </h2>
      <div className="mt-4">
        {FAQ.map((item) => (
          <details key={item.q} className="group border-b border-champagne/10 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-light text-ivory transition-colors duration-300 hover:text-champagne-light">
              {item.q}
              <span
                aria-hidden="true"
                className="shrink-0 font-display text-xl text-champagne transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm font-extralight leading-relaxed text-ivory-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <p className="mt-8 text-sm font-extralight text-ivory-muted">
        Precisa descobrir seu aro?{" "}
        <a
          href="#/medidas"
          className="text-champagne-light underline-offset-4 transition-colors duration-300 hover:text-champagne hover:underline"
        >
          Use o guia de medidas
        </a>
        .
      </p>

      <WhatsCta message="Olá! Estava na página de contato do site e fiquei com uma dúvida. Pode me ajudar?">
        Tirar minha dúvida
      </WhatsCta>
    </PageShell>
  );
}
