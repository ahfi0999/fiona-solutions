"use client";

import Image from "next/image";
import { useState } from "react";

type Tab = { label: string; title: string; paragraphs: string[]; image: string };

/** Data Backup "Managed IT Services" tabs: vertical tab list on the left, text + image on the right. */
export default function VerticalTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <div className="mt-[65px] grid items-start gap-8 max-md:mt-[53px] max-md:gap-[110px] lg:grid-cols-[258px_1fr] lg:gap-10">
      <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-2.5 max-md:mr-2.5">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex min-h-[64px] items-center border px-5 pb-[22px] pt-[15px] text-left text-base font-medium leading-[25px] ${
              i === active ? "border-[#eff7fa] bg-[#eff7fa] text-[#107ead]" : "border-[#eee] bg-white text-[#121a24]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid items-center gap-8 max-md:gap-10 max-md:px-[30px] lg:grid-cols-[543px_349px] lg:gap-10">
        <div>
          <h3 className="mb-5 text-[32px] font-bold capitalize leading-[1.3] text-[#333]">{t.title}</h3>
          {t.paragraphs.map((p) => (
            <p key={p} className="mb-2.5 text-[15px] leading-[1.5] text-[#444]">
              {p}
            </p>
          ))}
        </div>
        <Image src={t.image} alt="" width={349} height={330} className="mx-auto h-auto w-full max-w-[349px] max-md:max-w-none" />
      </div>
    </div>
  );
}
