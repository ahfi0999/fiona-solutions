"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

// Elementor Pro "Mouse Effects" (motion_fx_mouse), with the formulas measured on the live site:
//  - track (widget): translate = (0.5 - cursor/viewport) * speed * 100px on each axis ("opposite", the
//    Elementor default; "direct" flips the sign), eased by a 0.4s transform transition.
//    e.g. speed 0.4 -> +-20px, speed 1 -> +-50px.
//  - background (section "Background > Mouse Track"): the wrapper becomes a layer (100 + 10*speed)% of its
//    positioned parent, translated by -(cursor/viewport) * the overflow (opposite), eased over
//    1s cubic-bezier(0, .33, .07, 1.03). Put it as the first child of a `relative overflow-hidden` section.
//  - tilt: 3D tilt that follows the cursor (speed ~ degrees / 2).
type Dir = "opposite" | "direct";
type Props = {
  children?: ReactNode;
  track?: { speed?: number; direction?: Dir };
  tilt?: { speed?: number; direction?: Dir };
  background?: { speed?: number; direction?: Dir };
  className?: string;
  style?: CSSProperties;
};

export default function MouseEffect({ children, track, tilt, background, className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const trackSpeed = track?.speed ?? 1;
  const trackDir = track ? track.direction ?? "opposite" : null;
  const tiltSpeed = tilt?.speed ?? 4;
  const tiltDir = tilt ? tilt.direction ?? "direct" : null;
  const bgSpeed = background?.speed ?? 1;
  const bgDir = background ? background.direction ?? "opposite" : null;

  useEffect(() => {
    const el = ref.current;
    if (!el || (!trackDir && !tiltDir && !bgDir)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return; // no mouse on touch devices

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rx = e.clientX / window.innerWidth; // 0..1
        const ry = e.clientY / window.innerHeight;
        if (bgDir) {
          const parent = el.parentElement;
          if (!parent) return;
          const ox = el.offsetWidth - parent.clientWidth;
          const oy = el.offsetHeight - parent.clientHeight;
          const fx = bgDir === "direct" ? 1 - rx : rx;
          const fy = bgDir === "direct" ? 1 - ry : ry;
          el.style.transform = `translateX(${(-fx * ox).toFixed(2)}px) translateY(${(-fy * oy).toFixed(2)}px)`;
          return;
        }
        const parts: string[] = [];
        if (trackDir) {
          const d = trackDir === "direct" ? -1 : 1;
          parts.push(
            `translateX(${((0.5 - rx) * trackSpeed * 100 * d).toFixed(2)}px) translateY(${((0.5 - ry) * trackSpeed * 100 * d).toFixed(2)}px)`,
          );
        }
        if (tiltDir) {
          const s = tiltSpeed * 2; // degrees
          const d = tiltDir === "opposite" ? -1 : 1;
          parts.push(`perspective(1000px) rotateX(${(-(ry - 0.5) * s * d).toFixed(2)}deg) rotateY(${((rx - 0.5) * s * d).toFixed(2)}deg)`);
        }
        el.style.transform = parts.join(" ");
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [trackDir, trackSpeed, tiltDir, tiltSpeed, bgDir, bgSpeed]);

  if (bgDir) {
    const size = `${100 + 10 * bgSpeed}%`;
    return (
      <div
        ref={ref}
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 will-change-transform ${className}`}
        style={{ width: size, height: size, transition: "transform 1s cubic-bezier(0, 0.33, 0.07, 1.03)", ...style }}
      >
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={{ transition: "transform 0.4s", ...style }}>
      {children}
    </div>
  );
}
