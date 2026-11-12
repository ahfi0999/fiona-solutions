import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import { blobGrad, iconSize, type Card, type Hero, type IconCard, type ImageCard } from "@/content/services-b";
import fx from "./effects";
import { iconPaths, type IconName } from "./icon-paths";

/* Shared building blocks for the service pages in group B (data analytics, cyber security,
   data backup, IT consulting, SEO, training). Values mirror the live Elementor styles. */

export const blobBg: CSSProperties = { backgroundImage: `url(${blobGrad})` };
export const softShadow = "shadow-[0_0_10px_5px_rgba(0,173,238,0.1)]";

export function Container({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`relative mx-auto w-full max-w-[1280px] px-5 xl:px-0 ${className}`} style={style}>
      {children}
    </div>
  );
}

export function SvgIcon({ name = "team", size = 45, className = "" }: { name?: IconName; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} fill="#00adee" aria-hidden className={`shrink-0 ${className}`}>
      {iconPaths[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Kicker (blue) + title + optional intro paragraph. */
export function SectionHead({
  kicker,
  title,
  text,
  align = "center",
  kickerSize = 22,
  titleSize = 32,
  titleClass = "font-bold text-[#333]",
  kickerClass = "mb-5",
  textClass = "mt-5",
  textReveal = false,
  mobileKickerSize,
  mobileTitleSize,
  className = "",
}: {
  kicker?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  kickerSize?: 22 | 24;
  titleSize?: 32 | 36;
  titleClass?: string;
  kickerClass?: string;
  textClass?: string;
  /** Live: intro text fades in up (Elementor fadeInUp, 600ms delay). */
  textReveal?: boolean;
  /** Live mobile (<768px) font sizes where Elementor sets them (line-height stays 1.3). */
  mobileKickerSize?: number;
  mobileTitleSize?: number;
  className?: string;
}) {
  const vars = {
    ...(mobileKickerSize ? { "--mks": `${mobileKickerSize}px` } : {}),
    ...(mobileTitleSize ? { "--mtz": `${mobileTitleSize}px` } : {}),
  } as CSSProperties;
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`} style={vars}>
      {kicker && (
        <h3
          className={`${kickerClass} font-medium capitalize text-brand ${mobileKickerSize ? "max-md:!text-[length:var(--mks)]" : ""}`}
          style={{ fontSize: kickerSize, lineHeight: 1.3 }}
        >
          {kicker}
        </h3>
      )}
      <h2
        className={`capitalize leading-[1.3] ${titleClass} ${mobileTitleSize ? "max-md:!text-[length:var(--mtz)]" : ""}`}
        style={{ fontSize: titleSize }}
      >
        {title}
      </h2>
      {text &&
        (textReveal ? (
          <Reveal as="p" animation="fadeInUp" delay={600} className={`${textClass} text-[15px] leading-[1.857] text-[#444]`}>
            {text}
          </Reveal>
        ) : (
          <p className={`${textClass} text-[15px] leading-[1.857] text-[#444]`}>{text}</p>
        ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero banner + the four overlapping cards below it                   */
/* ------------------------------------------------------------------ */
export function ServiceHero({ hero }: { hero: Hero }) {
  const m = hero.mobile ?? {};
  // Mobile (<768px) values live as CSS variables so one set of classes serves every page.
  const vars = {
    "--py": `${hero.padY}px`,
    "--mpt": m.padTop !== undefined ? `${m.padTop}px` : `${hero.padY - 21}px`,
    "--mpb": `${m.padBottom ?? hero.padY}px`,
    "--mpx": `${m.padX ?? 0}px`,
    "--mts": `${m.titleSize ?? hero.titleSize ?? 52}px`,
    "--mss": `${m.subtitleSize ?? 32}px`,
    "--mps": `${m.textSize ?? 14.592}px`,
    "--mpl": `${m.textLh ?? 25}px`,
  } as CSSProperties;
  // Live: the title fades in (Elementor fadeIn, 200ms delay, normal speed); the rest is static.
  const title = (
    <Reveal
      as="h1"
      animation="fadeIn"
      delay={200}
      className={`${hero.kickerFirst ? "mb-5" : "mb-2.5"} font-semibold capitalize leading-[1.1] text-white [overflow-wrap:break-word] max-md:text-center max-md:!text-[length:var(--mts)]`}
      style={{ fontSize: hero.titleSize ?? 52 }}
    >
      {hero.title}
    </Reveal>
  );
  const subtitle = (
    <h2
      className={`${hero.kickerFirst ? "-mt-2.5" : ""} ${m.subtitleCenter ? "max-md:text-center" : ""} mb-5 text-[32px] font-semibold capitalize leading-[1.3] text-brand max-md:text-[length:var(--mss)]`}
    >
      {hero.subtitle}
    </h2>
  );
  return (
    <section
      // Live mobile mostly keeps the desktop padding; the section starts 21px under the header there.
      className="relative z-[1] overflow-hidden rounded-b-[110px] bg-[#111] bg-cover bg-center pb-[var(--mpb)] pt-[var(--mpt)] md:pb-[var(--py)] md:pt-[var(--py)]"
      style={{ backgroundImage: `url(${hero.bg})`, ...vars }}
    >
      {/* Elementor hides the background video on phones. */}
      <div className="absolute inset-0 hidden md:block">
        <HeroVideo src={hero.video} poster={hero.bg} />
      </div>
      <div className="absolute inset-0 bg-black" style={{ opacity: hero.overlay }} />
      <Container className="max-md:px-[var(--mpx)]">
        <div className="text-left lg:w-[var(--cw)]" style={{ ["--cw" as string]: `${hero.contentW ?? 876}px`, ["--tpr" as string]: `${hero.textPr ?? 5}px` }}>
          {hero.kickerFirst ? (
            <>
              {subtitle}
              {title}
            </>
          ) : (
            <>
              {title}
              {subtitle}
            </>
          )}
          <p className="mb-[1em] pb-[15px] pr-[var(--tpr)] text-center text-[length:var(--mps)] leading-[var(--mpl)] text-[#eee] md:text-justify md:text-base md:leading-[25px]">{hero.text}</p>
        </div>
      </Container>
    </section>
  );
}

/** mobileX / mobileTop: live mobile side inset of the cards and their offset from the hero's bottom edge. */
export function FeatureCards({
  items,
  mobileX = 34,
  mobileTop = -2,
  mobileBottom = 74,
}: {
  items: IconCard[];
  mobileX?: number;
  mobileTop?: number;
  mobileBottom?: number;
}) {
  return (
    <div className="relative z-[2] flow-root bg-white bg-contain bg-center bg-no-repeat" style={blobBg}>
      <Container
        className="-mt-[160px] pb-[100px] pt-[50px] max-md:mt-[var(--fmt)] max-md:px-[var(--fpx)] max-md:pb-[var(--fpb)] max-md:pt-0 md:pb-[120px]"
        style={{ ["--fpx" as string]: `${mobileX}px`, ["--fmt" as string]: `${mobileTop}px`, ["--fpb" as string]: `${mobileBottom}px` }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <div key={c.title} className="relative z-10 flex flex-col rounded-[5px] bg-white p-5 shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)]">
              {/* Live: hovering spins a gradient ring + glow behind the inner white box. */}
              <div className={`${fx.spin} flex-1`}>
                <div className={`${fx.spinInner} h-full p-[5px] text-center`}>
                  <Image
                    src={c.icon}
                    alt=""
                    width={c.iconW}
                    height={Math.round((c.iconW * (iconSize[c.icon]?.[1] ?? 1)) / (iconSize[c.icon]?.[0] ?? 1))}
                    className="mx-auto mb-[25px] h-auto"
                    // Live: icon width is a percentage of the card, so it grows on phones.
                    style={{ width: `${(c.iconW / 255) * 100}%` }}
                  />
                  <h3 className="mb-1 text-base font-semibold capitalize leading-[1.3] text-[#333]">{c.title}</h3>
                  <p className="text-[15px] leading-[21px] text-[#555]">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Info boxes (Elementskit info-box variants used across these pages)  */
/* ------------------------------------------------------------------ */
const boxVariants = {
  /** thin left border, rounded top-right (IT components, benefits) */
  thinLeft: "border-l-[2.4px] rounded-[0_30px_0_0] px-10 py-2.5",
  /** thin left border, rounded right side (backup "advanced" grid) */
  thinLeftRound: "border-l-[2.4px] rounded-[0_30px_30px_0] px-10 py-2.5",
  /** thick left border, leaf corners (cyber "why choose") */
  leaf: "border-l-[9.6px] rounded-[60px_3px] px-[25px] py-2.5",
  /** right border (IT why choose, SEO services) */
  right: "border-r-[4.8px] rounded-[5px] px-5 py-2.5",
} as const;

/** Live mobile (<768px) padding of the ElementsKit boxes: 40/34/30px on most pages, 15px on the backup page. */
const mobilePads = {
  default: "max-md:!pb-[30px] max-md:!pt-10 max-md:!px-[34px]",
  tight: "max-md:!p-[15px]",
} as const;

export function InfoBox({
  item,
  variant,
  titleSize = 18,
  icon = "team",
  hover = "radial",
  mobilePad = "default",
  className = "",
}: {
  item: Card | string;
  variant: keyof typeof boxVariants;
  titleSize?: 18 | 20;
  icon?: IconName;
  /** Live hover fill: radial or linear blue gradient. */
  hover?: "radial" | "linear";
  mobilePad?: keyof typeof mobilePads;
  className?: string;
}) {
  const title = typeof item === "string" ? undefined : item.title;
  const text = typeof item === "string" ? item : item.text;
  return (
    <div className={`${fx.box} ${fx[hover]} flex h-full flex-col items-center justify-center border-brand bg-white text-center ${softShadow} ${boxVariants[variant]} ${mobilePads[mobilePad]} ${className}`}>
      <div className="mb-2.5 flex justify-center max-md:mb-2">
        {/* Elementskit adds a 20px right margin to the icon, nudging it left of centre. */}
        <SvgIcon name={icon} className="mr-5" />
      </div>
      {title && (
        <h3 className="w-full font-medium capitalize leading-[26px] text-black" style={{ fontSize: titleSize }}>
          {title}
        </h3>
      )}
      <p className="mb-2.5 w-full text-[15px] leading-6 text-[#444]">{text}</p>
    </div>
  );
}

/** Horizontal info row: icon on the left, thick blue right border (lists next to images). */
export function InfoRow({
  item,
  shape = "leaf",
  hover = "linear",
  mobilePad = "default",
}: {
  item: Card;
  shape?: "leaf" | "tail";
  hover?: "radial" | "linear";
  mobilePad?: keyof typeof mobilePads;
}) {
  return (
    <div
      className={`${fx.box} ${fx[hover]} flex items-start gap-5 border-r-[9.6px] border-brand bg-white px-[25px] py-2.5 text-left ${softShadow} ${mobilePads[mobilePad]} ${
        shape === "leaf" ? "rounded-[60px_3px]" : "rounded-[0_3px_60px_3px]"
      }`}
    >
      <SvgIcon />
      <div>
        <h3 className="text-lg font-medium capitalize leading-[26px] text-black">{item.title}</h3>
        <p className="mb-2.5 text-[15px] leading-6 text-[#444]">{item.text}</p>
      </div>
    </div>
  );
}

/** Image-topped card (cyber threats, IT portfolio, SEO process). */
export function ImageBox({ item, link, justify = false }: { item: ImageCard; link?: string; justify?: boolean }) {
  return (
    <div className={`${fx.imgCard} flex h-full flex-col rounded-t-[10px] shadow-[0_0_20px_10px_rgba(0,173,238,0.1)]`}>
      {/* Live hover: shadow shifts, image zooms to 1.1 inside its clipped header, title + left rule turn blue. */}
      <div className={`${fx.imgWrap} rounded-t-[10px]`}>
        <Image
          src={item.image}
          alt=""
          width={675}
          height={400}
          className="aspect-[675/400] h-auto w-full rounded-t-[10px] object-cover"
        />
      </div>
      <div className={`flex flex-1 flex-col border-[0.8px] border-[#f7f7f7] bg-white pb-2.5 pt-[15px] max-md:pb-[30px] max-md:pr-[30px] max-md:pt-[31px] ${justify ? "text-justify" : "text-left"}`}>
        <div className={`${fx.imgBody} border-l-[1.6px] border-white px-5`}>
          <h3 className="mb-2.5 text-xl font-medium capitalize leading-[26px] text-black">{item.title}</h3>
          <p className={`${link ? "" : "mb-2.5"} text-[15px] leading-[22px] text-[#666]`}>{item.text}</p>
        </div>
        {link && (
          <div className="mt-auto px-5 pt-5">
            <a href="#" className="inline-flex rounded-[5px] bg-white pb-2.5 text-[15px] leading-6 text-brand">
              {link}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Misc                                                                */
/* ------------------------------------------------------------------ */
function CheckSquare() {
  return (
    <svg viewBox="0 0 448 512" width={15} height={17} fill="#00adee" aria-hidden className="shrink-0">
      <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z" />
    </svg>
  );
}

export function CheckList({ items, tight = false }: { items: string[]; tight?: boolean }) {
  return (
    <ul className="space-y-[3px]">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-[5px] pb-[3px]">
          <CheckSquare />
          <span className={`pl-[7px] text-[15px] text-[#444] ${tight ? "leading-6" : "leading-[1.857]"}`}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <h3 className="mb-5 text-[22px] font-medium capitalize leading-[1.3] text-brand">{children}</h3>;
}

export function Title({ children, size = 32, className = "mb-5" }: { children: ReactNode; size?: 32 | 36; className?: string }) {
  return (
    <h2 className={`${className} font-bold capitalize leading-[1.3] text-[#333]`} style={{ fontSize: size }}>
      {children}
    </h2>
  );
}
