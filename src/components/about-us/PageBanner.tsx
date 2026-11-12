import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";

type Card = { title: string; text: string; icon: string; w: number; h: number };

// Dark top banner used by the About, Services and Contact pages: background image (+ optional video),
// black overlay and rounded bottom corners. The fixed header sits transparently on top of it.
// Like live, the video layer is NOT clipped by the rounded corners (only the image background and the overlay are),
// so the bottom corners show the un-darkened video (live plays it on mobile too).
export function PageBanner({
  image,
  video,
  overlay,
  className,
  children,
}: {
  image: string;
  video?: string;
  overlay: number;
  className: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`relative rounded-b-[60px] bg-[#05060f] bg-cover bg-center md:rounded-b-[110px] ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {video && (
        <div className="absolute inset-0 overflow-hidden">
          <HeroVideo src={video} poster={image} />
        </div>
      )}
      <div className="absolute inset-0 rounded-b-[60px] bg-black md:rounded-b-[110px]" style={{ opacity: overlay }} />
      <div className="relative mx-auto max-w-7xl px-5 xl:px-0">{children}</div>
    </section>
  );
}

// Row of four white cards that overlaps the bottom of the banner.
export function BannerCards({
  cards,
  overlap,
  cardClass,
  className = "",
  iconClass = "",
  titleClass = "mt-[18px]",
  gridClass = "",
}: {
  cards: Card[];
  overlap: string;
  cardClass: string;
  className?: string;
  /** extra classes for the icon (e.g. a different mobile size) */
  iconClass?: string;
  /** spacing above the card title */
  titleClass?: string;
  /** extra classes for the card grid (column widths / gaps) */
  gridClass?: string;
}) {
  return (
    <div className={`relative z-10 px-5 ${overlap} ${className}`}>
      <div className={`mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4 ${gridClass}`}>
        {cards.map((c) => (
          <div key={c.title} className="flex">
            <div className={`flex h-full w-full flex-col items-center justify-center rounded-[5px] bg-white p-5 text-center ${cardClass}`}>
              <Image
                src={c.icon}
                alt=""
                width={c.w}
                height={c.h}
                unoptimized={c.icon.endsWith(".svg")}
                className={`h-[var(--ih)] w-[var(--iw)] ${iconClass}`}
                style={{ "--iw": `${c.w}px`, "--ih": `${c.h}px` } as CSSProperties}
              />
              <h3 className={`${titleClass} text-base font-semibold leading-[1.3] text-[#333]`}>{c.title}</h3>
              <p className="mt-[3px] text-[15px] leading-[21px] text-[#555]">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
