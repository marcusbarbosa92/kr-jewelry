import React from "react";

export function GoldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="aurum-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b08d57" />
          <stop offset="50%" stopColor="#e8d5b0" />
          <stop offset="100%" stopColor="#b08d57" />
        </linearGradient>
      </defs>
    </svg>
  );
}
