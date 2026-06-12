import React from "react";
import { PageShell } from "../components/layout/PageShell.tsx";
import { WhatsCta } from "../components/ui/WhatsCta.tsx";

const TERMOS_SECTIONS = [
  {
    titulo: "Cláusula 1ª — Do Objeto e Escopo de Atuação",
    conteudo: [
      "1.1. O presente instrumento estabelece os Termos de Uso e as Condições Gerais de Compra aplicáveis aos consumidores e visitantes (doravante denominados 'Usuário') do site da KR.JEWELRY.",
      "1.2. A KR.JEWELRY atua sob o modelo de curadoria e venda sob consulta de alta joalheria em ouro 18k (teor AU 750) e pedrarias naturais selecionadas. A plataforma digital funciona como catálogo conceitual e ponto de partida para o atendimento individualizado prestado via canais oficiais de comunicação instantânea.",
    ],
  },
  {
    titulo: "Cláusula 2ª — Do Modelo de Negócio e Atendimento Personalizado",
    conteudo: [
      "2.1. O Usuário reconhece que a aquisição final das peças catalogadas está condicionada à interação direta com nossos consultores através do WhatsApp ou Instagram oficiais, garantindo atendimento próximo de pessoa para pessoa.",
      "2.2. A KR.JEWELRY compromete-se a fornecer ao Usuário, previamente à conclusão de qualquer transação financeira, fotos reais detalhadas, registros de vídeo de alta definição, especificações técnicas completas do teor do ouro e laudo das gemas (quando aplicável), bem como todas as orientações sobre medidas de aros e comprimentos.",
    ],
  },
  {
    titulo: "Cláusula 3ª — Das Condições Comerciais, Preços e Forma de Pagamento",
    conteudo: [
      "3.1. Os valores informados durante o atendimento personalizado estão sujeitos a oscilações de mercado decorrentes da cotação internacional do ouro e das gemas preciosas, bem como dos custos de produção artesanal.",
      "3.2. As transações financeiras serão realizadas por meios de pagamento seguros e homologados (Pix corporativo ou operadoras de cartão de crédito). Nenhuma venda será concluída sem a prévia emissão do respectivo link de pagamento ou indicação de conta corrente corporativa oficial vinculada ao CNPJ da marca.",
    ],
  },
  {
    titulo: "Cláusula 4ª — Da Entrega e Cobertura de Seguro de Transporte",
    conteudo: [
      "4.1. Todos os envios de produtos da KR.JEWELRY são realizados na modalidade registrada com cobertura total de seguro contra extravio, roubo ou dano físico durante o percurso, sob responsabilidade da transportadora parceira contratada.",
      "4.2. O prazo de entrega é calculado de forma individualizada com base na localidade de destino do Usuário e na eventual necessidade de ajustes de aro ou personalizações. O código de rastreamento oficial será disponibilizado imediatamente após a postagem da mercadoria.",
      "4.3. É dever do Usuário inspecionar a integridade da embalagem lacrada no momento do recebimento, devendo recusar a entrega caso observe indícios de violação ou avarias na caixa de segurança.",
    ],
  },
  {
    titulo: "Cláusula 5ª — Da Propriedade Intelectual e Direitos Autorais",
    conteudo: [
      "5.1. Toda a identidade visual, logotipo (marca nominativa e figurativa KR.JEWELRY), fotografias de produtos, designs de peças exclusivas, textos, estruturas de banco de dados e códigos computacionais presentes neste site são de propriedade exclusiva da KR.JEWELRY e protegidos pelas Leis nº 9.610/1998 (Direitos Autorais) e nº 9.279/1996 (Propriedade Industrial).",
      "5.2. É expressamente vedada a reprodução, cópia, distribuição, modificação ou uso comercial, no todo ou em parte, de qualquer conteúdo deste site sem a expressa e prévia anuência por escrito dos representantes legais da KR.JEWELRY.",
    ],
  },
  {
    titulo: "Cláusula 6ª — Das Responsabilidades e Declarações do Usuário",
    conteudo: [
      "6.1. Ao utilizar a plataforma e interagir com as funcionalidades (como a lista de desejos e quiz), o Usuário declara ser maior de idade capaz na forma da lei civil brasileira e compromete-se a fornecer informações verídicas e completas durante o atendimento.",
      "6.2. O Usuário é responsável por garantir que as medidas informadas (de aro de anel ou comprimento de correntes) foram aferidas seguindo as orientações do nosso Guia de Medidas ou confirmadas com o consultor antes do envio das peças.",
    ],
  },
  {
    titulo: "Cláusula 7ª — Das Disposições Finais e Foro de Eleição",
    conteudo: [
      "7.1. A KR.JEWELRY reserva-se o direito de modificar os presentes Termos de Uso a qualquer momento, visando sua adequação a novas exigências legais ou evoluções de suas atividades comerciais.",
      "7.2. Fica eleito o Foro da Comarca de domicílio do consumidor para dirimir quaisquer dúvidas ou controvérsias decorrentes da aplicação deste termo, em observância ao artigo 101, I, do Código de Defesa do Consumidor.",
    ],
  },
];

export function TermosPage() {
  return (
    <PageShell
      eyebrow="Compliance"
      title="Termos de uso e condições de compra"
      intro="Este contrato de adesão estabelece as regras e obrigações mútuas para navegação e aquisição de joias finas da KR.JEWELRY, em conformidade com as leis federais brasileiras."
    >
      <div className="space-y-8 text-justify">
        {TERMOS_SECTIONS.map((section) => (
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
        <p>Última revisão do instrumento jurídico: junho de 2026.</p>
      </div>

      <WhatsCta message="Olá! Li os Termos de Uso do site e gostaria de esclarecer uma dúvida sobre as condições de compra.">
        Esclarecer dúvidas comerciais
      </WhatsCta>
    </PageShell>
  );
}
