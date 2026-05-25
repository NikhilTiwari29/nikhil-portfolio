"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

type PortfolioGateProps = {
  onEnter: () => void;
};

export default function PortfolioGate({ onEnter }: PortfolioGateProps) {
  const [exiting, setExiting] = useState(false);
  const didEnterRef = useRef(false);

  const handleEnter = () => {
    if (didEnterRef.current) return;
    didEnterRef.current = true;
    onEnter();
    setExiting(true);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(4,4,6,0.92)] px-4 backdrop-blur-md transition-opacity duration-500 sm:px-6",
        exiting && "pointer-events-none opacity-0",
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-gate-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-[var(--bg-card)] p-6 text-center sm:max-w-lg sm:p-8 md:p-10">
        <p className="mb-2 font-sans text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[var(--accent-warm)]">
          Nikhil Tiwari
        </p>
        <h2
          id="portfolio-gate-title"
          className="m-0 font-[family-name:var(--font-syne)] text-[clamp(1.5rem,5vw,2rem)] font-bold leading-tight text-[var(--text-primary)]"
        >
          Welcome to my portfolio
        </h2>
        <button
          type="button"
          className="mt-6 w-full rounded-[0.6rem] bg-[var(--accent-warm)] px-5 py-3.5 font-sans text-[0.9rem] font-semibold text-[#1a0f08] transition-[filter,transform] hover:brightness-110 sm:mt-8 sm:w-auto sm:min-w-[14rem]"
          onPointerDown={handleEnter}
        >
          Click to enter portfolio
        </button>
      </div>
    </div>
  );
}
