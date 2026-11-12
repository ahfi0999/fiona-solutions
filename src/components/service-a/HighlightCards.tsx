import Image from "next/image";
import { blobGrad } from "@/content/services-a";

// Live custom CSS of the highlight cards: on hover a rotating blue/white gradient ring + soft blurred glow appears
// around the card's inner box (fades in over 0.5s, disappears at once on mouse-out, like live where the pseudo elements only
// get their box on :hover).
const glowCss = `@property --fi-rotate { syntax: "<angle>"; initial-value: 132deg; inherits: false; } @keyframes fiSpin { 0% { --fi-rotate: 0deg; } 100% { --fi-rotate: 360deg; } } .svca-glow { position: relative; --first-color: #00adee; --second-color: #ffffff; --third-color: #00adee; } .svca-glow::before, .svca-glow::after { content: ""; position: absolute; width: 0; height: 0; opacity: 0; pointer-events: none; transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out, transform 0.5s ease-in-out; } @media (hover: hover) { .svca-glow:hover::before, .svca-glow:hover::after { z-index: -1; background-image: linear-gradient(var(--fi-rotate), var(--first-color), var(--second-color) 43%, var(--third-color)); animation: fiSpin 2.5s linear infinite; opacity: 1; } .svca-glow:hover::before { width: 102%; height: 102%; border-radius: 8px; top: -1%; left: -1%; } .svca-glow:hover::after { top: 0; left: 0; right: 0; height: 100%; width: 100%; transform: scale(0.9); filter: blur(80px); } }`;

type Item = { title: string; text: string; icon: string; w: number; h: number };

/**
 * Four white cards that overlap the bottom of the hero banner.
 * glow: rotating gradient ring on hover (all pages except cloud transformation, where the live cards have no hover). */
export default function HighlightCards({ items, pb = 180, glow = true }: { items: Item[]; pb?: 120 | 180; glow?: boolean }) {
  return (
    <section className={`relative z-10 flow-root bg-white bg-contain bg-center bg-no-repeat px-[34px] pb-[74px] lg:px-5 ${pb === 120 ? "lg:pb-[120px]" : "lg:pb-[180px]"}`} style={{ backgroundImage: `url(${blobGrad})` }}>
      {glow && (
        <style href="svca-glow" precedence="default">
          {glowCss}
        </style>
      )}
      {/* mobile (live): the cards sit right under the banner instead of overlapping it */}
      <div className="mx-auto -mt-px grid max-w-7xl gap-5 sm:grid-cols-2 lg:-mt-[110px] lg:grid-cols-4">
        {items.map((c, i) => (
          <div
            key={c.title}
            className={`bg-white px-5 pb-[21px] pt-5 text-center shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)] ${i < 2 ? "rounded-[5px]" : ""}`}
          >
            {/* live: the glow sits on this inner box (its own stacking context), under its white content */}
            <div className={`relative ${glow ? "svca-glow z-10" : ""}`}>
              <div className="relative bg-white p-[5px]">
                <Image
                  src={c.icon}
                  alt=""
                  width={c.w}
                  height={c.h}
                  // icon width is a share of the card width on live: 255px wide content on desktop, 272px on mobile
                  className="mx-auto mb-[25px] h-auto w-[calc(var(--w)*272/255)] lg:w-[var(--w)]"
                  style={{ ["--w" as string]: `${c.w}px` }}
                />
                <h3 className="mb-[3px] text-base font-semibold capitalize leading-[1.3] text-[#333]">{c.title}</h3>
                <p className="text-[15px] leading-[21px] text-[#555]">{c.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
