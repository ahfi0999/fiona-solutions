import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import type { CSSProperties } from "react";
import type { Product } from "@/content/products";
import ProductFeatures from "./ProductFeatures";
import ProductAdvantage from "./ProductAdvantage";
import { Arrow, Rich } from "./shared";
import Reveal from "@/components/Reveal";
import "./product-effects.css";

// Mobile values (see Product.mobile) are passed down as CSS variables and used with max-md: utilities.
function mobileVars(p: Product): CSSProperties {
  const m = p.mobile;
  const px = (n: number) => `${n}px`;
  const v: Record<string, string> = {
    "--m-hero-px": px(m.heroPx ?? 10),
    "--m-hero-fs": px(m.heroText[0]),
    "--m-hero-lh": px(m.heroText[1]),
    "--m-hl-top": px(m.hlTop),
    "--m-hl-bottom": px(m.hlBottom),
    "--m-hl-px": px(m.hlPx ?? 20),
    "--m-in-px": px(m.introPx ?? 20),
    "--m-in-kfs": px(m.introKicker?.[0] ?? 20),
    "--m-in-klh": px(m.introKicker?.[1] ?? 26),
    "--m-in-fs": px(m.introText[0]),
    "--m-in-lh": px(m.introText[1]),
    "--m-in-pg": px(m.introText[2]),
    "--m-in-imgw": m.introImgW ? px(m.introImgW) : "100%",
    "--m-in-bmt": px(m.introBtnMt ?? m.introText[2] + 20),
  };
  return v as CSSProperties;
}

// Icon width as a share of the card's content box (Elementor sizes these images in %), so they
// keep their desktop size at 1536px and grow on mobile like on the live site.
function iconPct(w: number, pad: string | number) {
  const parts = String(pad).trim().split(/\s+/).map((x) => parseFloat(x));
  const padX = typeof pad === "number" ? pad : (parts[1] ?? parts[0] ?? 0);
  return `${(w / (265 - 2 * padX)) * 100}%`;
}

// Shared template for the five product pages (Cloud Connect, Cloud Sphere, SECAPI, Verifi AI, Vox AI).
export default function ProductPage({ product: p }: { product: Product }) {
  return (
    <div style={mobileVars(p)}>
      {/* Hero: background video under a 70% black overlay, rounded bottom corners */}
      <section
        className="relative z-10 bg-[#05060f] bg-cover bg-center pb-[50px] pt-[109px] md:rounded-b-[110px] md:py-[var(--py)]"
        style={{ backgroundImage: `url(${p.hero.poster})`, ["--py" as string]: `${p.hero.padY}px` }}
      >
        {/* As on live: only the background image and the overlay are rounded; the video box is not,
            so the video shows (without overlay) in the bottom corners. */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <HeroVideo src={p.hero.video} poster={p.hero.poster} />
        </div>
        <div className="absolute inset-0 bg-black/70 md:rounded-b-[110px]" aria-hidden />
        <div className="relative mx-auto max-w-[1320px] px-[var(--m-hero-px)] md:px-5">
          <div className="max-w-[876px] max-md:text-center">
            <Reveal as="h1" animation="fadeIn" delay={200} className="text-[32px] font-semibold leading-[1.1] text-white md:text-[52px]">
              {p.hero.title}
            </Reveal>
            <p className="mt-2.5 text-[20px] font-semibold leading-[1.3] text-brand md:text-[32px]">{p.hero.subtitle}</p>
            <div
              className={`mt-5 text-[length:var(--m-hero-fs)] leading-[var(--m-hero-lh)] text-[#eee] md:pr-[var(--tpr)] md:text-base md:leading-[25px] ${p.hero.button ? "" : "md:pb-[15px]"}`}
              style={{ ["--tpr" as string]: `${p.hero.textPr}px` }}
            >
              <Rich html={p.hero.text} />
            </div>
            {p.hero.button && (
              <Link
                href="#"
                className="mt-5 inline-flex gap-4 rounded-md bg-brand px-5 py-[15px] text-[15px] leading-[15px] tracking-[0.5px] text-white shadow-[0_12px_24px_-8px_rgba(59,79,228,0.4)]"
              >
                <span>Learn More</span>
                <span className="block h-[18px]">
                  <Arrow />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Highlight cards overlapping the bottom of the hero */}
      <section
        className="relative z-[15] flow-root bg-white bg-cover bg-center px-[var(--m-hl-px)] pb-[var(--m-hl-bottom)] pt-[var(--m-hl-top)] md:px-5 md:pb-[160px] md:pt-0"
        style={{ backgroundImage: `url(${p.highlightsBg})` }}
      >
        <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 md:-mt-[110px] lg:grid-cols-4">
          {p.highlights.map((h, i) => (
            <div
              key={h.title}
              className="bg-white text-center shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)]"
              style={{ padding: p.highlightCardPad ?? 18, borderRadius: i < 2 ? 5 : 0 }}
            >
              {/* Live: an inner box gets a rotating gradient ring + glow on hover */}
              <div className="fp-ring" style={{ padding: p.highlightRingPad ?? 2 }}>
                <div className="bg-white" style={{ padding: h.pad ?? p.highlightPad ?? 0 }}>
                  <Image
                    src={h.icon}
                    alt=""
                    width={h.w}
                    height={h.h}
                    className="mx-auto mb-6 h-auto object-contain"
                    style={{ width: iconPct(h.w, h.pad ?? p.highlightPad ?? 0) }}
                  />
                  <h3 className="mb-1 text-base font-semibold leading-[1.3] text-[#333]">{h.title}</h3>
                  <p className="text-[15px] leading-[21px] text-[#555]">
                    <Rich html={h.text} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro: text left, illustration right */}
      <section className="bg-white px-[var(--m-in-px)] pb-[50px] md:px-5 md:pb-[60px] md:pt-5">
        <div
          className="mx-auto grid max-w-[1280px] items-center md:gap-10 lg:grid-cols-[var(--cols)] lg:gap-0"
          style={{ ["--cols" as string]: p.intro.cols }}
        >
          <div>
            <p className="mb-5 text-[length:var(--m-in-kfs)] font-medium leading-[var(--m-in-klh)] text-brand max-md:text-center md:text-[22px] md:leading-[1.3]">
              {p.intro.kicker}
            </p>
            <h2
              className="mb-5 text-[32px] font-semibold leading-10 text-black max-md:text-center md:text-[36px] md:leading-[var(--lh)]"
              style={{ ["--lh" as string]: `${p.intro.titleLineHeight}px` }}
            >
              {p.intro.title}
            </h2>
            <div
              className="space-y-[var(--m-in-pg)] text-justify text-[length:var(--m-in-fs)] leading-[var(--m-in-lh)] text-[#444] md:space-y-[var(--pg)] md:text-[15px] md:leading-[var(--dlh)] lg:pr-[var(--pr)] [&_strong]:font-bold [&_strong]:text-[#333]"
              style={{ ["--dlh" as string]: p.intro.lineHeight ?? "27.86px", ["--pr" as string]: `${p.intro.textPadRight ?? 0}px`, ["--pg" as string]: `${p.intro.paraGap ?? 15}px` }}
            >
              {p.intro.paragraphs.map((t, i) => (
                <p key={i}>
                  <Rich html={t} />
                </p>
              ))}
            </div>
            <div className="max-md:text-center">
            <Link
              href="#"
              className="mt-[var(--m-in-bmt)] inline-flex gap-4 md:mt-[35px] rounded-md bg-brand px-[22px] py-[18px] text-base font-medium leading-4 tracking-[0.5px] text-white shadow-[0_12px_24px_-8px_rgba(59,79,228,0.4)]"
            >
              <span>Get Started</span>
              <span className="block h-[18.4px]">
                <Arrow className="h-4 w-4" />
              </span>
            </Link>
            </div>
          </div>
          <div className="flex md:justify-center lg:justify-end lg:pr-[var(--imr)]" style={{ ["--imr" as string]: `${p.intro.imageMr ?? 0}px` }}>
            <Image
              src={p.intro.image}
              alt={p.intro.title}
              width={p.intro.imageW}
              height={p.intro.imageH}
              className="h-auto w-full max-w-[var(--m-in-imgw)] rounded-lg md:max-w-[var(--imw)]"
              style={{ ["--imw" as string]: `${p.intro.imageW}px` }}
            />
          </div>
        </div>
      </section>

      <ProductFeatures f={p.features} m={p.mobile} />
      <ProductAdvantage m={p.mobile} />
    </div>
  );
}
