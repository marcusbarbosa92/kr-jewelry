import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";

export function PrivacidadePage() {
  return (
    <PageShell
      eyebrow="Institucional"
      title="Política de privacidade"
      intro="Em respeito à sua privacidade e à Lei Geral de Proteção de Dados (LGPD), explicamos aqui, em linguagem simples, como este site funciona."
    >
      <div className="space-y-8">
        {[
          {
            t: "O que coletamos neste site",
            p: "Nada. Este site não tem formulários, não usa cookies de rastreamento e não armazena seus dados pessoais em servidores.",
          },
          {
            t: "Lista de desejos",
            p: "As coleções que você salva no coração ficam guardadas apenas no seu próprio navegador (armazenamento local). Elas não chegam até nós e você pode apagá-las quando quiser, limpando a lista ou os dados do navegador.",
          },
          {
            t: "WhatsApp e Instagram",
            p: "Quando você toca em um botão de WhatsApp ou Instagram, a conversa continua nessas plataformas, que possuem políticas de privacidade próprias. Usamos as informações que você compartilha na conversa somente para o seu atendimento.",
          },
          {
            t: "Seus direitos",
            p: "A LGPD garante a você o acesso, a correção e a exclusão dos seus dados. Para exercer qualquer um desses direitos sobre as conversas de atendimento, basta nos chamar no WhatsApp.",
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

      <p className="mt-12 text-xs font-extralight text-ivory-muted/70">
        Última atualização: junho de 2026.
      </p>
    </PageShell>
  );
}
