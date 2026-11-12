"use client";

import { useState } from "react";
import type { Card } from "@/content/services-b";
import fx from "./effects";
import { SvgIcon } from "./ui";

/** Data & Analytics "We Offering Our Services" tabs: horizontal tab row, 4-column card grid. */
export default function TabbedCards({ tabs }: { tabs: { label: string; cards: Card[] }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="px-2.5">
      {/* Live mobile: tabs stack, left-aligned, each as wide as its label. */}
      <div role="tablist" className="mb-2.5 mt-[45px] flex flex-wrap justify-center gap-2.5 max-md:mt-[52px] max-md:flex-col max-md:items-start max-md:gap-0">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex items-center justify-center border bg-white pb-[27px] pl-[25px] pr-5 pt-5 text-[19px] font-semibold leading-[19px] text-[#222] ${
              i === active ? "border-[#eff7fa]" : "border-[#eee]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid gap-5 pt-[30px] sm:grid-cols-2 lg:grid-cols-4">
        {tabs[active].cards.map((c) => (
          <div key={c.title} className={`${fx.tabCard} shadow-[0_0_10px_5px_rgba(0,173,238,0.1)]`}>
            <div className={`${fx.tabCardBox} h-full rounded-[5px] border-l-[14.4px] border-brand bg-white p-5 text-center`}>
              <div className="flex justify-center">
                <div className={`${fx.tabCardIcon} mr-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[-1.2px_6.9px_15px_rgba(0,0,0,0.07)]`}>
                  <SvgIcon name="monitor" size={40} />
                </div>
              </div>
              <h3 className="mb-5 pt-2.5 text-lg font-medium capitalize leading-[23.4px] text-black">{c.title}</h3>
              <p className="mt-[5px] text-[15px] leading-[22px] text-[#656565]">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
