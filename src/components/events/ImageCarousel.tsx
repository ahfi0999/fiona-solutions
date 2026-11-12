"use client";

import Image from "next/image";
import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// One-image-at-a-time slider reproducing the live Elementor image carousel (Swiper) settings:
// slides_to_show 1, effect "slide", speed 500ms, infinite loop (seamless, via cloned edge slides),
// autoplay every 5000ms, pause_on_hover, pause_on_interaction (= Swiper disableOnInteraction: autoplay
// stops for good after the user clicks an arrow or swipes), arrows inside, touch/mouse drag to swipe.
const SPEED = 500;
const CHEVRON_LEFT =
  "M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z";
const CHEVRON_RIGHT =
  "M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z";
const DELAY = 5000;

export default function ImageCarousel({
  images,
  alt,
  arrowInset = -2,
}: {
  images: string[];
  alt: string;
  /** px between the image edge and the arrow (live: 8 for the Heckathon album, -2 for the others) */
  arrowInset?: number;
}) {
  const n = images.length;
  const loop = n > 1;
  // Extended track: [last clone, ...images, first clone]; `pos` indexes into it (1 = first real slide).
  const slides = loop ? [images[n - 1], ...images, images[0]] : images;
  const [pos, setPos] = useState(loop ? 1 : 0);
  const [animate, setAnimate] = useState(false);
  const [drag, setDrag] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const moving = useRef(false);
  const viewport = useRef<HTMLDivElement>(null);
  const pointer = useRef<{
    id: number;
    x: number;
    y: number;
    t: number;
    axis: "x" | "y" | null;
  } | null>(null);

  const posRef = useRef(loop ? 1 : 0);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // End of a slide transition. Seamless loop: if we landed on a clone, jump (without transition) to the
  // matching real slide. Driven by transitionend, with a timer fallback for when no transition event fires
  // (e.g. background tabs, or a snap-back where the transform did not change).
  const settle = useCallback(() => {
    clearTimeout(settleTimer.current);
    moving.current = false;
    const p = posRef.current;
    if (loop && (p === 0 || p === n + 1)) {
      posRef.current = p === 0 ? n : 1;
      setAnimate(false);
      setPos(posRef.current);
    }
  }, [loop, n]);

  const startMove = useCallback(() => {
    moving.current = true;
    setAnimate(true);
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(settle, SPEED + 100);
  }, [settle]);

  useEffect(() => () => clearTimeout(settleTimer.current), []);

  const slideTo = useCallback(
    (next: number) => {
      posRef.current = next;
      startMove();
      setPos(next);
    },
    [startMove],
  );

  const go = useCallback(
    (d: number) => {
      if (!loop || moving.current) return;
      slideTo(posRef.current + d);
    },
    [loop, slideTo],
  );

  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target === e.currentTarget && moving.current) settle();
  };

  // Autoplay: next slide DELAY ms after the previous one settled; paused on hover, stopped after interaction.
  useEffect(() => {
    if (!loop || hovered || stopped) return;
    const t = setTimeout(() => go(1), DELAY);
    return () => clearTimeout(t);
  }, [loop, hovered, stopped, pos, go]);

  const interact = (d: number) => {
    setStopped(true);
    go(d);
  };

  // Swiper-like touch/mouse swiping: the track follows the pointer; release past half a slide,
  // or a quick flick, moves to the neighbouring slide, otherwise it snaps back.
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !loop ||
      moving.current ||
      (e.pointerType === "mouse" && e.button !== 0)
    )
      return;
    if ((e.target as HTMLElement).closest("button")) return;
    pointer.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
      axis: null,
    };
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const p = pointer.current;
    if (!p || p.id !== e.pointerId) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    if (!p.axis) {
      if (Math.hypot(dx, dy) < 5) return;
      p.axis = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      if (p.axis === "y") {
        pointer.current = null; // vertical gesture: let the page scroll
        return;
      }
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* pointer already released */
      }
      setAnimate(false);
      setStopped(true); // Swiper disableOnInteraction: any swipe stops autoplay
    }
    setDrag(dx);
  };
  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const p = pointer.current;
    pointer.current = null;
    if (!p || p.id !== e.pointerId || p.axis !== "x") return;
    const dx = e.clientX - p.x;
    const w = viewport.current?.offsetWidth ?? 1;
    const quick = performance.now() - p.t < 300 && Math.abs(dx) > 10;
    setDrag(0);
    if (quick || Math.abs(dx) > w / 2) {
      slideTo(posRef.current + (dx < 0 ? 1 : -1));
    } else if (dx !== 0) {
      startMove(); // snap back
    }
  };

  return (
    <div
      className="relative w-full touch-pan-y select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(e) => e.preventDefault()}
    >
      <div ref={viewport} className="aspect-[6/5] w-full overflow-hidden">
        <div
          className="flex h-full"
          style={{
            transform: `translate3d(calc(${-pos * 100}% + ${drag}px), 0, 0)`,
            transition: animate ? `transform ${SPEED}ms ease` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((src, i) => (
            <Image
              key={`${i}-${src}`}
              src={src}
              alt={`${alt} ${loop ? ((i - 1 + n) % n) + 1 : i + 1}`}
              width={600}
              height={500}
              sizes="(max-width: 768px) 100vw, 400px"
              draggable={false}
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
      {loop && (
        <>
          <Arrow dir="prev" inset={arrowInset} onClick={() => interact(-1)} />
          <Arrow dir="next" inset={arrowInset} onClick={() => interact(1)} />
        </>
      )}
    </div>
  );
}

function Arrow({
  dir,
  inset,
  onClick,
}: {
  dir: "prev" | "next";
  inset: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
      className={`absolute top-[calc(50%+12px)] z-10 flex h-[25px] w-[25px] -translate-y-1/2 cursor-pointer items-center justify-center text-[rgba(237,237,237,0.9)]`}
      style={dir === "prev" ? { left: inset } : { right: inset }}
    >
      {/* Elementor eicon chevrons (live markup) */}
      <svg
        viewBox="0 0 1000 1000"
        className="h-[25px] w-[25px]"
        fill="currentColor"
        aria-hidden
      >
        <path d={dir === "prev" ? CHEVRON_LEFT : CHEVRON_RIGHT} />
      </svg>
    </button>
  );
}
