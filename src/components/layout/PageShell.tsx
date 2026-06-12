import React, { ReactNode } from "react";

interface PageShellProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:pt-36 lg:px-0">
      <a
        href="#/"
        className="text-[11px] font-light uppercase tracking-[0.24em] text-ivory-muted transition-colors duration-300 hover:text-champagne"
      >
        ← Voltar ao início
      </a>
      <p className="mt-9 text-[11px] font-light uppercase tracking-[0.42em] text-champagne">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl font-light leading-tight text-ivory sm:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-5 max-w-xl text-[15px] font-extralight leading-relaxed text-ivory-muted">
          {intro}
        </p>
      )}
      <div className="hairline my-10 h-px w-24" />
      {children}
    </main>
  );
}
