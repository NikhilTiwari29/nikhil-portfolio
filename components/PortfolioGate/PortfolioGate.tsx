"use client";

import { useRef, useState } from "react";
import styles from "./PortfolioGate.module.css";

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
      className={`${styles.overlay} ${exiting ? styles.overlayExiting : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-gate-title"
    >
      <div className={styles.card}>
        <p className={styles.label}>Nikhil Tiwari</p>
        <h2 id="portfolio-gate-title" className={styles.title}>
          Welcome to my portfolio
        </h2>
        <button
          type="button"
          className={styles.enterButton}
          onPointerDown={handleEnter}
        >
          Click to enter portfolio
        </button>
      </div>
    </div>
  );
}
