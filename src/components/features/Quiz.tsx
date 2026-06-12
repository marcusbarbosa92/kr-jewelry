import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal.tsx";
import { WhatsAppIcon } from "../ui/Icons.tsx";
import { whatsappLink } from "../../utils/helpers.ts";
import { QuizStep, QuizOption } from "../../types/index.ts";
import { motion, AnimatePresence } from "framer-motion";

const QUIZ_STEPS: QuizStep[] = [
  {
    key: "quem",
    question: "Para quem é a joia?",
    options: [
      { label: "Um presente para alguém especial", frag: "um presente para alguém especial" },
      { label: "Para mim", frag: "uma joia para mim" },
      { label: "Casamento ou noivado", frag: "uma joia de casamento ou noivado" },
      { label: "Ainda estou só olhando", frag: "algo que ainda estou escolhendo com calma" },
    ],
  },
  {
    key: "tipo",
    question: "Que tipo de peça você procura?",
    options: [
      { label: "Anel", frag: "um anel" },
      { label: "Colar", frag: "um colar" },
      { label: "Brincos", frag: "brincos" },
      { label: "Pulseira", frag: "uma pulseira" },
      { label: "Estou aberta a sugestões", frag: "sugestões da personal shopper" },
    ],
  },
  {
    key: "valor",
    question: "Quanto você pensa em investir?",
    options: [
      { label: "Até R$ 1.000", frag: "posso investir até R$ 1.000" },
      { label: "De R$ 1.000 a R$ 3.000", frag: "penso em investir entre R$ 1.000 e R$ 3.000" },
      { label: "Acima de R$ 3.000", frag: "penso em investir acima de R$ 3.000" },
      { label: "Prefiro conversar sobre valores", frag: "prefiro falar sobre valores na conversa" },
    ],
  },
];

const STEP_LABELS: Record<string, string> = {
  quem: "Para quem",
  tipo: "Tipo de peça",
  valor: "Investimento",
};

export function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuizOption>>({});
  const [consentChecked, setConsentChecked] = useState(false);

  const pick = (key: string, option: QuizOption) => {
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setConsentChecked(false);
  };

  const done = step >= QUIZ_STEPS.length;
  const current = QUIZ_STEPS[step];

  const message = done
    ? `Olá! Respondi o quiz do site: procuro ${answers.tipo?.frag}, é ${answers.quem?.frag} e ${answers.valor?.frag}. Pode me enviar sugestões com fotos e valores?`
    : "";

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-44 top-1/4 h-[36rem] w-[36rem] animate-gradient-slow rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.08),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-5">
        <Reveal className="text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
            Sem compromisso
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Não sabe por{" "}
            <em className="gold-text font-medium not-italic">onde começar?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-extralight text-ivory-muted">
            Responda três perguntas rápidas e receba sugestões direto no
            WhatsApp, sem cadastro e sem e-mail.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 min-h-[380px] overflow-hidden rounded-3xl border border-champagne/15 bg-noir-card/70 p-6 backdrop-blur-md sm:p-10">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-light uppercase tracking-[0.26em] text-ivory-muted">
                      Pergunta {step + 1} de {QUIZ_STEPS.length}
                    </span>
                    <span className="flex gap-1.5">
                      {QUIZ_STEPS.map((s, i) => (
                        <span
                          key={s.key}
                          className={`h-1.5 w-6 rounded-full transition-colors duration-500 ${
                            i <= step ? "bg-champagne" : "bg-champagne/20"
                          }`}
                        />
                      ))}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-normal text-ivory sm:text-3xl">
                    {current.question}
                  </h3>

                  <div className="mt-7 flex flex-col gap-3">
                    {current.options.map((option) => {
                      const selected = answers[current.key]?.label === option.label;
                      return (
                        <button
                          key={option.label}
                          onClick={() => pick(current.key, option)}
                          className={`w-full rounded-xl border px-5 py-4 text-left text-[15px] font-light transition-all duration-300 active:scale-[0.99] ${
                            selected
                              ? "border-champagne bg-champagne/10 text-champagne-light"
                              : "border-champagne/15 text-ivory hover:border-champagne/50 hover:bg-champagne/5"
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>

                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="mt-6 text-xs font-light uppercase tracking-[0.22em] text-ivory-muted transition-colors duration-300 hover:text-champagne"
                    >
                      Voltar
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl font-normal text-ivory sm:text-3xl">
                    Tudo pronto.
                  </h3>
                  <p className="mt-3 text-sm font-extralight leading-relaxed text-ivory-muted">
                    Suas respostas seguem na mensagem. É só enviar e a personal
                    shopper responde com sugestões que combinam com o que você
                    procura.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {QUIZ_STEPS.map((s) => (
                      <li
                        key={s.key}
                        className="flex items-center justify-between gap-4 border-b border-champagne/10 pb-3 text-sm"
                      >
                        <span className="font-light uppercase tracking-[0.18em] text-[11px] text-ivory-muted">
                          {STEP_LABELS[s.key]}
                        </span>
                        <span className="text-right font-light text-ivory">
                          {answers[s.key]?.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-start gap-3 text-left">
                    <input
                      type="checkbox"
                      id="quiz-consent"
                      checked={consentChecked}
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-champagne/30 bg-noir text-champagne accent-champagne focus:ring-0 cursor-pointer"
                    />
                    <label
                      htmlFor="quiz-consent"
                      className="text-[12px] font-extralight leading-relaxed text-ivory-muted cursor-pointer select-none"
                    >
                      Declaro que li e aceito os{" "}
                      <a
                        href="#/termos"
                        target="_blank"
                        className="text-champagne-light underline decoration-champagne/20 underline-offset-2 hover:text-champagne hover:decoration-champagne"
                      >
                        Termos de Uso
                      </a>{" "}
                      e a{" "}
                      <a
                        href="#/privacidade"
                        target="_blank"
                        className="text-champagne-light underline decoration-champagne/20 underline-offset-2 hover:text-champagne hover:decoration-champagne"
                      >
                        Política de Privacidade
                      </a>{" "}
                      para tratamento dos meus dados.
                    </label>
                  </div>

                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    className={`group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 ${
                      consentChecked
                        ? "hover:-translate-y-0.5 hover:bg-champagne-light hover:shadow-[0_12px_48px_rgba(212,180,131,0.45)]"
                        : "opacity-40 pointer-events-none"
                    }`}
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Receber sugestões
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
                      strokeWidth={1.7}
                    />
                  </a>

                  <button
                    onClick={restart}
                    className="mt-5 w-full text-center text-xs font-light uppercase tracking-[0.22em] text-ivory-muted transition-colors duration-300 hover:text-champagne"
                  >
                    Refazer o quiz
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
