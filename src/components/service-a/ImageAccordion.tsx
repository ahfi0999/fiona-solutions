"use client";

import { useState } from "react";

type Panel = { title: string; text: string; image: string };

/**
 * Horizontal image accordion (ElementsKit "image accordion", hover mode), same behaviour as live:
 * the first panel starts open; hovering a panel opens it too (the "checked" one stays open);
 * clicking (or keyboard-selecting) a panel makes it the one that stays open.
 */
export default function ImageAccordion({ panels }: { panels: Panel[] }) {
  const [checked, setChecked] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="mx-auto flex h-[460px] max-w-[1200px] gap-1.5 overflow-hidden" onMouseLeave={() => setHovered(null)}>
      {panels.map((p, i) => {
        const on = i === checked || i === hovered;
        return (
          <button
            key={p.title}
            type="button"
            onMouseEnter={() => setHovered(i)}
            onFocus={() => setChecked(i)}
            onClick={() => setChecked(i)}
            aria-pressed={i === checked}
            className="relative flex min-h-[460px] min-w-0 cursor-pointer items-end overflow-hidden bg-cover bg-center text-center transition-[flex-grow] duration-[400ms] ease-[ease]"
            style={{ backgroundImage: `url(${p.image})`, flexGrow: on ? 3 : 1, flexBasis: 0 }}
          >
            {/* gradient overlay slides up from the bottom (on phones live shows the bare pictures: the captions overflow the narrow panels and are clipped) */}
            <span
              className={`absolute max-md:hidden left-0 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_25%,#00ADEE_100%)] transition-all duration-500 ease-[ease] ${
                on ? "top-0 opacity-100" : "top-full opacity-0"
              }`}
            />
            <span className="relative block w-full px-[15px] pb-8 max-md:hidden">
              <span
                className={`relative mb-3 block break-words text-[26px] font-semibold leading-[26px] text-white transition-all duration-[600ms] ease-[ease] ${
                  on ? "visible top-0 opacity-100" : "invisible top-[100px] opacity-0"
                }`}
              >
                {p.title}
              </span>
              <span
                className={`relative block transition-all duration-[700ms] ease-[ease] ${on ? "visible top-0 opacity-100" : "invisible top-[100px] opacity-0"}`}
              >
                <span className="inline-flex px-5 pb-4 text-[15px] leading-5 text-white">{p.text}</span>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
