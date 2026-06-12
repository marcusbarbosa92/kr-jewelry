import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons.tsx";
import { whatsappLink } from "../../utils/helpers.ts";

interface WhatsCtaProps {
  message: string;
  children: ReactNode;
}

export function WhatsCta({ message, children }: WhatsCtaProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-noir transition-all duration-500 hover:-translate-y-0.5 hover:bg-champagne-light hover:shadow-[0_12px_48px_rgba(212,180,131,0.45)] sm:w-auto"
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5"
        strokeWidth={1.7}
      />
    </a>
  );
}
