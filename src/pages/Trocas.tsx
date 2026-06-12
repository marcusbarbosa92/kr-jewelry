import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

const TROCAS_SECTIONS = [
  {
    titulo: "Cláusula 1ª — Do Direito de Arrependimento (Art. 49 do CDC)",
    conteudo: [
      "1.1. Conforme estabelece o artigo 49 da Lei nº 8.078/1990 (Código de Defesa do Consumidor - CDC), nas compras realizadas fora do estabelecimento físico, o Usuário dispõe do prazo improrrogável de 7 (sete) dias corridos, contados a partir da data de recebimento do produto, para exercer o seu direito de arrependimento e manifestar a desistência da compra.",
      "1.2. O exercício do direito de arrependimento importa na devolução integral dos valores despendidos pelo Usuário na transação comercial, devidamente corrigidos. Todos os custos operacionais decorrentes da logística reversa de devolução do produto serão integralmente suportados pela KR.JEWELRY.",
    ],
  },
  {
    titulo: "Cláusula 2ª — Das Condições Físicas dos Produtos para Retorno",
    conteudo: [
      "2.1. Para que a desistência da compra ou a troca consensual seja formalizada e aceita pela KR.JEWELRY, o produto retornado deve atender cumulativamente aos seguintes requisitos:",
      "I - Estar em perfeito estado de conservação, sem qualquer indício físico de uso, alteração ou desgaste;",
      "II - Apresentar-se acondicionado em sua embalagem de segurança original (estojo de luxo, caixa protetora e proteções internas);",
      "III - Vir acompanhado de todos os seus acessórios originais, do Certificado de Autenticidade e Garantia vitalícia do Ouro 18k e da respectiva Nota Fiscal de compra.",
      "2.2. O produto devolvido passará por perícia técnica especializada realizada por nossos mestres joalheiros no prazo de até 5 (cinco) dias úteis após a entrega em nosso endereço de retorno. Constatada qualquer desconformidade ou indício de uso, a devolução será rejeitada e o produto reenviado ao Usuário com a cobrança dos custos de frete correspondentes.",
    ],
  },
  {
    titulo: "Cláusula 3ª — Da Garantia Legal e Contratual contra Vícios",
    conteudo: [
      "3.1. Em observância ao Artigo 26, II, do CDC, a KR.JEWELRY assegura ao Usuário a garantia legal de 90 (noventa) dias contra vícios aparentes ou de fácil constatação nos produtos fornecidos.",
      "3.2. Para além do prazo legal, a KR.JEWELRY outorga garantia contratual de autenticidade vitalícia sobre a pureza do ouro 18k (AU 750) e sobre a legitimidade das pedras naturais e gemas aplicadas a cada peça.",
      "3.3. A garantia contratual compreende serviços de limpeza, higienização e polimento profissional sem custos adicionais ao Usuário, desde que o frete de ida e retorno das joias seja por este custeado.",
    ],
  },
  {
    titulo: "Cláusula 4ª — Das Exclusões da Cobertura de Garantia",
    conteudo: [
      "4.1. Estão expressamente excluídos da cobertura de garantia os danos físicos nas joias decorrentes de:",
      "I - Quedas, impactos severos, torções ou atritos abrasivos que resultem em quebras, amassados ou perda de pedras;",
      "II - Contato com reagentes químicos, perfumes, cosméticos, cloro, protetor solar ou produtos de limpeza que causem oxidação ou alteração na tonalidade das ligas de ouro e gemas;",
      "III - Manutenção, ajustes de aro, gravações ou qualquer reforma executada por terceiros (ourives externos) sem a nossa prévia e expressa autorização por escrito.",
    ],
  },
  {
    titulo: "Cláusula 5ª — Das Joias Personalizadas e Sob Encomenda",
    conteudo: [
      "5.1. O direito de arrependimento simples e a troca consensual por conveniência não se aplicam aos produtos adquiridos sob encomenda personalizada, que tenham sido submetidos a modificações de design a pedido do Usuário ou que contenham gravações definitivas de nomes, iniciais, datas ou símbolos pessoais.",
      "5.2. A devolução de joias personalizadas será admitida única e exclusivamente em caso de vício oculto ou defeito técnico de fabricação devidamente periciado.",
    ],
  },
  {
    titulo: "Cláusula 6ª — Dos Prazos de Reembolso e Estorno Financeiro",
    conteudo: [
      "6.1. Após a aprovação técnica da devolução nos termos da Cláusula 2ª, o reembolso dos valores será processado em conformidade com o meio de pagamento originalmente utilizado pelo Usuário:",
      "I - Para pagamentos efetuados via Pix, a restituição do montante será processada no prazo máximo de até 48 (quarenta e oito) horas úteis diretamente na conta bancária do comprador vinculada ao CPF/CNPJ de origem;",
      "II - Para pagamentos efetuados via Cartão de Crédito, o estorno será comunicado à administradora do cartão em até 5 (cinco) dias úteis. O crédito efetivo na fatura do Usuário dar-se-á conforme as regras e prazos específicos de sua operadora financeira, ocorrendo habitualmente em até 2 (duas) faturas subsequentes.",
    ],
  },
];

export function TrocasPage() {
  return (
    <PageShell
      eyebrow="Institucional"
      title="Trocas, devoluções e reembolsos"
      intro="Esta Política estabelece as normas operacionais e jurídicas para troca e devolução de joias adquiridas na KR.JEWELRY, pautando-se pelas disposições imperativas do Código de Defesa do Consumidor brasileiro."
    >
      <div className="space-y-8 text-justify">
        {TROCAS_SECTIONS.map((section) => (
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
        <p>Última revisão operacional deste termo: junho de 2026.</p>
      </div>

      <WhatsCta message="Olá! Necessito iniciar um procedimento de troca ou devolução de peça comprada no site.">
        Solicitar procedimento de logística reversa
      </WhatsCta>
    </PageShell>
  );
}
