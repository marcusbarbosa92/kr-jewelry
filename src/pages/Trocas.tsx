import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

export function TrocasPage() {
  return (
    <PageShell
      eyebrow="Institucional"
      title="Trocas e devoluções"
      intro="Comprar joia a distância pede confiança. Estas são as nossas regras, baseadas no Código de Defesa do Consumidor."
    >
      <div className="space-y-8">
        {[
          {
            t: "Arrependimento: 7 dias",
            p: "Se a peça não era o que você esperava, você tem 7 dias corridos após o recebimento para solicitar troca ou devolução com reembolso integral (art. 49 do CDC). A joia deve estar sem sinais de uso, com o certificado, a nota fiscal e a embalagem. O frete da devolução é por nossa conta.",
          },
          {
            t: "Defeito de fabricação",
            p: "Nossas joias têm garantia vitalícia contra defeito de fabricação. Identificou algo? Envie fotos pelo WhatsApp e cuidamos do reparo ou da troca sem custo. A garantia não cobre mau uso, quedas ou contato com produtos químicos.",
          },
          {
            t: "Peças personalizadas",
            p: "Joias com gravação ou feitas sob encomenda são produzidas só para você, por isso a troca acontece apenas em caso de defeito de fabricação.",
          },
          {
            t: "Como solicitar",
            p: "Chame no WhatsApp com o número da nota fiscal e o motivo. Respondemos com o passo a passo do envio, sempre com código de rastreio e seguro.",
          },
        ].map((s) => (
          <section key={s.t}>
            <h2 className="font-display text-2xl font-normal text-ivory">{s.t}</h2>
            <p className="mt-2 max-w-xl text-[15px] font-extralight leading-relaxed text-ivory-muted">
              {s.p}
            </p>
          </section>
        ))}
      </div>

      <WhatsCta message="Olá! Preciso de ajuda com uma troca ou devolução.">
        Falar sobre minha troca
      </WhatsCta>
    </PageShell>
  );
}
