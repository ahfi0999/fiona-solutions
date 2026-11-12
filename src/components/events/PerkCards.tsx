import Image from "next/image";
import type { CSSProperties } from "react";

type Perk = { title: string; text: string; icon: string; w: number; h: number };

// Row of four white icon cards that overlaps the bottom of the page banner.
// Live details reproduced here: only the first two cards have rounded corners; the icon width is a
// percentage of the card's (live) 265px-wide content box (so icons grow on mobile); no min-height on mobile.
export default function PerkCards({
  perks,
  overlap,
  mobileOverlap,
  minHeight,
  className = "",
}: {
  perks: Perk[];
  /** px the cards are pulled up over the banner (desktop) */
  overlap: number;
  /** same on mobile (negative = gap below the banner) */
  mobileOverlap: number;
  minHeight: number;
  className?: string;
}) {
  const vars = { "--ov": `${-overlap}px`, "--mov": `${-mobileOverlap}px`, "--mh": `${minHeight}px` } as CSSProperties;
  return (
    <section className={`relative z-10 mt-[var(--mov)] md:mt-[var(--ov)] ${className}`} style={vars}>
      <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => (
          <div
            key={p.title}
            className={`flex flex-col items-center bg-white px-[25px] pb-[25px] pt-5 text-center shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)] md:min-h-[var(--mh)] md:pb-5 ${
              i < 2 ? "rounded-[5px]" : ""
            }`}
          >
            {/* live: icon 25px below the card top, title ~25px below the icon (no fixed icon row height) */}
            <Image
              src={p.icon}
              alt=""
              width={p.w}
              height={p.h}
              className="mb-6 mt-[5px] h-auto md:mb-[25px]"
              style={{ width: `calc((100% + 10px) * ${(p.w / 265).toFixed(4)})` }}
            />
            <h3 className="mb-1 text-base font-semibold leading-[1.3] text-[#333]">{p.title}</h3>
            <p className="text-[15px] leading-[21px] text-[#555]">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
