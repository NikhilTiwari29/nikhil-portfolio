"use client";

import { useEffect } from "react";
import gsap from "gsap";

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
          entry.target.classList.add("is-revealed");
          const popElements = entry.target.querySelectorAll<HTMLElement>("[data-pop]");
          if (popElements.length > 0) {
            gsap.fromTo(
              popElements,
              { opacity: 0, y: 8 },
              {
                opacity: 1,
                y: 0,
                duration: 0.32,
                stagger: 0.025,
                delay: 0.08,
                ease: "power2.out",
                clearProps: "transform",
              },
            );
          }
          observer.unobserve(entry.target);
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
