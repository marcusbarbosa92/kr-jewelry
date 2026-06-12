import React, { useState, useEffect } from "react";
import { ArrowRight, Star, Heart, X } from "lucide-react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import {
  AurumMark,
  AuthenticitySeal,
  HallmarkChip,
  WhatsAppIcon,
} from "../components/ui/Icons.tsx";
import { Reveal } from "../components/ui/Reveal.tsx";
import { QuizSection } from "../components/features/Quiz.tsx";
import { COLLECTIONS } from "../constants/collections.ts";
import { whatsappLink, img } from "../utils/helpers.ts";
import { Collection } from "../types/index.ts";

interface HomeProps {
  wishlist: {
    items: string[];
    toggle: (name: string) => void;
    clear: () => void;
  };
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("referrerpolicy", "no-referrer");
      videoRef.current.src =
        "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sparkling-gold-jewelry-41740-large.mp4";
    }
  }, []);

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-[120%] w-full object-cover opacity-50"
          poster={img("photo-1515562141207-7a88fb7ce338", 1200)}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-noir/90 via-noir/60 to-noir" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-36 text-center">
        <span className="text-[10px] font-light uppercase tracking-[0.45em] text-champagne">
          Alta Joalheria
        </span>

        <h1 className="mt-8 font-display text-5xl font-light leading-[1.12] text-ivory sm:text-6xl lg:text-7.5xl">
          Joias que contam
          <br />
          <em className="gold-text font-normal not-italic">a sua história</em>
        </h1>

        <p className="mt-8 max-w-lg text-[15px] font-extralight leading-relaxed text-ivory-muted">
          Peças autorais em ouro 18k e pedrarias selecionadas. Atendimento
          individual e curadoria exclusiva pelo WhatsApp.
        </p>

        <div className="mt-12">
          <a
            href={whatsappLink(
              "Olá! Cheguei pelo site da KR.JEWELRY e quero ajuda para escolher uma joia."
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-champagne/45 bg-noir-card/40 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-champagne-light backdrop-blur-sm transition-all duration-500 hover:bg-champagne hover:text-noir"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Iniciar Atendimento
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
              strokeWidth={1.7}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Coleções --------------------------------- */

interface CollectionCardProps {
  item: Collection;
  delay: number;
  saved: boolean;
  onToggleSave: (name: string) => void;
  onSelect: (item: Collection) => void;
}

function CollectionCard({ item, delay, saved, onToggleSave, onSelect }: CollectionCardProps) {
  return (
    <Reveal delay={delay} className={item.span}>
      <div className={`relative ${item.height} w-full group overflow-hidden rounded-xl border border-champagne/10 bg-noir-card`}>
        <button
          onClick={() => onSelect(item)}
          className="absolute inset-0 block h-full w-full text-left cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/95 via-noir/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="text-[10px] font-light uppercase tracking-[0.3em] text-champagne">
              {item.collection}
            </p>
            <h3 className="mt-1 font-display text-2xl font-light text-ivory">
              {item.name}
            </h3>
            <p className="mt-2 max-w-xs text-xs font-extralight leading-relaxed text-ivory-muted opacity-80">
              {item.description}
            </p>
          </div>
        </button>

        <button
          onClick={() => onToggleSave(item.name)}
          aria-label={saved ? "Remover dos favoritos" : "Salvar nos favoritos"}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 bg-noir/60 backdrop-blur-md transition-all duration-300 hover:border-champagne"
        >
          <Heart
            className={`h-4.5 w-4.5 transition-colors duration-300 ${
              saved ? "fill-champagne text-champagne" : "text-ivory"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </Reveal>
  );
}

interface CollectionsProps {
  wishlist: {
    items: string[];
    toggle: (name: string) => void;
    clear: () => void;
  };
  onSelectCollection: (item: Collection) => void;
}

function Collections({ wishlist, onSelectCollection }: CollectionsProps) {
  return (
    <section id="colecoes" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <Reveal className="mb-14 text-center">
        <p className="text-[10px] font-light uppercase tracking-[0.4em] text-champagne">
          Vitrine
        </p>
        <h2 className="mt-3 font-display text-3xl font-light text-ivory sm:text-4xl">
          Coleções <em className="gold-text font-normal not-italic">Assinatura</em>
        </h2>
        <div className="hairline mx-auto mt-6 h-px w-20" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {COLLECTIONS.map((item, i) => (
          <CollectionCard
            key={item.name}
            item={item}
            delay={i * 100}
            saved={wishlist.items.includes(item.name)}
            onToggleSave={wishlist.toggle}
            onSelect={onSelectCollection}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Atendimento -------------------------------- */

const STEPS = [
  {
    step: "01",
    title: "Curadoria Individual",
    description: "Apresentação de peças via fotos e vídeos reais, sem intermediários ou automações.",
  },
  {
    step: "02",
    title: "Ajuste e Personalização",
    description: "Gravação de datas e nomes, regulagem de aros e seleção sob medida de gemas.",
  },
  {
    step: "03",
    title: "Entrega Assegurada",
    description: "Envios lacrados com cobertura total de seguro e rastreio direto até seu endereço.",
  },
];

function HowItWorks() {
  return (
    <section id="atendimento" className="relative overflow-hidden bg-noir-soft py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="text-[10px] font-light uppercase tracking-[0.4em] text-champagne">
            A Experiência
          </p>
          <h2 className="mt-3 font-display text-3xl font-light text-ivory sm:text-4xl">
            Atendimento <em className="gold-text font-normal not-italic">Exclusivo</em>
          </h2>
          <div className="hairline mx-auto mt-6 h-px w-20" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="border-t border-champagne/15 pt-6">
                <span className="font-display text-[11px] tracking-[0.3em] text-champagne">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-light text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-extralight leading-relaxed text-ivory-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Convite Final (CTA) --------------------------- */

function FinalInvitation() {
  return (
    <section className="relative overflow-hidden py-28 text-center border-t border-champagne/10">
      <Reveal className="mx-auto max-w-xl px-5">
        <div className="flex justify-center mb-6">
          <AuthenticitySeal className="h-24 w-24" />
        </div>
        <h2 className="font-display text-3xl font-light text-ivory sm:text-4xl">
          Sua próxima joia,
          <br />
          <em className="gold-text font-normal not-italic">sob curadoria direta.</em>
        </h2>
        <p className="mt-5 text-sm font-extralight leading-relaxed text-ivory-muted">
          Converse conosco pelo WhatsApp para conhecer as opções disponíveis,
          solicitar fotos detalhadas e esclarecer medidas sem qualquer compromisso.
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink(
              "Olá! Estou procurando uma joia especial. Pode me enviar sugestões com fotos e valores?"
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-champagne/40 bg-champagne/5 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-champagne-light transition-all duration-500 hover:bg-champagne hover:text-noir"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar Sugestões
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------- Detalhes da Coleção (Modal) --------------------- */

interface CollectionModalProps {
  item: Collection | null;
  onClose: () => void;
  saved: boolean;
  onToggleSave: (name: string) => void;
}

function CollectionModal({ item, onClose, saved, onToggleSave }: CollectionModalProps) {
  const [consentChecked, setConsentChecked] = useState(false);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      setConsentChecked(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-noir/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-champagne/15 bg-noir-soft shadow-2xl"
        >
          {/* Header Image */}
          <div className="relative h-56 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-soft via-transparent to-black/30" />

            {/* Top Buttons on Image */}
            <button
              onClick={() => onToggleSave(item.name)}
              aria-label={saved ? "Remover dos favoritos" : "Salvar nos favoritos"}
              className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 bg-noir/50 backdrop-blur-md text-ivory transition-all duration-300 hover:border-champagne"
            >
              <Heart
                className={`h-4.5 w-4.5 transition-colors duration-300 ${
                  saved ? "fill-champagne text-champagne" : "text-ivory"
                }`}
                strokeWidth={1.5}
              />
            </button>

            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-champagne/20 bg-noir/50 backdrop-blur-md text-ivory-muted transition-all duration-300 hover:text-champagne hover:border-champagne"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-[10px] font-light uppercase tracking-[0.25em] text-champagne">
              {item.collection}
            </p>
            <h3 className="mt-1 font-display text-2.5xl font-light text-ivory">
              {item.name}
            </h3>
            <p className="mt-3 text-sm font-extralight leading-relaxed text-ivory-muted">
              {item.description}
            </p>

            {/* Certifications and specs box */}
            <div className="mt-5 rounded-xl border border-champagne/10 bg-noir-card/50 p-4 text-left">
              <h4 className="text-[10px] font-light uppercase tracking-[0.18em] text-champagne mb-3">
                Especificações de Alta Joalheria
              </h4>
              <ul className="space-y-2.5 text-xs font-extralight text-ivory-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" />
                  Metal precioso: Ouro 18k legítimo (Teor AU 750)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" />
                  Ajuste de aro sob medida antes da entrega
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" />
                  Estojo premium e certificado de autenticidade inclusos
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne/70" />
                  Envio seguro lacrado com cobertura total de sinistro
                </li>
              </ul>
            </div>

            {/* Consent Box */}
            <div className="mt-5 flex items-start gap-2.5 text-left">
              <input
                type="checkbox"
                id="modal-consent"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-champagne/30 bg-noir text-champagne accent-champagne focus:ring-0 cursor-pointer"
              />
              <label
                htmlFor="modal-consent"
                className="text-[11.5px] font-extralight leading-relaxed text-ivory-muted/80 cursor-pointer select-none"
              >
                Declaro que concordo com os{" "}
                <a
                  href="#/termos"
                  target="_blank"
                  className="text-champagne-light underline decoration-champagne/20 underline-offset-2 hover:text-champagne"
                >
                  Termos de Uso
                </a>{" "}
                e a{" "}
                <a
                  href="#/privacidade"
                  target="_blank"
                  className="text-champagne-light underline decoration-champagne/20 underline-offset-2 hover:text-champagne"
                >
                  Política de Privacidade
                </a>.
              </label>
            </div>

            {/* Action Button */}
            <a
              href={whatsappLink(item.message)}
              target="_blank"
              rel="noreferrer"
              className={`group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 ${
                consentChecked
                  ? "hover:bg-champagne-light hover:shadow-[0_12px_48px_rgba(212,180,131,0.45)]"
                  : "opacity-40 pointer-events-none"
              }`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Solicitar Fotos e Valores
            </a>

            <button
              onClick={onClose}
              className="mt-4 w-full text-center text-xs font-light uppercase tracking-[0.2em] text-ivory-muted transition-colors duration-300 hover:text-champagne"
            >
              Continuar olhando
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ---------------------------------- Home ---------------------------------- */

export function Home({ wishlist }: HomeProps) {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <main>
      <Hero />
      <Collections wishlist={wishlist} onSelectCollection={setSelectedCollection} />
      <HowItWorks />
      <QuizSection />
      <FinalInvitation />
      <CollectionModal
        item={selectedCollection}
        onClose={() => setSelectedCollection(null)}
        saved={selectedCollection ? wishlist.items.includes(selectedCollection.name) : false}
        onToggleSave={wishlist.toggle}
      />
    </main>
  );
}
