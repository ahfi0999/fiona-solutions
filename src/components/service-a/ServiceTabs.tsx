"use client";

import { useState } from "react";
import type { Card } from "@/content/services-a";
import IconCards from "./IconCards";

type Tab = { label: string; items: Card[] };

/** Horizontal tabs, each showing a row of icon cards (AI/ML "We Offering Our Services"). */
export default function ServiceTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" className="flex flex-col items-start lg:flex-row lg:flex-wrap lg:justify-center lg:gap-2.5">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`border py-5 pl-[25px] pr-5 text-xl font-bold leading-[19px] transition-colors ${
              i === active ? "border-[#eff7fa] bg-[#eff7fa] text-[#107ead]" : "border-[#eee] bg-transparent text-[#121a24] hover:text-[#107ead]"
            }`}
            style={{ fontFamily: "var(--font-roboto), Roboto, Arial, sans-serif" }}
          >
            <span className="block min-h-[26px]">{t.label}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mx-auto mt-10 max-w-[1200px] lg:mt-[45px] lg:max-w-[1175px]">
        <IconCards
          key={active}
          items={tabs[active].items}
          layout="top"
          icon="svg"
          hover="fill"
          tabs
          iconSize={52}
          minH={241}
          className={tabs[active].items.length === 4 ? "lg:!grid-cols-4" : "lg:gap-x-[43px]"}
        />
      </div>
    </div>
  );
}
