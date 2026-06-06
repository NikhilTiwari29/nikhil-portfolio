"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Card3D.module.css";

type Card3DProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  intensity?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "contentClassName">;

export default function Card3D<T extends ElementType = "div">({
  as,
  children,
  className,
  contentClassName,
  intensity = 1,
  onPointerMove,
  onPointerLeave,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  ...props
}: Card3DProps<T>) {
  const Component = (as || "div") as ElementType;
  const cardRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const resetTilt = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--card-rotate-x", "0deg");
    card.style.setProperty("--card-rotate-y", "0deg");
    card.style.setProperty("--card-shine-x", "50%");
    card.style.setProperty("--card-shine-y", "50%");
    card.style.setProperty("--card-lift", "0px");
    delete card.dataset.tilted;
  }, []);

  const applyTilt = useCallback(
    (clientX: number, clientY: number, pointerType: string) => {
      const card = cardRef.current;
      if (!card || reducedMotionRef.current) return;

      const rect = card.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      const tilt = 16 * intensity;
      const rotateX = (0.5 - y) * tilt;
      const rotateY = (x - 0.5) * tilt;
      const lift = pointerType === "touch" ? "-4px" : "-6px";

      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
        card.style.setProperty("--card-rotate-y", `${rotateY}deg`);
        card.style.setProperty("--card-shine-x", `${x * 100}%`);
        card.style.setProperty("--card-shine-y", `${y * 100}%`);
        card.style.setProperty("--card-lift", lift);
        card.dataset.tilted = "true";
      });
    },
    [intensity],
  );

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    onPointerMove?.(event);
    if (event.pointerType === "mouse") {
      applyTilt(event.clientX, event.clientY, event.pointerType);
    }
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    onPointerLeave?.(event);
    resetTilt();
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    onPointerDown?.(event);
    if (event.pointerType === "touch") {
      applyTilt(event.clientX, event.clientY, event.pointerType);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    onPointerUp?.(event);
    if (event.pointerType === "touch") resetTilt();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLElement>) => {
    onPointerCancel?.(event);
    resetTilt();
  };

  return (
    <Component
      ref={cardRef}
      className={cn(styles.card3d, className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      {...props}
    >
      <span className={styles.card3dDepth} aria-hidden />
      <span className={styles.card3dGlare} aria-hidden />
      <div className={cn(styles.card3dContent, contentClassName)}>{children}</div>
    </Component>
  );
}
