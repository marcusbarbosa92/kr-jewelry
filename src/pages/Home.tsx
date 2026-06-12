import React from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Gift,
  Heart,
  MessagesSquare,
  Quote,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  AurumMark,
  AuthenticitySeal,
  HallmarkChip,
  InstagramIcon,
  PadlockIcon,
  ShieldIcon,
  WaxSealIcon,
  WhatsAppIcon,
} from "../components/ui/Icons.tsx";
import { Reveal } from "../components/ui/Reveal.tsx";
import { QuizSection } from "../components/features/Quiz.tsx";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../constants/index.ts";
import { COLLECTIONS } from "../constants/collections.ts";
import { whatsappLink, img } from "../utils/helpers.ts";
import { useCountUp } from "../hooks/useCountUp.ts";
import { Collection, GuaranteeItem, TrustBadgeItem, TestimonialItem, InstagramPostItem } from "../types/index.ts";

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
  // Buttery-smooth GPU parallax using Framer Motion transforms instead of scroll state triggers
  const y = useTransform(scrollY, [0, 1000], [0, 280]);

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={img("photo-1515562141207-7a88fb7ce338", 2000)}
          alt="Anel de diamante sobre fundo escuro"
          className="h-[120%] w-full animate-kenburns object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/55 to-noir" />

      {/* Animated golden aura */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 animate-gradient-slow rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.22),transparent_65%)] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-36 text-center">
        <div className="animate-fade-up flex items-center gap-3 text-champagne" style={{ animationDelay: "150ms" }}>
          <span className="hairline h-px w-12" />
          <span className="text-[11px] font-light uppercase tracking-[0.42em]">
            Alta Joalheria
          </span>
          <span className="hairline h-px w-12" />
        </div>

        <h1
          className="animate-fade-up mt-8 font-display text-5xl font-light leading-[1.08] text-ivory sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "350ms" }}
        >
          Joias que contam
          <br />
          <em className="gold-text animate-shimmer font-medium not-italic">
            a sua história
          </em>
        </h1>

        <p
          className="animate-fade-up mt-7 max-w-xl text-base font-extralight leading-relaxed text-ivory-muted sm:text-lg"
          style={{ animationDelay: "550ms" }}
        >
          Peças em ouro 18k para presentear, celebrar ou se presentear.
          Atendimento individual pelo WhatsApp, da escolha à entrega.
        </p>

        <div
          className="animate-fade-up mt-11 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          style={{ animationDelay: "750ms" }}
        >
          <a
            href={whatsappLink(
              "Olá! Cheguei pelo site da KR.JEWELRY e quero ajuda para escolher uma joia."
            )}
            target="_blank"
            rel="noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-9 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 hover:-translate-y-0.5 hover:bg-champagne-light hover:shadow-[0_12px_48px_rgba(212,180,131,0.45)] sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com Personal Shopper
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
              strokeWidth={1.7}
            />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-ivory/25 bg-ivory/5 px-9 py-4 text-[13px] font-light uppercase tracking-[0.18em] text-ivory backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne/70 hover:text-champagne-light sm:w-auto"
          >
            <InstagramIcon className="h-4 w-4" />
            Seguir no Instagram
          </a>
        </div>

        {/* Trust row */}
        <div className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-6" style={{ animationDelay: "950ms" }}>
          <div className="flex items-center gap-2.5">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-champagne text-champagne" strokeWidth={1} />
              ))}
            </span>
            <span className="text-xs font-light tracking-wide text-ivory-muted">
              4,9 · +3.200 clientes
            </span>
          </div>
          <span className="hidden h-4 w-px bg-champagne/30 sm:block" />
          <div className="flex items-center gap-2.5 text-xs font-light tracking-wide text-ivory-muted">
            <HallmarkChip />
            Ouro 18k certificado
          </div>
        </div>

        <div className="animate-fade-in mt-16 flex flex-col items-center gap-3" style={{ animationDelay: "1400ms" }}>
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-ivory-muted/70">
            Descubra
          </span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-champagne/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Marquee --------------------------------- */

const MARQUEE_ITEMS = [
  "Ouro 18k certificado",
  "Design autoral",
  "Feito à mão no Brasil",
  "Envio segurado",
  "Garantia vitalícia",
  "Embalagem premium",
];

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-champagne/10 bg-noir-soft py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-noir-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-noir-soft to-transparent" />
      <div className="flex w-max animate-marquee items-center">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 text-[11px] font-light uppercase tracking-[0.34em] text-ivory-muted"
          >
            <span className="text-champagne">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- Coleções --------------------------------- */

interface CollectionCardProps {
  item: Collection;
  delay: number;
  saved: boolean;
  onToggleSave: (name: string) => void;
}

function CollectionCard({ item, delay, saved, onToggleSave }: CollectionCardProps) {
  return (
    <Reveal delay={delay} className={item.span}>
      <div className={`relative ${item.height} w-full`}>
        <a
          href={whatsappLink(item.message)}
          target="_blank"
          rel="noreferrer"
          className="group absolute inset-0 block overflow-hidden rounded-2xl border border-champagne/10 bg-noir-card transition-all duration-700 hover:-translate-y-2 hover:border-champagne/40 hover:shadow-[0_24px_64px_rgba(0,0,0,0.55),0_0_40px_rgba(212,180,131,0.12)]"
        >
          <img
            src={item.image}
            alt={`${item.name} — ${item.collection}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent transition-opacity duration-700 lg:via-noir/30 lg:group-hover:via-noir/15" />

          <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
            <p className="text-[11px] font-light uppercase tracking-[0.34em] text-champagne">
              {item.collection}
            </p>
            <h3 className="mt-2 font-display text-3xl font-light text-ivory lg:text-4xl">
              {item.name}
            </h3>
            <p className="mt-2 max-w-xs text-sm font-extralight text-ivory-muted transition-all delay-100 duration-500 lg:opacity-0 lg:group-hover:opacity-100">
              {item.description}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-noir/50 px-6 py-2.5 text-[11px] font-normal uppercase tracking-[0.2em] text-champagne-light backdrop-blur-md transition-all duration-500 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Consultar peças
            </span>
          </div>
        </a>

        <button
          onClick={() => onToggleSave(item.name)}
          aria-label={
            saved ? `Remover ${item.name} da lista de desejos` : `Salvar ${item.name} na lista de desejos`
          }
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/25 bg-noir/55 backdrop-blur-md transition-all duration-300 hover:border-champagne active:scale-90"
        >
          <Heart
            className={`h-5 w-5 transition-colors duration-300 ${
              saved ? "fill-champagne text-champagne" : "text-ivory"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </Reveal>
  );
}

function Collections({ wishlist }: HomeProps) {
  return (
    <section id="colecoes" className="relative mx-auto max-w-7xl px-5 py-28 lg:px-10 lg:py-36">
      <Reveal className="mb-16 text-center">
        <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
          Vitrine
        </p>
        <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
          Coleções <em className="gold-text font-medium not-italic">assinatura</em>
        </h2>
        <div className="hairline mx-auto mt-7 h-px w-28" />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {COLLECTIONS.map((item, i) => (
          <CollectionCard
            key={item.name}
            item={item}
            delay={i * 120}
            saved={wishlist.items.includes(item.name)}
            onToggleSave={wishlist.toggle}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Atendimento -------------------------------- */

const STEPS = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Escolha acompanhada",
    description:
      "Você conta a ocasião e o que procura. A personal shopper envia fotos e vídeos reais das peças que combinam com você.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Personalização",
    description:
      "Gravação de nomes e datas, ajuste de medida e pedras sob encomenda para deixar a joia com a sua cara.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Envio seguro",
    description:
      "Embalagem lacrada, transporte com seguro total e código de rastreio para você acompanhar até a entrega.",
  },
];

function HowItWorks() {
  return (
    <section id="atendimento" className="relative overflow-hidden bg-noir-soft py-28 lg:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[48rem] w-[48rem] animate-gradient-slow rounded-full bg-[radial-gradient(circle,rgba(176,141,87,0.1),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mb-20 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
            Experiência KR.JEWELRY
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Atendimento{" "}
            <em className="gold-text font-medium not-italic">exclusivo</em>, da
            escolha à entrega
          </h2>
          <div className="hairline mx-auto mt-7 h-px w-28" />
        </Reveal>

        <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="hairline absolute left-0 right-0 top-10 hidden h-px lg:block" />

          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 180}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-champagne/30 bg-noir-card backdrop-blur-md transition-all duration-700 group-hover:scale-110 group-hover:border-champagne group-hover:shadow-[0_0_44px_rgba(212,180,131,0.3)]">
                  <step.icon
                    className="h-7 w-7 text-champagne transition-transform duration-700 group-hover:-rotate-6"
                    strokeWidth={1.2}
                  />
                </div>
                <span className="mt-6 font-display text-sm tracking-[0.4em] text-champagne/60">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-2xl font-normal text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm font-extralight leading-relaxed text-ivory-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250} className="mt-20 text-center">
          <a
            href={whatsappLink(
              "Olá! Quero começar um atendimento personalizado. Estou procurando uma joia e gostaria de receber sugestões."
            )}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-champagne/40 bg-champagne/5 px-10 py-4 text-[13px] font-normal uppercase tracking-[0.2em] text-champagne-light backdrop-blur-md transition-all duration-500 hover:bg-champagne hover:text-noir hover:shadow-[0_0_44px_rgba(212,180,131,0.35)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Começar meu atendimento
            <ArrowRight
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
              strokeWidth={1.6}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Números --------------------------------- */

interface StatItemProps {
  stat: {
    target: number;
    format: (v: number) => string;
    suffix: string;
    label: string;
  };
  delay: number;
}

function StatItem({ stat, delay }: StatItemProps) {
  const [ref, value] = useCountUp(stat.target);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="flex flex-col items-center text-center">
        <span className="font-display text-5xl font-light leading-none lg:text-6xl">
          <span className="gold-text">{stat.format(value)}</span>
          {stat.suffix && (
            <span className="ml-1 text-2xl text-champagne lg:text-3xl">{stat.suffix}</span>
          )}
        </span>
        <span className="mt-3 max-w-[11rem] text-xs font-extralight uppercase tracking-[0.22em] text-ivory-muted">
          {stat.label}
        </span>
      </div>
    </Reveal>
  );
}

const STATS = [
  { target: 28, format: (v: number) => `${v}`, suffix: "anos", label: "de tradição em joalheria" },
  { target: 3200, format: (v: number) => `+${v.toLocaleString("pt-BR")}`, suffix: "", label: "clientes atendidas no Brasil" },
  { target: 49, format: (v: number) => (v / 10).toFixed(1).replace(".", ","), suffix: "★", label: "de avaliação média" },
  { target: 100, format: (v: number) => `${v}%`, suffix: "", label: "ouro 18k certificado" },
];

function Stats() {
  return (
    <section className="border-b border-champagne/10 bg-noir py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Depoimentos ------------------------------- */

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Atendimento impecável do começo ao fim. Me mandaram vídeo de todas as opções pelo WhatsApp e o anel chegou ainda mais bonito do que nas fotos.",
    name: "Mariana C.",
    detail: "São Paulo · Coleção Eternity",
  },
  {
    quote:
      "Tinha receio de comprar joia pela internet, mas me passaram tanta segurança que já estou na segunda compra. A embalagem é linda, parece presente de filme.",
    name: "Beatriz L.",
    detail: "Rio de Janeiro · Coleção Lumière",
  },
  {
    quote:
      "Pedi a gravação com a data do meu casamento e ficou perfeita. Atendimento atencioso de verdade, coisa rara hoje em dia.",
    name: "Camila R.",
    detail: "Belo Horizonte · Coleção Riviera",
  },
];

function Testimonials() {
  return (
    <section id="clientes" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[40rem] w-[40rem] animate-gradient-slow rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.07),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
            Depoimentos
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            O que dizem{" "}
            <em className="gold-text font-medium not-italic">nossas clientes</em>
          </h2>
          <div className="hairline mx-auto mt-7 h-px w-28" />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 140}>
              <figure className="group flex h-full flex-col rounded-2xl border border-champagne/10 bg-noir-card/70 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-champagne/40 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5),0_0_36px_rgba(212,180,131,0.1)]">
                <Quote
                  className="h-7 w-7 scale-x-[-1] text-champagne/50 transition-colors duration-500 group-hover:text-champagne"
                  strokeWidth={1.2}
                />
                <span className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-champagne text-champagne" strokeWidth={1} />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-sm font-extralight leading-relaxed text-ivory-muted">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-champagne/10 pt-5">
                  <p className="font-display text-lg text-ivory">{item.name}</p>
                  <p className="mt-0.5 text-xs font-light tracking-wide text-champagne/80">
                    {item.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Instagram feed ------------------------------ */

const INSTAGRAM_POSTS: InstagramPostItem[] = [
  { image: img("photo-1515562141207-7a88fb7ce338", 800), likes: "2.418", comments: "96" },
  { image: img("photo-1617038220319-276d3cfab638", 800), likes: "1.873", comments: "64" },
  { image: img("photo-1611591437281-460bfbe1220a", 800), likes: "3.205", comments: "142" },
  { image: img("photo-1610694955371-d4a3e0ce4b52", 800), likes: "1.547", comments: "58" },
  { image: img("photo-1506630448388-4e683c67ddb0", 800), likes: "4.082", comments: "187" },
  { image: img("photo-1573408301185-9146fe634ad0", 800), likes: "2.931", comments: "119" },
];

function InstagramFeed() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-10 lg:pb-36">
      <Reveal className="mb-16 text-center">
        <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
          Social
        </p>
        <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
          Quem usa,{" "}
          <em className="gold-text font-medium not-italic">brilha</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm font-extralight text-ivory-muted">
          Um pouco do que nossas clientes compartilham por aí.
          Siga{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-champagne-light underline-offset-4 transition-colors duration-300 hover:text-champagne hover:underline"
          >
            {INSTAGRAM_HANDLE}
          </a>{" "}
          no Instagram.
        </p>
        <div className="hairline mx-auto mt-7 h-px w-28" />
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {INSTAGRAM_POSTS.map((post, i) => (
          <Reveal key={post.image} delay={i * 90}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl border border-champagne/10"
            >
              <img
                src={post.image}
                alt="Cliente KR.JEWELRY usando joia exclusiva"
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-noir/30 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
                <div className="flex items-center gap-6 text-ivory">
                  <span className="flex items-center gap-2 text-sm font-light">
                    <Heart className="h-4 w-4 fill-champagne text-champagne" strokeWidth={1.5} />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-light">
                    <MessagesSquare className="h-4 w-4 text-champagne" strokeWidth={1.5} />
                    {post.comments}
                  </span>
                </div>
                <span className="flex translate-y-3 items-center gap-2 text-[11px] font-light uppercase tracking-[0.24em] text-champagne-light transition-transform duration-500 group-hover:translate-y-0">
                  <InstagramIcon className="h-3.5 w-3.5" />
                  Ver no Instagram
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Garantias -------------------------------- */

const GUARANTEES = [
  {
    icon: BadgeCheck,
    title: "Certificado de autenticidade",
    description:
      "Toda peça sai com certificado do ouro 18k e das pedras, além de nota fiscal.",
  },
  {
    icon: Gift,
    title: "Embalagem premium",
    description:
      "Estojo de veludo, lacre dourado e cartão escrito à mão. Abrir a caixa já faz parte do presente.",
  },
  {
    icon: Truck,
    title: "Envio 100% segurado",
    description:
      "Transporte com seguro total e rastreio em tempo real. Sua joia protegida da nossa casa até a sua.",
  },
  {
    icon: Award,
    title: "Garantia vitalícia",
    description:
      "Polimento, limpeza e revisão gratuitos sempre que você precisar. O brilho do primeiro dia, todos os dias.",
  },
];

const TRUST_BADGES = [
  {
    icon: PadlockIcon,
    title: "Compra 100% segura",
    caption: "Criptografia SSL de 256 bits",
  },
  {
    icon: ShieldIcon,
    title: "Dados protegidos",
    caption: "Em conformidade com a LGPD",
  },
  {
    icon: WaxSealIcon,
    title: "Lacre inviolável",
    caption: "Embalagem com selo de segurança",
  },
  {
    icon: AurumMark,
    title: "AU 750 · Ouro 18k",
    caption: "Teor atestado por laudo técnico",
  },
];

function Guarantees() {
  return (
    <section id="garantias" className="relative overflow-hidden bg-noir-soft py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[44rem] w-[44rem] animate-gradient-slow rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.08),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
            Confiança
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
            Luxo com{" "}
            <em className="gold-text font-medium not-italic">garantia</em>
          </h2>
          <div className="hairline mx-auto mt-7 h-px w-28" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-champagne/10 bg-noir-card/70 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-champagne/40 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5),0_0_36px_rgba(212,180,131,0.1)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/25 bg-champagne/5 transition-all duration-700 group-hover:scale-110 group-hover:border-champagne/70 group-hover:bg-champagne/10">
                  <item.icon
                    className="h-6 w-6 text-champagne transition-transform duration-700 group-hover:rotate-[8deg]"
                    strokeWidth={1.2}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-normal text-ivory">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-extralight leading-relaxed text-ivory-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Selos de segurança */}
        <Reveal delay={200} className="mt-10">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-champagne/10 bg-champagne/10 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.title}
                className="group flex items-center gap-4 bg-noir-soft px-6 py-5 transition-colors duration-500 hover:bg-noir-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/25 text-champagne transition-all duration-500 group-hover:scale-110 group-hover:border-champagne/60">
                  <badge.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-normal text-ivory">{badge.title}</span>
                  <span className="block text-xs font-extralight text-ivory-muted">
                    {badge.caption}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <img
        src={img("photo-1611591437281-460bfbe1220a", 2000)}
        alt="Alianças de ouro"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/60 to-noir" />

      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="flex justify-center">
          <AuthenticitySeal className="h-28 w-28 lg:h-32 lg:w-32" />
        </div>
        <h2 className="mt-9 font-display text-4xl font-light leading-tight text-ivory sm:text-5xl lg:text-6xl">
          Sua próxima joia está
          <br />
          <em className="gold-text animate-shimmer font-medium not-italic">
            a uma mensagem de distância.
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-extralight leading-relaxed text-ivory-muted">
          Chame no WhatsApp sem compromisso. Conte a ocasião e receba
          sugestões com fotos, vídeos e valores das peças.
        </p>
        <a
          href={whatsappLink(
            "Olá! Estou procurando uma joia especial. Pode me enviar sugestões com fotos e valores?"
          )}
          target="_blank"
          rel="noreferrer"
          className="group mt-11 inline-flex items-center gap-3 rounded-full bg-champagne px-11 py-5 text-[13px] font-medium uppercase tracking-[0.2em] text-noir transition-all duration-500 hover:-translate-y-1 hover:bg-champagne-light hover:shadow-[0_16px_56px_rgba(212,180,131,0.5)]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Quero receber sugestões
          <ArrowRight
            className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
            strokeWidth={1.7}
          />
        </a>
      </Reveal>
    </section>
  );
}

export function Home({ wishlist }: HomeProps) {
  return (
    <main>
      <Hero />
      <Marquee />
      <Collections wishlist={wishlist} />
      <HowItWorks />
      <Stats />
      <QuizSection />
      <Testimonials />
      <InstagramFeed />
      <Guarantees />
      <FinalCTA />
    </main>
  );
}
