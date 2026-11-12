"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import "@/components/about-us/effects.css";

// One ElementsKit "client logo" slider from the live About page (a Swiper):
// slidesPerView / spaceBetween per breakpoint (<768 / 768-1023 / >=1024), autoplay every 3s with a 1s slide,
// pause on hover, rewinds to the first slide after the last one. Tiles swap to a hover image on hover.
export type SliderLogo = { src: string; hover?: string };

type Props = {
  logos: SliderLogo[];
  /** slides per view: [mobile, tablet, desktop] */
  spv: [number, number, number];
  /** slides per group on mobile (tablet/desktop always 1) */
  groupMobile?: number;
  autoplay?: boolean;
};

const GAPS: [number, number, number] = [10, -1, 15];

function bp() {
  if (typeof window === "undefined") return 2;
  return window.innerWidth >= 1024 ? 2 : window.innerWidth >= 768 ? 1 : 0;
}

export default function LogoSlider({ logos, spv, groupMobile = 1, autoplay = true }: Props) {
  const [index, setIndex] = useState(0);
  const [b, setB] = useState(2);
  const hovered = useRef(false);

  useEffect(() => {
    const onResize = () => setB(bp());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const per = spv[b];
  const maxIndex = Math.max(0, logos.length - per);
  const step = b === 0 ? groupMobile : 1;
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    if (!autoplay || maxIndex === 0) return;
    const id = window.setInterval(() => {
      if (hovered.current) return;
      setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i + step, maxIndex)));
    }, 4000); // 3s delay + 1s transition
    return () => window.clearInterval(id);
  }, [autoplay, maxIndex, step]);

  const gap = GAPS[b];
  const vars = {
    "--n-m": spv[0], "--n-t": spv[1], "--n-d": spv[2],
    "--g-m": `${GAPS[0]}px`, "--g-t": `${GAPS[1]}px`, "--g-d": `${GAPS[2]}px`,
  } as CSSProperties;
  const slideW = `((100% - ${per - 1} * ${gap}px) / ${per})`;

  return (
    <div
      className="overflow-hidden"
      style={vars}
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
    >
      <div
        className="flex [--g:var(--g-m)] [--n:var(--n-m)] md:[--g:var(--g-t)] md:[--n:var(--n-t)] lg:[--g:var(--g-d)] lg:[--n:var(--n-d)]"
        style={{
          gap: "var(--g)",
          transform: current ? `translate3d(calc(-${current} * (${slideW} + ${gap}px)), 0, 0)` : undefined,
          transition: "transform 1000ms ease",
        }}
      >
        {logos.map((l, i) => (
          <div key={`${l.src}-${i}`} className="shrink-0 basis-[calc((100%_-_(var(--n)_-_1)_*_var(--g))_/_var(--n))]">
            <div className="ab-tile flex min-h-[80px] items-center justify-center border border-[#dfe1e6] bg-white p-2.5">
              <div className="relative w-full">
                <Image src={l.src} alt="" width={350} height={200} sizes="140px" className="ab-tile-main h-auto w-full" />
                <Image
                  src={l.hover ?? l.src}
                  alt=""
                  width={350}
                  height={200}
                  sizes="140px"
                  unoptimized={(l.hover ?? l.src).endsWith(".svg")}
                  className="ab-tile-hover h-auto w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
