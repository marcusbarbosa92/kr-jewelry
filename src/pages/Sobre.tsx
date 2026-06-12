import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

export function SobrePage() {
  return (
    <PageShell
      eyebrow="Sobre nós"
      title="Prazer, KR.JEWELRY"
      intro="Uma joalheria pequena por escolha, com peças em ouro 18k e atendimento de gente para gente."
    >
      <div className="space-y-6 text-[15px] font-extralight leading-relaxed text-ivory-muted">
        <p>
          A KR.JEWELRY nasceu do gosto por joias que ficam: as que marcam uma
          data, as que passam de geração em geração, as que a gente se dá
          depois de uma conquista.
        </p>
        <p>
          Trabalhamos com ouro 18k e pedras selecionadas. Cada peça é escolhida
          com cuidado, fotografada de verdade e enviada com certificado de
          autenticidade e nota fiscal.
        </p>
        <p>
          Nosso atendimento é pelo WhatsApp. Sem robô e sem resposta pronta:
          você conta a ocasião, a gente mostra opções em foto e vídeo e você
          decide no seu tempo.
        </p>
      </div>

      <h2 className="mt-12 font-display text-2xl font-normal text-ivory">
        Como trabalhamos
      </h2>
      <ul className="mt-6 space-y-5">
        {[
          {
            title: "Curadoria pequena",
            text: "Poucas peças por vez, escolhidas uma a uma. Preferimos qualidade a vitrine cheia.",
          },
          {
            title: "Conversa antes da venda",
            text: "Entender a ocasião vem primeiro. Se a peça certa não estiver conosco, dizemos isso com honestidade.",
          },
          {
            title: "Cuidado até a entrega",
            text: "Embalagem lacrada, transporte com seguro e rastreio. Você acompanha tudo de perto.",
          },
        ].map((item) => (
          <li key={item.title} className="border-l border-champagne/40 pl-5">
            <p className="text-[15px] font-normal text-ivory">{item.title}</p>
            <p className="mt-1 text-sm font-extralight leading-relaxed text-ivory-muted">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <WhatsCta message="Olá! Li a página sobre a KR.JEWELRY e quero conhecer as peças.">
        Conhecer as peças
      </WhatsCta>
    </PageShell>
  );
}
