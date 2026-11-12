"use client";

import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from "react";

// Entrance animations, matching Elementor's on the live site:
// the element stays hidden until it scrolls into view, then plays the animation once.
// Live uses: fadeIn (most), fadeInUp; delays 200/400/600ms; speed "fast" (0.75s) or normal (1.25s).
export type RevealAnimation = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn";

type Props = {
  children: ReactNode;
  animation?: RevealAnimation;
  /** ms, like Elementor's animation_delay */
  delay?: number;
  /** Elementor: animated-fast = 0.75s, default = 1.25s, animated-slow = 2s */
  speed?: "fast" | "normal" | "slow";
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

const durations = { fast: 750, normal: 1250, slow: 2000 };

export default function Reveal({ children, animation = "fadeIn", delay = 0, speed = "normal", as: Tag = "div", className = "", style }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion is handled in globals.css (content shown, no animation).
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${shown ? `reveal-${animation}` : "reveal-hidden"} ${className}`}
      style={{ ...style, animationDuration: `${durations[speed]}ms`, animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
