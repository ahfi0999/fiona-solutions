import type { ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";

type Props = {
  kicker?: string;
  title: string;
  subtitle?: string;
  text?: ReactNode;
  bullets?: string[];
  image: string;
  video: string;
  /** opacity of the black overlay */
  overlay: number;
  /** top padding (px) on desktop */
  pad: number;
  /** total height (px) on desktop */
  height: number;
  /** live: the title fades in (Elementor fadeIn, 200ms delay) on every page except cloud transformation */
  revealTitle?: boolean;
};

/** Dark video banner with rounded bottom corners. The highlight cards below overlap its bottom edge. */
export default function ServiceHero({ kicker, title, subtitle, text, bullets, image, video, overlay, pad, height, revealTitle = true }: Props) {
  const titleCls = "break-words text-center text-[52px] font-semibold capitalize leading-[1.1] !text-white lg:text-left";
  return (
    <section
      className="relative overflow-hidden rounded-b-[110px] bg-[#05060f] bg-cover bg-center pb-[var(--mpb)] pt-[var(--mpt)] lg:min-h-[var(--h)] lg:pb-0 lg:pt-[var(--pt)]"
      style={{
        backgroundImage: `url(${image})`,
        ["--pt" as string]: `${pad}px`,
        ["--h" as string]: `${height}px`,
        // mobile (live): the same padding top and bottom, content full width; the live banner starts 21px above the page top
        ["--mpt" as string]: `${pad - 21}px`,
        ["--mpb" as string]: `${pad + (bullets ? 0 : 31)}px`,
      }}
    >
      <HeroVideo src={video} poster={image} />
      <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-[876px]">
          {kicker && <p className="-mt-2.5 mb-5 text-[32px] font-semibold leading-[1.3] text-brand">{kicker}</p>}
          {revealTitle ? (
            <Reveal as="h1" animation="fadeIn" delay={200} className={titleCls}>
              {title}
            </Reveal>
          ) : (
            <h1 className={titleCls}>{title}</h1>
          )}
          {subtitle && <p className="mt-2.5 text-[32px] font-semibold capitalize leading-[1.3] text-brand">{subtitle}</p>}
          {text && <div className="mt-5 max-w-[871px] pr-[5px] text-center text-[14.592px] leading-[25px] text-[#eee] lg:pr-0 lg:text-justify lg:text-base [&_strong]:font-bold">{text}</div>}
          {bullets && (
            <ul className="mt-[14.6px] lg:mt-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-center text-[15px] leading-[1.857] text-white">
                  <CheckSquare className="mr-[5px] h-5 w-5 shrink-0 text-brand" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/** Stand-in for the "jki-check-square-line" icon font glyph used on the live site. */
export function CheckSquare({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 12.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11" />
      <path d="m8.5 11.5 3 3L21 5" />
    </svg>
  );
}
