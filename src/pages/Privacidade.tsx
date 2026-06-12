import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

const PRIVACIDADE_SECTIONS = [
  {
    titulo: "Cláusula 1ª — Do Controlador de Dados e Escopo de Aplicação",
    conteudo: [
      "1.1. Esta Política de Privacidade e Proteção de Dados regula, de forma estrita e solene, o tratamento de dados pessoais dos Usuários que acessam a plataforma digital da KR.JEWELRY, em conformidade com as regras estabelecidas pela Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).",
      "1.2. O Controlador de Dados, responsável por tomar as decisões referentes ao tratamento de dados pessoais coletados no âmbito da relação comercial descrita, é a pessoa jurídica titular da KR.JEWELRY.",
    ],
  },
  {
    titulo: "Cláusula 2ª — Da Não Coleta de Dados Pessoais em Ambiente Web e Finalidade",
    conteudo: [
      "2.1. Em observância ao princípio da minimização dos dados (Art. 6º, III, da LGPD), este site institucional foi estruturado sob o conceito de privacidade por padrão (Privacy by Design). Por conseguinte, esta plataforma digital não dispõe de formulários internos de cadastro, ferramentas de rastreamento de comportamento individual ou banco de dados próprio para armazenamento de informações pessoais em nuvem ou servidores externos.",
      "2.2. A finalidade exclusiva do site é atuar como mostruário e catálogo interativo das coleções exclusivas em ouro 18k, servindo de vetor para a comunicação direta e consensual a ser iniciada pelo Usuário com a nossa equipe de atendimento via aplicativos de mensagens.",
    ],
  },
  {
    titulo: "Cláusula 3ª — Do Armazenamento Local e Lista de Desejos",
    conteudo: [
      "3.1. A ferramenta de 'Lista de Desejos' (Wishlist) opera exclusivamente no lado do cliente (Client-Side Storage) por meio da tecnologia de Armazenamento Local (localStorage) do navegador de internet utilizado pelo Usuário.",
      "3.2. As coleções salvas no formato de favoritos não são transmitidas, compartilhadas ou arquivadas nos servidores da KR.JEWELRY. As informações sobre as peças de interesse do Usuário permanecem sob sua exclusiva custódia digital e podem ser definitivamente eliminadas a qualquer tempo mediante a limpeza do cache de navegação do dispositivo.",
    ],
  },
  {
    titulo: "Cláusula 4ª — Dos Canais Externos de Atendimento (WhatsApp e Instagram)",
    conteudo: [
      "4.1. Ao acionar voluntariamente os botões de redirecionamento para o WhatsApp ou Instagram, o Usuário estabelece comunicação em plataformas controladas por terceiros (Meta Platforms, Inc.), as quais possuem políticas de privacidade, termos de uso e medidas de segurança próprios, fora do controle da KR.JEWELRY.",
      "4.2. As informações compartilhadas voluntariamente pelo Usuário no decorrer do atendimento personalizado (tais como nome, endereço para entrega corporativa com seguro, dados de faturamento para nota fiscal, medidas de aros e preferências de joias) serão tratadas exclusivamente para fins de execução de contrato ou de procedimentos preliminares a pedido do Usuário (Art. 7º, V, da LGPD).",
    ],
  },
  {
    titulo: "Cláusula 5ª — Dos Direitos dos Titulares de Dados Pessoais",
    conteudo: [
      "5.1. A KR.JEWELRY garante ao Usuário o livre exercício dos direitos fundamentais previstos no Artigo 18 da LGPD, os quais compreendem:",
      "I - Confirmação da existência de tratamento de seus dados pessoais coletados em conversas de atendimento;",
      "II - Acesso facilitado e gratuito a tais dados;",
      "III - Correção de dados incompletos, inexatos ou desatualizados;",
      "IV - Eliminação dos dados pessoais tratados com o consentimento do titular, ressalvadas as hipóteses de guarda obrigatória por obrigação legal ou regulatória (como a emissão e manutenção de notas fiscais de venda de joias por prazos tributários);",
      "V - Revogação do consentimento para tratamento futuro.",
    ],
  },
  {
    titulo: "Cláusula 6ª — Dos Padrões de Segurança da Informação",
    conteudo: [
      "6.1. O tráfego de dados neste site é integralmente protegido por protocolo de criptografia de segurança de ponta a ponta (SSL/TLS), garantindo que a conexão entre o navegador do Usuário e os servidores de hospedagem não sofra interceptação ou manipulação maliciosa por parte de terceiros.",
      "6.2. Toda e qualquer informação compartilhada nos canais oficiais de atendimento é armazenada em dispositivos seguros com controle de acesso rigoroso, sendo tratada exclusivamente por profissionais devidamente instruídos sob termo de confidencialidade comercial.",
    ],
  },
  {
    titulo: "Cláusula 7ª — Do Encarregado pelo Tratamento de Dados (DPO) e Canal de Ouvidoria",
    conteudo: [
      "7.1. Para fins de atendimento de requisições de privacidade, esclarecimento de dúvidas jurídicas sobre esta política ou comunicação de qualquer incidente que envolva dados pessoais, fica designado o canal de privacidade oficial operacionalizado através do WhatsApp indicado no atendimento comercial da marca.",
      "7.2. A KR.JEWELRY compromete-se a analisar e responder formalmente a qualquer solicitação dos titulares de dados no prazo legal estabelecido pelas resoluções da Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
];

export function PrivacidadePage() {
  return (
    <PageShell
      eyebrow="Institucional"
      title="Política de privacidade"
      intro="Este documento formaliza as práticas adotadas pela KR.JEWELRY para a estrita observância da Lei Geral de Proteção de Dados (LGPD) e o respeito aos direitos fundamentais de privacidade de nossos clientes."
    >
      <div className="space-y-8 text-justify">
        {PRIVACIDADE_SECTIONS.map((section) => (
          <section key={section.titulo} className="space-y-3">
            <h2 className="font-display text-xl font-normal text-ivory">
              {section.titulo}
            </h2>
            {section.conteudo.map((paragrafo, idx) => (
              <p
                key={idx}
                className="text-sm font-extralight leading-relaxed text-ivory-muted"
              >
                {paragrafo}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-12 border-t border-champagne/10 pt-8 text-xs font-extralight text-ivory-muted/60 text-center">
        <p>Última atualização deste instrumento: junho de 2026.</p>
      </div>

      <WhatsCta message="Olá! Li a Política de Privacidade do site e gostaria de solicitar informações sobre o tratamento dos meus dados.">
        Contatar Encarregado de Proteção de Dados (DPO)
      </WhatsCta>
    </PageShell>
  );
}
