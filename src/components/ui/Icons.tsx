import React from "react";

interface IconProps {
  className?: string;
}

export function AurumMark({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="url(#aurum-gold)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.8"
      />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fill="url(#aurum-gold)"
        fontFamily="Cormorant Garamond, serif"
        fontSize="12.5"
        fontWeight="300"
      >
        KR
      </text>
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PadlockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none" />
      <path d="M12 16.3v1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5 20 5.5v6c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10v-6l8-3Z" strokeLinejoin="round" />
      <path d="m8.8 11.8 2.3 2.3 4.2-4.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WaxSealIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" strokeDasharray="2 1.6" />
      <path d="M12 7.5 16 12l-4 4.5L8 12l4-4.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function HallmarkChip({ className = "" }: IconProps) {
  return (
    <span
      className={`inline-flex items-center rounded border border-champagne/45 px-2 py-0.5 font-display text-[10px] font-medium tracking-[0.2em] text-champagne ${className}`}
    >
      AU 750
    </span>
  );
}

export function AuthenticitySeal({ className = "h-32 w-32" }: IconProps) {
  return (
    <div className={`relative ${className}`} role="img" aria-label="Selo de autenticidade, ouro 18k AU 750">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path
            id="seal-text-path"
            d="M60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0"
            fill="none"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="57"
          fill="none"
          stroke="url(#aurum-gold)"
          strokeWidth="1"
          strokeDasharray="2.5 3.5"
          opacity="0.9"
        />
        <circle cx="60" cy="60" r="33" fill="none" stroke="url(#aurum-gold)" strokeWidth="0.8" opacity="0.7" />
        <text fontSize="8.6" letterSpacing="1.6" fill="#d4b483" fontFamily="Jost, sans-serif">
          <textPath href="#seal-text-path">AUTENTICIDADE GARANTIDA • OURO 18K • AU 750 •</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <AurumMark className="h-10 w-10" />
      </div>
    </div>
  );
}
