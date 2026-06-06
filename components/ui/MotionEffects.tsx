"use client";

import { useEffect } from "react";
import gsap from "gsap";

const CARD_REVEALS = new Set(["card", "project", "resume", "contact", "metric"]);

function getRevealDelay(element: HTMLElement) {
  const parent = element.parentElement;
  if (!parent) return 0;

  const siblings = Array.from(
    parent.querySelectorAll<HTMLElement>(`[data-reveal="${element.dataset.reveal}"]`),
  );
  const index = siblings.indexOf(element);
  return index >= 0 ? index * 0.09 : 0;
}

export default function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const revealType = element.dataset.reveal ?? "";
          element.classList.add("is-revealed");

          const popElements = element.querySelectorAll<HTMLElement>("[data-pop]");
          if (popElements.length > 0) {
            gsap.fromTo(
              popElements,
              { opacity: 0, y: 10, z: -12 },
              {
                opacity: 1,
                y: 0,
                z: 0,
                duration: 0.38,
                stagger: 0.03,
                delay: CARD_REVEALS.has(revealType) ? 0.22 : 0.08,
                ease: "power2.out",
                transformPerspective: 900,
              },
            );
          }

          if (CARD_REVEALS.has(revealType)) {
            gsap.fromTo(
              element,
              {
                opacity: 0,
                y: 48,
                rotateX: 18,
                z: -36,
                transformPerspective: 1100,
                transformOrigin: "50% 100%",
              },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,
                z: 0,
                duration: 0.9,
                delay: getRevealDelay(element),
                ease: "power3.out",
              },
            );
          }

          observer.unobserve(element);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
