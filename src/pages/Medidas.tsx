import React, { useState, useEffect } from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

const CARD_WIDTH_MM = 85.6;
const aroDiameter = (aro: number) => 16.5 + (aro - 12) * 0.4;
const fmt = (n: number) => n.toFixed(1).replace(".", ",");

export function MedidasPage() {
  const [cardPx, setCardPx] = useState<number>(() => {
    const stored = Number(localStorage.getItem("kr-cardpx"));
    return stored >= 200 && stored <= 520 ? stored : 320;
  });
  const [aro, setAro] = useState<number>(16);

  useEffect(() => {
    localStorage.setItem("kr-cardpx", String(cardPx));
  }, [cardPx]);

  const pxPerMm = cardPx / CARD_WIDTH_MM;
  const diameter = aroDiameter(aro);
  const circlePx = diameter * pxPerMm;

  return (
    <PageShell
      eyebrow="Guia de medidas"
      title="Descubra o seu aro em casa"
      intro="Você só precisa de um cartão (de banco ou transporte) e de um anel que já veste bem no dedo desejado."
    >
      {/* Passo 1: calibrar */}
      <h2 className="font-display text-2xl font-normal text-ivory">
        1. Ajuste a tela com um cartão
      </h2>
      <p className="mt-2 max-w-xl text-sm font-extralight leading-relaxed text-ivory-muted">
        Encoste um cartão na tela e mova o controle até o retângulo ficar do
        mesmo tamanho que ele. Isso deixa a medida precisa em qualquer
        celular ou computador.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-champagne/10 bg-noir-card/50 p-6">
        <div
          style={{ width: `${cardPx}px`, height: `${(cardPx * 53.98) / CARD_WIDTH_MM}px` }}
          className="flex items-center justify-center rounded-xl border-2 border-dashed border-champagne/60 transition-all duration-300"
        >
          <span className="px-3 text-center text-[11px] font-light uppercase tracking-[0.22em] text-ivory-muted">
            Encoste seu cartão aqui
          </span>
        </div>
      </div>
      <input
        type="range"
        min="200"
        max="520"
        value={cardPx}
        onChange={(e) => setCardPx(Number(e.target.value))}
        aria-label="Ajustar tamanho do cartão na tela"
        className="mt-5 w-full accent-champagne cursor-pointer"
      />

      {/* Passo 2: medir */}
      <h2 className="mt-14 font-display text-2xl font-normal text-ivory">
        2. Encontre o círculo do seu anel
      </h2>
      <p className="mt-2 max-w-xl text-sm font-extralight leading-relaxed text-ivory-muted">
        Apoie seu anel na tela e mova o controle até a parte interna dele
        encostar na linha dourada.
      </p>

      <div className="mt-6 flex min-h-[16rem] items-center justify-center rounded-2xl border border-champagne/10 bg-noir-card/50 p-6 sm:min-h-[19rem]">
        <div
          style={{ width: `${circlePx}px`, height: `${circlePx}px` }}
          className="rounded-full border-2 border-champagne shadow-[0_0_24px_rgba(212,180,131,0.25)] transition-all duration-150"
        />
      </div>
      <input
        type="range"
        min="10"
        max="30"
        value={aro}
        onChange={(e) => setAro(Number(e.target.value))}
        aria-label="Ajustar medida do aro"
        className="mt-5 w-full accent-champagne cursor-pointer"
      />

      <div className="mt-6 rounded-2xl border border-champagne/20 bg-champagne/5 p-6 text-center">
        <p className="text-[11px] font-light uppercase tracking-[0.3em] text-champagne">
          Sua medida
        </p>
        <p className="mt-2 font-display text-4xl font-light text-ivory">
          Aro {aro}
        </p>
        <p className="mt-1 text-sm font-extralight text-ivory-muted">
          {fmt(diameter)} mm de diâmetro interno
        </p>
      </div>

      <p className="mt-5 text-xs font-extralight leading-relaxed text-ivory-muted">
        A medida na tela é aproximada e depende do ajuste com o cartão. Antes
        de fechar o pedido, confirmamos a medida juntas no atendimento, sem
        custo e sem pressa.
      </p>

      <WhatsCta
        message={`Olá! Usei o guia de medidas do site e meu aro é o ${aro} (cerca de ${fmt(
          diameter
        )} mm). Pode me mostrar opções de anéis nessa medida?`}
      >
        Enviar minha medida
      </WhatsCta>

      {/* Método alternativo */}
      <h2 className="mt-16 font-display text-2xl font-normal text-ivory">
        Prefere medir com uma linha?
      </h2>
      <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm font-extralight leading-relaxed text-ivory-muted">
        <li>Enrole uma linha (sem apertar) na base do dedo desejado.</li>
        <li>Marque onde a linha se encontra e meça o comprimento com uma régua, em milímetros.</li>
        <li>Compare com a tabela abaixo pela coluna de contorno.</li>
      </ol>

      <div className="mt-6 overflow-hidden rounded-2xl border border-champagne/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-champagne/15 bg-noir-card/70 text-[11px] font-light uppercase tracking-[0.2em] text-champagne">
              <th className="px-5 py-3 font-normal">Aro</th>
              <th className="px-5 py-3 font-normal">Diâmetro</th>
              <th className="px-5 py-3 font-normal">Contorno</th>
            </tr>
          </thead>
          <tbody>
            {[12, 14, 16, 18, 20, 22, 24, 26].map((n) => {
              const d = aroDiameter(n);
              return (
                <tr key={n} className="border-b border-champagne/5 font-extralight text-ivory-muted last:border-0">
                  <td className="px-5 py-2.5 text-ivory">{n}</td>
                  <td className="px-5 py-2.5">{fmt(d)} mm</td>
                  <td className="px-5 py-2.5">{fmt(d * Math.PI)} mm</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
