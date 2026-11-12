import type { ReactNode } from "react";
import Reveal, { type RevealAnimation } from "@/components/Reveal";

/** Entrance animation copied from the live element (Elementor _animation / _animation_delay). */
export type RevealSpec = { animation: RevealAnimation; delay?: number; speed?: "fast" | "normal" | "slow" };

// Small shared building blocks for the service pages.

/**
 * Single-colour SVG icon from the live WordPress uploads. The files keep their colour rule in a broken
 * <defs> block (it only works when inlined), so they are drawn as a CSS mask filled with the brand colour,
 * which is how they look on the live site.
 */
export function SvgIcon({ src, size, className = "" }: { src: string; size: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`block shrink-0 bg-[#29abe2] ${className}`}
      style={{
        width: size,
        height: size,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

type HeadProps = {
  kicker?: string;
  title: string;
  text?: ReactNode;
  align?: "center" | "left";
  /** kicker font size in px (22 or 24 on the live site) */
  kickerSize?: 22 | 24;
  /** title font size in px (32, 36 or 40) */
  titleSize?: 32 | 36 | 40;
  dark?: boolean;
  /** entrance animations of the kicker / the text, when the live element has one */
  kickerReveal?: RevealSpec;
  textReveal?: RevealSpec;
  className?: string;
};

// Live keeps the desktop font sizes on mobile (no responsive typography in the Elementor kit).
const titleClass = {
  32: "text-[32px] leading-[1.3] font-bold text-[#333]",
  36: "text-[36px] leading-[1.3] font-bold text-[#333]",
  40: "text-[40px] leading-[1.3] font-semibold text-ink",
};

export function SectionHead({ kicker, title, text, align = "center", kickerSize = 24, titleSize = 36, dark, kickerReveal, textReveal, className = "" }: HeadProps) {
  const kickerCls = `mb-[20px] font-medium capitalize leading-[1.3] text-brand ${kickerSize === 24 ? "text-2xl" : "text-[22px]"}`;
  const textCls = "mt-5 text-[15px] leading-[1.8571] text-[#444]";
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {kicker &&
        (kickerReveal ? (
          <Reveal as="p" {...kickerReveal} className={kickerCls}>
            {kicker}
          </Reveal>
        ) : (
          <p className={kickerCls}>{kicker}</p>
        ))}
      <h2 className={`capitalize ${titleClass[titleSize]} ${dark ? "!text-white" : ""}`}>{title}</h2>
      {text &&
        (textReveal ? (
          <Reveal {...textReveal} className={textCls}>
            {text}
          </Reveal>
        ) : (
          <div className={textCls}>{text}</div>
        ))}
    </div>
  );
}

/** The light-blue blob that sits behind most sections on the live site. */
export const blobBg = "bg-white bg-contain bg-center bg-no-repeat";
